import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import EsFrame from '@/components/es/EsFrame';
import { ES_GUIDES, ES_CATEGORY } from '@/lib/blog-es';
import { SITE, breadcrumbSchema, graphSchema, jsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: { absolute: 'Guías del Taj Mahal y fotografía de viaje en español' },
  description:
    'Guías en español para fotografiar el Taj Mahal y planear tu viaje a la India desde México: precios, qué ponerse, mejores lugares y reglas del monumento.',
  alternates: {
    canonical: `${SITE.url}/es/guias`,
    languages: { es: `${SITE.url}/es/guias`, en: `${SITE.url}/blog`, 'x-default': `${SITE.url}/blog` },
  },
  openGraph: { locale: 'es_ES', title: 'Guías del Taj Mahal en español', url: `${SITE.url}/es/guias` },
};

export default function GuiasPage() {
  return (
    <EsFrame englishHref="/blog">
      <main>
        <div className="bg-marble-100">
          <div className="shell py-14 md:py-20">
            <span className="collage-label eyebrow text-gold-700">Guías en español</span>
            <h1 className="h1-fluid mt-5 max-w-3xl font-serif font-medium italic text-ink-900 text-balance">
              Fotografía y viaje: lo que conviene saber antes de ir al Taj Mahal
            </h1>
            <p className="lead mt-6 max-w-2xl text-ink-700 text-pretty">
              Precios reales, qué ponerse, reglas del monumento y cómo planear tu viaje a la India desde México.
            </p>
          </div>
        </div>
        <section className="shell section" aria-label="Guías">
          <div className="reveal reveal-stagger collage-grid grid gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
            {ES_GUIDES.map((g) => (
              <Link key={g.slug} href={`/es/guias/${g.slug}`} className="collage-card group flex flex-col">
                <div className="collage-media img-zoom relative aspect-[16/10]">
                  <Image src={g.image} alt={g.imageAlt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="collage-body flex flex-1 flex-col">
                  <span className="eyebrow text-gold-700">{ES_CATEGORY[g.category] ?? g.category}</span>
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
                { name: 'Inicio', url: `${SITE.url}/es` },
                { name: 'Guías', url: `${SITE.url}/es/guias` },
              ]),
            ]),
          ),
        }}
      />
    </EsFrame>
  );
}
