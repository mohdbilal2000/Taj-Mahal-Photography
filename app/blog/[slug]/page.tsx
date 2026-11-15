import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import MobileActionBar from '@/components/MobileActionBar';
import ReadingProgress from '@/components/ReadingProgress';
import Price from '@/components/Price';
import QuickBook from '@/components/QuickBook';
import BlogToc from '@/components/blog/BlogToc';
import {
  PlanPause,
  ReadNextPause,
  SourcesCard,
  StudioCard,
  SisterCard,
  AuthorCard,
} from '@/components/blog/ArticleCards';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { POSTS, postBySlug, postPlans, relatedPosts, sisterRelevant, type Section } from '@/lib/blog';
import { planById, imageForPlan } from '@/lib/plans';
import {
  SITE,
  jsonLd,
  graphSchema,
  breadcrumbSchema,
  faqSchema,
  speakableSpec,
} from '@/lib/seo';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};

  const url = `${SITE.url}/blog/${post.slug}`;

  return {
    title: { absolute: post.title },
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url,
      images: [{ url: `${SITE.url}${post.image}`, alt: post.imageAlt }],
      publishedTime: post.published,
      modifiedTime: post.updated,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [`${SITE.url}${post.image}`],
    },
  };
}

function sectionId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function longDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function SectionBlock({ section, index }: { section: Section; index: number }) {
  return (
    <section id={sectionId(section.heading)} className="reveal scroll-mt-28">
      <div className="mb-5 flex items-baseline gap-4">
        <span aria-hidden="true" className="font-serif text-4xl italic leading-none text-gold-500 sm:text-5xl">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h2 className="h3-fluid font-serif font-semibold text-ink-900 text-balance">{section.heading}</h2>
      </div>

      {section.body?.map((paragraph, i) => (
        <p
          key={paragraph.slice(0, 40)}
          className={`mb-5 text-[1.0625rem] leading-[1.85] text-ink-700 text-pretty sm:text-lg ${
            index === 0 && i === 0
              ? 'first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-6xl first-letter:italic first-letter:leading-[0.8] first-letter:text-gold-600'
              : ''
          }`}
        >
          {paragraph}
        </p>
      ))}

      {section.list && (
        <ul className="my-6 space-y-1 rounded-2xl border hairline bg-white p-3 sm:p-4">
          {section.list.map((item) => (
            <li key={item.slice(0, 40)} className="flex gap-3 rounded-lg px-2 py-2.5 text-ink-700 leading-relaxed">
              <span aria-hidden="true" className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400/25 text-[11px] font-bold text-gold-700">
                ✓
              </span>
              <span className="text-pretty">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {section.table && (
        <div className="my-6 overflow-hidden rounded-2xl border hairline bg-white">
          <table className="block w-full text-left text-sm sm:table">
            <thead className="hidden bg-marble-100 sm:table-header-group">
              <tr>
                <th scope="col" className="w-1/3 px-5 py-3 font-semibold text-ink-900">{section.table.head[0]}</th>
                <th scope="col" className="px-5 py-3 font-semibold text-ink-900">{section.table.head[1]}</th>
              </tr>
            </thead>
            <tbody className="block sm:table-row-group">
              {section.table.rows.map(([left, right]) => (
                <tr key={left} className="block border-t hairline first:border-t-0 sm:table-row sm:first:border-t">
                  <td className="block px-5 pb-1 pt-4 font-semibold text-ink-900 sm:table-cell sm:py-4 sm:align-top">{left}</td>
                  <td className="block px-5 pb-4 text-ink-700 sm:table-cell sm:py-4 sm:align-top">{right}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  const url = `${SITE.url}/blog/${post.slug}`;
  const plans = postPlans(post);
  const related = relatedPosts(post);
  const toc = post.sections.map((s) => ({ id: sectionId(s.heading), label: s.heading }));

  // Two natural pauses: after about 40% (a package that fits) and about 75% (a related read).
  const n = post.sections.length;
  const planPauseAfter = Math.max(0, Math.min(n - 2, Math.round(n * 0.4) - 1));
  const readPauseAfter = Math.max(planPauseAfter + 1, Math.min(n - 1, Math.round(n * 0.75) - 1));
  const pausePlan = plans[0] ?? planById('sunrise');

  return (
    <div className="min-h-screen flex flex-col">
      <ReadingProgress />
      <Header onLight />

      <main className="flex-grow bg-marble-50">
        {/* Title — paper, italic, one polaroid. The question, then the answer. */}
        <header className="bg-marble-100 pt-28 md:pt-32">
          <div className="shell grid items-center gap-10 pb-14 md:pb-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-14">
            <div>
              <nav aria-label="Breadcrumb" className="mb-6 text-xs tracking-wide text-ink-500">
                <Link href="/" className="inline-block py-1 hover:text-gold-700">Home</Link>
                <span className="mx-2 text-ink-300">/</span>
                <Link href="/blog" className="inline-block py-1 hover:text-gold-700">Blog</Link>
              </nav>
              <span className="collage-label eyebrow text-gold-700">{post.category}</span>
              <h1 className="h1-fluid mt-5 font-serif font-medium italic text-ink-900 text-balance">{post.title}</h1>
              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-700">
                <time dateTime={post.updated}>Updated {longDate(post.updated)}</time>
                <span aria-hidden="true">·</span>
                <span>{post.readingMinutes} min read</span>
                <span aria-hidden="true">·</span>
                {post.byline ? (
                  <span>{post.byline}</span>
                ) : (
                  <Link href="/team/danish-iqbal" className="link-sweep inline-block py-1 hover:text-gold-700">
                    Danish Iqbal, Ministry of Tourism licensed photographer
                  </Link>
                )}
              </div>
            </div>

            <figure className="collage-card taped relative mx-auto w-full max-w-md lg:max-w-none" style={{ ['--tilt' as string]: '1.4deg' }}>
              <div className="collage-media relative aspect-[4/3]">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 36vw, 90vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <figcaption className="collage-body">
                <span className="collage-caption text-2xl">{post.readingMinutes} minutes, start to finish</span>
              </figcaption>
            </figure>
          </div>
        </header>

        {/* Body — contents rail on the left, a reading column on the right. */}
        <div className="shell grid gap-x-14 py-12 md:py-16 lg:grid-cols-[14rem_minmax(0,1fr)]">
          <aside className="lg:pt-2">
            <BlogToc items={toc} />
          </aside>

          <article className="min-w-0 max-w-[44rem]">
            {/* The direct answer. First thing read, first thing quoted. */}
            <div
              id="answer"
              data-speakable="answer"
              className="mb-12 rounded-2xl border border-gold-500/30 bg-[#FBF5EA] p-6 sm:p-8"
            >
              <p className="collage-caption text-2xl text-gold-700">the short answer</p>
              <p className="lead mt-3 text-ink-900 text-pretty">{post.answer}</p>
            </div>

            <div className="space-y-14">
              {post.sections.map((section, i) => (
                <div key={section.heading}>
                  <SectionBlock section={section} index={i} />
                  {i === planPauseAfter && pausePlan && (
                    <PlanPause plan={pausePlan} postTitle={post.title} />
                  )}
                  {i === readPauseAfter && related[0] && <ReadNextPause post={related[0]} />}
                </div>
              ))}
            </div>

            {/* FAQ — the long tail, and the FAQPage schema below mirrors it. */}
            {post.faqs.length > 0 && (
              <section id="faq" className="mt-16 scroll-mt-28">
                <h2 className="h3-fluid font-serif font-semibold text-ink-900 mb-6">
                  Questions we get asked
                </h2>
                <div className="divide-y hairline rounded-2xl border hairline bg-white px-5">
                  {post.faqs.map((faq) => (
                    <details key={faq.question} className="group py-4">
                      <summary className="flex min-h-[2.75rem] cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink-900">
                        <span className="text-pretty">{faq.question}</span>
                        <span
                          aria-hidden="true"
                          className="shrink-0 text-xl text-gold-600 transition-transform duration-300 group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>
                      <p className="mt-2 pb-2 text-ink-700 leading-relaxed text-pretty">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}
          </article>
        </div>

        {/* The last page: where the facts came from, then the studio, then the sister company. */}
        <section className="border-t hairline bg-marble-100 section" aria-label="Before you go">
          <div className="shell">
            <div className="mx-auto max-w-5xl space-y-8">
              {post.sources && post.sources.length > 0 && <SourcesCard sources={post.sources} />}

              {(post.pitch || sisterRelevant(post)) && (
                <div className={`collage-grid grid gap-7 ${post.pitch && sisterRelevant(post) ? 'md:grid-cols-2' : 'mx-auto max-w-xl'}`}>
                  {post.pitch && <StudioCard pitch={post.pitch} />}
                  {sisterRelevant(post) && <SisterCard />}
                </div>
              )}

              <AuthorCard byline={post.byline} />
            </div>
          </div>
        </section>

        {/* The point of the article: a package to book. */}
        {plans.length > 0 && (
          <section className="border-t hairline bg-white section">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <h2 className="h3-fluid font-serif font-semibold text-ink-900 mb-2">
                Ready to shoot it yourself?
              </h2>
              <p className="text-ink-700 mb-8">
                The packages this guide applies to, with a licensed photographer and the permit handled.
              </p>

              <QuickBook defaultPlanId={plans[0]!.id} className="mb-10" />

              <div className="reveal reveal-stagger collage-grid grid gap-6 sm:gap-7 sm:grid-cols-2">
                {plans.map((plan) => (
                  <Link
                    key={plan!.id}
                    href={`/services/${plan!.id}`}
                    className="collage-card group flex flex-col"
                  >
                    <div className="collage-media img-zoom relative aspect-[16/10]">
                      <Image
                        src={imageForPlan(plan!)}
                        alt={plan!.name}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="collage-body flex flex-1 flex-col">
                      <h3 className="font-serif text-lg font-semibold text-ink-900 group-hover:text-gold-600 transition-colors">
                        {plan!.name}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-ink-700">{plan!.tagline}</p>
                      <p className="mt-4 font-serif text-2xl font-semibold text-ink-900">
                        <Price usd={plan!.price} fromPrice={plan!.fromPrice} hideCode />
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Keep them reading. */}
        {related.length > 0 && (
          <section className="section">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <h2 className="h3-fluid font-serif font-semibold text-ink-900 mb-8">Read next</h2>
              <div className="reveal reveal-stagger collage-grid grid gap-6 sm:gap-7 sm:grid-cols-3">
                {related.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/blog/${other.slug}`}
                    className="collage-card group"
                  >
                    <div className="collage-media img-zoom relative aspect-[4/3]">
                      <Image
                        src={other.image}
                        alt={other.imageAlt}
                        fill
                        sizes="(min-width: 640px) 33vw, 100vw"
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="collage-body">
                      <span className="eyebrow text-gold-700">{other.category}</span>
                      <h3 className="mt-2 font-serif text-base font-semibold leading-snug text-ink-900 group-hover:text-gold-600 transition-colors text-pretty">
                        {other.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
      <StickyWhatsApp />
      <MobileActionBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            graphSchema([
              breadcrumbSchema([
                { name: 'Home', url: SITE.url },
                { name: 'Blog', url: `${SITE.url}/blog` },
                { name: post.title, url },
              ]),
              {
                '@type': 'BlogPosting',
                '@id': `${url}#article`,
                headline: post.title,
                description: post.excerpt,
                articleSection: post.category,
                keywords: post.keywords.join(', '),
                url,
                mainEntityOfPage: { '@type': 'WebPage', '@id': url },
                datePublished: post.published,
                dateModified: post.updated,
                wordCount: post.sections
                  .flatMap((s) => [...(s.body ?? []), ...(s.list ?? [])])
                  .join(' ')
                  .split(/\s+/).length,
                timeRequired: `PT${post.readingMinutes}M`,
                inLanguage: 'en',
                image: {
                  '@type': 'ImageObject',
                  url: `${SITE.url}${post.image}`,
                  caption: post.imageAlt,
                },
                author: { '@id': post.byline ? `${SITE.url}/#business` : `${SITE.url}/#photographer` },
                publisher: { '@id': `${SITE.url}/#business` },
                about: { '@id': `${SITE.url}/#taj-mahal` },
                isPartOf: { '@id': `${SITE.url}/blog#blog` },
                speakable: speakableSpec(['#answer', 'h1']),
                ...(post.sources?.length
                  ? {
                      citation: post.sources.map((s) => ({
                        '@type': 'CreativeWork',
                        name: s.label,
                        url: s.url,
                      })),
                    }
                  : {}),
              },
              faqSchema(post.faqs),
            ]),
          ),
        }}
      />
    </div>
  );
}
