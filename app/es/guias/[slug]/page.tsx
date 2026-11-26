import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import EsFrame from '@/components/es/EsFrame';
import BlogToc from '@/components/blog/BlogToc';
import QuickBook from '@/components/QuickBook';
import { SectionBlock, sectionId } from '@/components/blog/SectionBlock';
import { ES_GUIDES, ES_CATEGORY, esGuideBySlug } from '@/lib/blog-es';
import { SOURCES } from '@/lib/blog-sources';
import { localeByCode } from '@/lib/i18n';
import { SITE, jsonLd, graphSchema, breadcrumbSchema, faqSchema, speakableSpec } from '@/lib/seo';

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return ES_GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const g = esGuideBySlug(slug);
  if (!g) return {};
  const url = `${SITE.url}/es/guias/${g.slug}`;
  const en = `${SITE.url}/blog/${g.enSlug}`;
  return {
    title: { absolute: g.seoTitle ?? g.title },
    description: g.seoDescription ?? g.excerpt,
    keywords: g.keywords,
    alternates: { canonical: url, languages: { es: url, en, 'x-default': en } },
    openGraph: {
      type: 'article',
      locale: 'es_ES',
      title: g.seoTitle ?? g.title,
      description: g.seoDescription ?? g.excerpt,
      url,
      images: [{ url: `${SITE.url}${g.image}`, alt: g.imageAlt }],
      publishedTime: g.published,
      modifiedTime: g.updated,
    },
  };
}

const fecha = (iso: string) =>
  new Date(iso).toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric' });

export default async function GuiaPage({ params }: Params) {
  const { slug } = await params;
  const g = esGuideBySlug(slug);
  if (!g) notFound();

  const url = `${SITE.url}/es/guias/${g.slug}`;
  const locale = localeByCode('es')!;
  const planNames = Object.fromEntries(Object.entries(locale.planLabels).map(([id, l]) => [id, l.name]));
  const sources = SOURCES[g.enSlug] ?? [];
  const others = ES_GUIDES.filter((o) => o.slug !== g.slug).slice(0, 3);
  const toc = g.sections.map((s) => ({ id: sectionId(s.heading), label: s.heading }));
  const wa = (text: string) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

  return (
    <EsFrame englishHref={`/blog/${g.enSlug}`}>
      <main>
        <header className="bg-marble-100">
          <div className="shell grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-14">
            <div>
              <nav aria-label="Ruta" className="mb-6 text-xs tracking-wide text-ink-500">
                <Link href="/es" className="inline-block py-1 hover:text-gold-700">Inicio</Link>
                <span className="mx-2">/</span>
                <Link href="/es/guias" className="inline-block py-1 hover:text-gold-700">Guías</Link>
              </nav>
              <span className="collage-label eyebrow text-gold-700">{ES_CATEGORY[g.category] ?? g.category}</span>
              <h1 className="h1-fluid mt-5 font-serif font-medium italic text-ink-900 text-balance">{g.title}</h1>
              <p className="mt-6 text-sm text-ink-700">
                Actualizado el {fecha(g.updated)} · {g.readingMinutes} min de lectura · {g.byline}
              </p>
            </div>
            <figure className="collage-card taped relative mx-auto w-full max-w-md lg:max-w-none" style={{ ['--tilt' as string]: '1.4deg' }}>
              <div className="collage-media relative aspect-[4/3]">
                <Image src={g.image} alt={g.imageAlt} fill priority sizes="(min-width: 1024px) 36vw, 90vw" className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <figcaption className="collage-body">
                <span className="collage-caption text-2xl">{g.readingMinutes} minutos, de principio a fin</span>
              </figcaption>
            </figure>
          </div>
        </header>

        <div className="shell grid gap-x-14 py-12 md:py-16 lg:grid-cols-[14rem_minmax(0,1fr)]">
          <aside className="lg:pt-2">
            <BlogToc items={toc} title="En esta guía" sectionsLabel="secciones" />
          </aside>

          <article className="min-w-0 max-w-[44rem]">
            <div id="answer" data-speakable="answer" className="mb-12 rounded-2xl border border-gold-500/30 bg-[#FBF5EA] p-6 sm:p-8">
              <p className="collage-caption text-2xl text-gold-700">la respuesta corta</p>
              <p className="lead mt-3 text-ink-900 text-pretty">{g.answer}</p>
            </div>

            <div className="space-y-14">
              {g.sections.map((section, i) => (
                <SectionBlock key={section.heading} section={section} index={i} />
              ))}
            </div>

            {g.faqs.length > 0 && (
              <section id="faq" className="mt-16 scroll-mt-28">
                <h2 className="h3-fluid mb-6 font-serif font-semibold text-ink-900">Preguntas frecuentes</h2>
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

        <section className="section border-t hairline bg-marble-100" aria-label="Antes de irte">
          <div className="shell">
            <div className="mx-auto max-w-5xl space-y-8">
              {sources.length > 0 && (
                <section aria-label="Fuentes" className="rounded-2xl border hairline bg-white p-6 sm:p-8">
                  <p className="eyebrow text-gold-700">De dónde sale esto</p>
                  <h2 className="mt-2 font-serif text-2xl font-semibold text-ink-900">Fuentes para guardar</h2>
                  <p className="mt-2 text-sm text-ink-700">Las reglas, tarifas y horarios cambian. Estas son las páginas oficiales que conviene revisar antes de viajar (en inglés).</p>
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
                <aside aria-label="Sobre el estudio" className="collage-card taped relative mx-auto max-w-2xl" style={{ ['--tilt' as string]: '-0.6deg' }}>
                  <div className="collage-body">
                    <p className="collage-caption text-2xl text-gold-700">del estudio</p>
                    <h2 className="mt-2 font-serif text-xl font-semibold leading-snug text-ink-900 text-balance">{g.pitch.heading}</h2>
                    {g.pitch.body.map((p) => (
                      <p key={p.slice(0, 40)} className="mt-3 text-sm leading-relaxed text-ink-700 text-pretty">{p}</p>
                    ))}
                    <div className="mt-5 flex flex-wrap gap-2">
                      <a className="btn btn-whatsapp btn-sm" href={wa(g.pitch.whatsappText)} target="_blank" rel="noopener noreferrer">Escríbenos por WhatsApp</a>
                      <Link className="btn btn-outline btn-sm" href="/es">Ver sesiones y precios</Link>
                    </div>
                  </div>
                </aside>
              )}
            </div>
          </div>
        </section>

        <section className="section" aria-label="Reservar">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="h3-fluid mb-6 font-serif font-semibold text-ink-900">Reserva en un minuto</h2>
            <QuickBook labels={{ ...locale.quickBook }} planNames={planNames} defaultPlanId={g.planIds[0]} />
          </div>
        </section>

        {others.length > 0 && (
          <section className="section pt-0" aria-label="Seguir leyendo">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <h2 className="h3-fluid mb-8 font-serif font-semibold text-ink-900">Sigue leyendo</h2>
              <div className="reveal reveal-stagger collage-grid grid gap-6 sm:grid-cols-3 sm:gap-7">
                {others.map((o) => (
                  <Link key={o.slug} href={`/es/guias/${o.slug}`} className="collage-card group">
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
                { name: 'Inicio', url: `${SITE.url}/es` },
                { name: 'Guías', url: `${SITE.url}/es/guias` },
                { name: g.title, url },
              ]),
              {
                '@type': 'BlogPosting',
                '@id': `${url}#article`,
                headline: g.title,
                description: g.excerpt,
                inLanguage: 'es',
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
    </EsFrame>
  );
}
