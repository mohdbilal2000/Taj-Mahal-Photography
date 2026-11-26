import Image from 'next/image';
import Link from 'next/link';
import { GUIDES } from '@/lib/guides';
import { GUIDE_UI, type GuideLang } from '@/lib/guide-ui';

/** On a language's landing page: its guides, one click from the page people arrive on. */
export default function GuidesStrip({ lang }: { lang: GuideLang }) {
  const ui = GUIDE_UI[lang];
  return (
    <section className="section bg-marble-100" aria-label={ui.strip.aria}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="h3-fluid font-serif font-semibold text-ink-900 mb-3">{ui.strip.heading}</h2>
        <p className="mb-8 max-w-2xl text-ink-700">{ui.strip.intro}</p>
        <div className="reveal reveal-stagger collage-grid grid gap-6 sm:grid-cols-2 sm:gap-7">
          {GUIDES[lang].map((g) => (
            <Link key={g.slug} href={`${ui.base}/${g.slug}`} className="collage-card group flex flex-col">
              <div className="collage-media img-zoom relative aspect-[16/10]">
                <Image src={g.image} alt={g.imageAlt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="collage-body">
                <h3 className="font-serif text-lg font-semibold leading-snug text-ink-900 transition-colors group-hover:text-gold-700 text-pretty">{g.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center">
          <Link href={ui.base} className="btn btn-outline">{ui.strip.all}</Link>
        </p>
      </div>
    </section>
  );
}
