import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GuideFrame from './GuideFrame';
import BlogToc from '@/components/blog/BlogToc';
import QuickBook from '@/components/QuickBook';
import { SectionBlock, sectionId } from '@/components/blog/SectionBlock';
import { QUICK_BOOK_IDS } from '@/lib/plans';
import { GUIDES, guideBySlug } from '@/lib/guides';
import { GUIDE_UI, type GuideLang } from '@/lib/guide-ui';
import { SOURCES } from '@/lib/blog-sources';
import { localeByCode } from '@/lib/i18n';
import { SITE, jsonLd, graphSchema, breadcrumbSchema, faqSchema, speakableSpec } from '@/lib/seo';

export function guideStaticParams(lang: GuideLang) {
  return GUIDES[lang].map((g) => ({ slug: g.slug }));
}

export function guideMetadata(lang: GuideLang, slug: string): Metadata {
  const ui = GUIDE_UI[lang];
  const g = guideBySlug(lang, slug);
  if (!g) return {};
  const url = `${SITE.url}${ui.base}/${g.slug}`;
  const en = `${SITE.url}/blog/${g.enSlug}`;
  return {
    title: { absolute: g.seoTitle ?? g.title },
    description: g.seoDescription ?? g.excerpt,
    keywords: g.keywords,
    alternates: { canonical: url, languages: { [lang]: url, en, 'x-default': en } },
    openGraph: {
      type: 'article',
      locale: ui.ogLocale,
      title: g.seoTitle ?? g.title,
      description: g.seoDescription ?? g.excerpt,
      url,
      images: [{ url: `${SITE.url}${g.image}`, alt: g.imageAlt }],
      publishedTime: g.published,
      modifiedTime: g.updated,
    },
  };
}

export default function GuideArticle({ lang, slug }: { lang: GuideLang; slug: string }) {
  const ui = GUIDE_UI[lang];
  const g = guideBySlug(lang, slug);
  if (!g) notFound();

  const url = `${SITE.url}${ui.base}/${g.slug}`;
  const locale = localeByCode(lang)!;
  const planNames = Object.fromEntries(Object.entries(locale.planLabels).map(([id, l]) => [id, l.name]));
  const sources = SOURCES[g.enSlug] ?? [];
  const others = GUIDES[lang].filter((o) => o.slug !== g.slug).slice(0, 3);
  const toc = g.sections.map((s) => ({ id: sectionId(s.heading), label: s.heading }));
  const wa = (text: string) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
  const date = new Date(g.updated).toLocaleDateString(ui.dateLocale, { day: 'numeric', month: 'long', year: 'numeric' });
  const h1Style = ui.italicHeadings ? 'italic' : '';

  return (
    <GuideFrame ui={ui} englishHref={`/blog/${g.enSlug}`}>
      <main>
        <header className="bg-marble-100">
          <div className="shell grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-14">
            <div>
              <nav aria-label={ui.crumbLabel} className="mb-6 text-xs tracking-wide text-ink-500">
                <Link href={ui.home} className="inline-block py-1 hover:text-gold-700">{ui.homeLabel}</Link>
                <span className="mx-2">/</span>
                <Link href={ui.base} className="inline-block py-1 hover:text-gold-700">{ui.guidesLabel}</Link>
              </nav>
              <span className="collage-label eyebrow text-gold-700">{ui.category[g.category] ?? g.category}</span>
              <h1 className={`h1-fluid mt-5 font-serif font-medium text-ink-900 text-balance ${h1Style}`}>{g.title}</h1>
              <p className="mt-6 text-sm text-ink-700">
                {ui.updated(date)} · {ui.readTime(g.readingMinutes)} · {g.byline}
              </p>
            </div>
            <figure className="collage-card taped relative mx-auto w-full max-w-md lg:max-w-none" style={{ ['--tilt' as string]: '1.4deg' }}>
              <div className="collage-media relative aspect-[4/3]">
                <Image src={g.image} alt={g.imageAlt} fill priority sizes="(min-width: 1024px) 36vw, 90vw" className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <figcaption className="collage-body">
                <span className="collage-caption text-2xl">{ui.captionMinutes(g.readingMinutes)}</span>
              </figcaption>
            </figure>
          </div>
        </header>

        <div className="shell grid gap-x-14 py-12 md:py-16 lg:grid-cols-[14rem_minmax(0,1fr)]">
          <aside className="lg:pt-2">
            <BlogToc items={toc} title={ui.tocTitle} sectionsLabel={ui.tocSections} />
          </aside>

          <article className="min-w-0 max-w-[44rem]">
            <div id="answer" data-speakable="answer" className="mb-12 rounded-2xl border border-gold-500/30 bg-[#FBF5EA] p-6 sm:p-8">
              <p className="collage-caption text-2xl text-gold-700">{ui.shortAnswer}</p>
              <p className="lead mt-3 text-ink-900 text-pretty">{g.answer}</p>
            </div>

            <div className="space-y-14">
              {g.sections.map((section, i) => (
                <SectionBlock key={section.heading} section={section} index={i} dropCap={lang !== 'hi'} />
              ))}
            </div>

            {g.faqs.length > 0 && (
              <section id="faq" className="mt-16 scroll-mt-28">
                <h2 className="h3-fluid mb-6 font-serif font-semibold text-ink-900">{ui.faqHeading}</h2>
                <div className="divide-y hairline rounded-2xl border hairline bg-white px-5">
                  {g.faqs.map((faq) => (
                    <details key={faq.question} className="group py-4">
                      <summary className="flex min-h-[2.75rem] cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink-900">
                        <span className="text-pretty">{faq.question}</span>
                        <span aria-hidden="true" className="shrink-0 text-xl text-gold-600 transition-transform duration-300 group-open:rotate-45">+</span>
                      </summary>
                      <p className="mt-2 pb-2 leading-relaxed text-ink-700 text-pretty">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}
          </article>
        </div>

        <section className="section border-t hairline bg-marble-100" aria-label={ui.beforeYouGo}>
          <div className="shell">
            <div className="mx-auto max-w-5xl space-y-8">
              {sources.length > 0 && (
                <section aria-label={ui.sourcesAria} className="rounded-2xl border hairline bg-white p-6 sm:p-8">
                  <p className="eyebrow text-gold-700">{ui.sourcesEyebrow}</p>
                  <h2 className="mt-2 font-serif text-2xl font-semibold text-ink-900">{ui.sourcesHeading}</h2>
                  <p className="mt-2 text-sm text-ink-700">{ui.sourcesIntro}</p>
                  <ol className="mt-5 divide-y hairline">
                    {sources.map((s, i) => (
                      <li key={s.url}>
                        <a href={s.url} target="_blank" rel="noopener noreferrer" className="group flex min-h-[3.5rem] items-start gap-4 py-4">
                          <span className="font-serif text-xl italic text-gold-600">{String(i + 1).padStart(2, '0')}</span>
                          <span className="min-w-0 flex-1">
                            <span className="block font-semibold text-ink-900 transition-colors group-hover:text-gold-700">{s.label}</span>
                            {s.note && <span className="mt-0.5 block text-sm text-ink-700">{s.note}</span>}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              {g.pitch && (
                <aside aria-label={ui.studioAria} className="collage-card taped relative mx-auto max-w-2xl" style={{ ['--tilt' as string]: '-0.6deg' }}>
                  <div className="collage-body">
                    <p className="collage-caption text-2xl text-gold-700">{ui.studioCaption}</p>
                    <h2 className="mt-2 font-serif text-xl font-semibold leading-snug text-ink-900 text-balance">{g.pitch.heading}</h2>
                    {g.pitch.body.map((p) => (
                      <p key={p.slice(0, 40)} className="mt-3 text-sm leading-relaxed text-ink-700 text-pretty">{p}</p>
                    ))}
                    <div className="mt-5 flex flex-wrap gap-2">
                      <a className="btn btn-whatsapp btn-sm" href={wa(g.pitch.whatsappText)} target="_blank" rel="noopener noreferrer">{ui.studioWhatsapp}</a>
                      <Link className="btn btn-outline btn-sm" href={ui.plansHref}>{ui.studioPlans}</Link>
                    </div>
                  </div>
                </aside>
              )}
            </div>
          </div>
        </section>

        <section className="section" aria-label={ui.bookAria}>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="h3-fluid mb-6 font-serif font-semibold text-ink-900">{ui.bookHeading}</h2>
            <QuickBook labels={{ ...locale.quickBook }} planNames={planNames} defaultPlanId={g.planIds.find((id) => (QUICK_BOOK_IDS as readonly string[]).includes(id)) ?? 'sunrise'} />
          </div>
        </section>

        {others.length > 0 && (
          <section className="section pt-0" aria-label={ui.moreAria}>
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <h2 className="h3-fluid mb-8 font-serif font-semibold text-ink-900">{ui.moreHeading}</h2>
              <div className="reveal reveal-stagger collage-grid grid gap-6 sm:grid-cols-3 sm:gap-7">
                {others.map((o) => (
                  <Link key={o.slug} href={`${ui.base}/${o.slug}`} className="collage-card group">
                    <div className="collage-media img-zoom relative aspect-[4/3]">
                      <Image src={o.image} alt={o.imageAlt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="collage-body">
                      <h3 className="font-serif text-base font-semibold leading-snug text-ink-900 transition-colors group-hover:text-gold-700 text-pretty">{o.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            graphSchema([
              breadcrumbSchema([
                { name: ui.homeLabel, url: `${SITE.url}${ui.home}` },
                { name: ui.guidesLabel, url: `${SITE.url}${ui.base}` },
                { name: g.title, url },
              ]),
              {
                '@type': 'BlogPosting',
                '@id': `${url}#article`,
                headline: g.title,
                description: g.excerpt,
                inLanguage: lang,
                url,
                mainEntityOfPage: { '@type': 'WebPage', '@id': url },
                datePublished: g.published,
                dateModified: g.updated,
                keywords: g.keywords.join(', '),
                image: { '@type': 'ImageObject', url: `${SITE.url}${g.image}`, caption: g.imageAlt },
                author: { '@id': `${SITE.url}/#business` },
                publisher: { '@id': `${SITE.url}/#business` },
                about: { '@id': `${SITE.url}/#taj-mahal` },
                speakable: speakableSpec(['#answer', 'h1']),
                ...(sources.length ? { citation: sources.map((s) => ({ '@type': 'CreativeWork', name: s.label, url: s.url })) } : {}),
              },
              faqSchema(g.faqs),
            ]),
          ),
        }}
      />
    </GuideFrame>
  );
}
