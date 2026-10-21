import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import MobileActionBar from '@/components/MobileActionBar';
import ReadingProgress from '@/components/ReadingProgress';
import Price from '@/components/Price';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { POSTS, postBySlug, postPlans, relatedPosts, type Section } from '@/lib/blog';
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
    title: `${post.title} | Taj Mahal Photography`,
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

function SectionBlock({ section }: { section: Section }) {
  return (
    <section id={sectionId(section.heading)} className="scroll-mt-28">
      <h2 className="h3-fluid font-serif font-semibold text-ink-900 mb-4 text-balance">
        {section.heading}
      </h2>

      {section.body?.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className="text-ink-700 leading-relaxed mb-4 text-pretty">
          {paragraph}
        </p>
      ))}

      {section.list && (
        <ul className="space-y-3 my-6">
          {section.list.map((item) => (
            <li key={item.slice(0, 40)} className="flex gap-3 text-ink-700 leading-relaxed">
              <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              <span className="text-pretty">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {section.table && (
        <div className="my-6 overflow-x-auto rounded-sm border hairline">
          <table className="w-full text-left text-sm">
            <thead className="bg-marble-100">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold text-ink-900">
                  {section.table.head[0]}
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-ink-900">
                  {section.table.head[1]}
                </th>
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map(([left, right]) => (
                <tr key={left} className="border-t hairline">
                  <td className="px-4 py-3 font-medium text-ink-900 align-top">{left}</td>
                  <td className="px-4 py-3 text-ink-700 align-top">{right}</td>
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

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <ReadingProgress />
      <Header />

      <main className="flex-grow bg-white">
        {/* Title block — the question, then the answer, nothing between them. */}
        <header className="bg-ink-900 text-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
            <nav aria-label="Breadcrumb" className="mb-6 text-xs tracking-wide text-marble-300">
              <Link href="/" className="inline-block py-1 hover:text-gold-400">Home</Link>
              <span className="mx-2 text-ink-500">/</span>
              <Link href="/blog" className="inline-block py-1 hover:text-gold-400">Blog</Link>
            </nav>

            <span className="eyebrow text-gold-400">{post.category}</span>
            <h1 className="h1-fluid font-serif font-semibold mt-3 mb-5 text-balance">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-marble-300">
              <time dateTime={post.updated}>Updated {longDate(post.updated)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingMinutes} min read</span>
              <span aria-hidden="true">·</span>
              <span>Mohd Bilal, licensed Taj Mahal photographer</span>
            </div>
          </div>
        </header>

        <div className="relative aspect-[16/9] md:aspect-[21/9] bg-marble-100">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {/* The direct answer. First thing read, first thing quoted. */}
          <div
            id="answer"
            data-speakable="answer"
            className="mb-12 rounded-sm border-l-2 border-gold-500 bg-marble-50 p-6"
          >
            <p className="eyebrow text-gold-700 mb-2">Short answer</p>
            <p className="lead text-ink-900 text-pretty">{post.answer}</p>
          </div>

          {/* Contents — a reader on a phone can see how long this is. */}
          <nav aria-label="On this page" className="mb-12 border-y hairline py-5">
            <p className="eyebrow text-ink-400 mb-3">On this page</p>
            <ol className="space-y-2 text-sm">
              {post.sections.map((section, i) => (
                <li key={section.heading} className="flex gap-3 leading-6">
                  <span className="text-gold-600 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                  <a href={`#${sectionId(section.heading)}`} className="link-sweep inline-block py-1 text-ink-700">
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-12">
            {post.sections.map((section) => (
              <SectionBlock key={section.heading} section={section} />
            ))}
          </div>

          {/* FAQ — the long tail, and the FAQPage schema below mirrors it. */}
          {post.faqs.length > 0 && (
            <section id="faq" className="mt-16 scroll-mt-28">
              <h2 className="h3-fluid font-serif font-semibold text-ink-900 mb-6">
                Questions we get asked
              </h2>
              <div className="divide-y hairline">
                {post.faqs.map((faq) => (
                  <details key={faq.question} className="group py-4">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-medium text-ink-900">
                      <span className="text-pretty">{faq.question}</span>
                      <span
                        aria-hidden="true"
                        className="mt-1 shrink-0 text-gold-600 transition-transform duration-300 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-ink-700 leading-relaxed text-pretty">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}
        </article>

        {/* The point of the article: a package to book. */}
        {plans.length > 0 && (
          <section className="border-t hairline bg-marble-50 py-14 md:py-20">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <h2 className="h3-fluid font-serif font-semibold text-ink-900 mb-2">
                Ready to shoot it yourself?
              </h2>
              <p className="text-ink-700 mb-8">
                The packages this guide applies to, with a licensed photographer and the permit handled.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                {plans.map((plan) => (
                  <Link
                    key={plan!.id}
                    href={`/services/${plan!.id}`}
                    className="card-lift group flex flex-col overflow-hidden rounded-sm border hairline bg-white"
                  >
                    {plan!.image && (
                      <div className="img-zoom relative aspect-[16/10]">
                        <Image
                          src={plan!.image}
                          alt={plan!.name}
                          fill
                          sizes="(min-width: 640px) 50vw, 100vw"
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-5">
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
          <section className="py-14 md:py-20">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <h2 className="h3-fluid font-serif font-semibold text-ink-900 mb-8">Read next</h2>
              <div className="grid gap-6 sm:grid-cols-3">
                {related.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/blog/${other.slug}`}
                    className="card-lift group overflow-hidden rounded-sm border hairline bg-white"
                  >
                    <div className="img-zoom relative aspect-[4/3]">
                      <Image
                        src={other.image}
                        alt={other.imageAlt}
                        fill
                        sizes="(min-width: 640px) 33vw, 100vw"
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-4">
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
                author: { '@id': `${SITE.url}/#photographer` },
                publisher: { '@id': `${SITE.url}/#business` },
                about: { '@id': `${SITE.url}/#taj-mahal` },
                isPartOf: { '@id': `${SITE.url}/blog#blog` },
                speakable: speakableSpec(['#answer', 'h1']),
              },
              faqSchema(post.faqs),
            ]),
          ),
        }}
      />
    </div>
  );
}
