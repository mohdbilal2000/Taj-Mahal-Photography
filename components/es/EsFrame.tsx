import Link from 'next/link';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import { SITE } from '@/lib/seo';

const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Hola, quiero una sesión de fotos en el Taj Mahal. Mis fechas son:')}`;

/** The Spanish pages' own frame: a small bar and footer, in Spanish, instead of the English site navigation. */
export default function EsFrame({ children, englishHref }: { children: React.ReactNode; englishHref?: string }) {
  return (
    <div lang="es" className="min-h-screen bg-marble-50">
      <div className="border-b hairline bg-white">
        <div className="shell flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-3">
          <Link href="/es" className="font-serif text-xl italic text-ink-900">{SITE.name}</Link>
          <nav aria-label="Principal" className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm font-medium text-ink-800">
            <Link href="/es" className="inline-flex min-h-[2.5rem] items-center hover:text-gold-700">Inicio</Link>
            <Link href="/es/guias" className="inline-flex min-h-[2.5rem] items-center hover:text-gold-700">Guías</Link>
            <Link href={englishHref ?? '/'} hrefLang="en" className="inline-flex min-h-[2.5rem] items-center text-ink-500 hover:text-gold-700">English</Link>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm">WhatsApp</a>
          </nav>
        </div>
      </div>
      {children}
      <footer className="bg-ink-900 py-10 text-sm text-marble-300">
        <div className="shell flex flex-wrap items-center justify-between gap-4">
          <p>{SITE.name} · Agra, India · Fotógrafo con licencia del Ministerio de Turismo</p>
          <p>
            <a href={`tel:${SITE.phone}`} className="hover:text-white">{SITE.phoneDisplay}</a>
            {' · '}
            <a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
          </p>
        </div>
      </footer>
      <StickyWhatsApp />
    </div>
  );
}
