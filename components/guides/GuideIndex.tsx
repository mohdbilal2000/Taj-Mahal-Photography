import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import GuideFrame from './GuideFrame';
import { GUIDES } from '@/lib/guides';
import { GUIDE_UI, type GuideLang } from '@/lib/guide-ui';
import { SITE, breadcrumbSchema, graphSchema, jsonLd } from '@/lib/seo';

export function guideIndexMetadata(lang: GuideLang): Metadata {
  const ui = GUIDE_UI[lang];
  const url = `${SITE.url}${ui.base}`;
  return {
    title: { absolute: ui.index.metaTitle },
    description: ui.index.metaDescription,
    alternates: { canonical: url, languages: { [lang]: url, en: `${SITE.url}/blog`, 'x-default': `${SITE.url}/blog` } },
    openGraph: { locale: ui.ogLocale, title: ui.index.ogTitle, url },
  };
}

export default function GuideIndex({ lang }: { lang: GuideLang }) {
  const ui = GUIDE_UI[lang];
  return (
    <GuideFrame ui={ui} englishHref="/blog">
      <main>
        <div className="bg-marble-100">
          <div className="shell py-14 md:py-20">
            <span className="collage-label eyebrow text-gold-700">{ui.index.eyebrow}</span>
            <h1 className={`h1-fluid mt-5 max-w-3xl font-serif font-medium text-ink-900 text-balance ${ui.italicHeadings ? 'italic' : ''}`}>{ui.index.h1}</h1>
            <p className="lead mt-6 max-w-2xl text-ink-700 text-pretty">{ui.index.lead}</p>
          </div>
        </div>
        <section className="shell section" aria-label={ui.index.crumb}>
          <div className="reveal reveal-stagger collage-grid grid gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
            {GUIDES[lang].map((g) => (
              <Link key={g.slug} href={`${ui.base}/${g.slug}`} className="collage-card group flex flex-col">
                <div className="collage-media img-zoom relative aspect-[16/10]">
                  <Image src={g.image} alt={g.imageAlt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="collage-body flex flex-1 flex-col">
                  <span className="eyebrow text-gold-700">{ui.category[g.category] ?? g.category}</span>
                  <h2 className="mt-2 font-serif text-lg font-semibold leading-snug text-ink-900 transition-colors group-hover:text-gold-700 text-pretty">{g.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700 line-clamp-3">{g.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            graphSchema([
              breadcrumbSchema([
                { name: ui.homeLabel, url: `${SITE.url}${ui.home}` },
                { name: ui.index.crumb, url: `${SITE.url}${ui.base}` },
              ]),
            ]),
          ),
        }}
      />
    </GuideFrame>
  );
}
