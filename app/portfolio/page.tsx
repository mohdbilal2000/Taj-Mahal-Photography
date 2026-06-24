import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { breadcrumbSchema, jsonLd, SITE } from '@/lib/seo';
import { IMG, img } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Portfolio | Taj Mahal Photography Gallery',
  description: 'Browse our portfolio of professional Taj Mahal photographs. Sunrise shoots, couple portraits, pre-wedding sessions, and family photography by a government-licensed photographer in Agra.',
  alternates: { canonical: `${SITE.url}/portfolio` },
  openGraph: {
    title: 'Portfolio | Taj Mahal Photography Gallery',
    description: 'Stunning Taj Mahal photography by a government-licensed professional photographer.',
    url: `${SITE.url}/portfolio`,
    images: [{ url: SITE.image, width: 1200, height: 630, alt: 'Taj Mahal Photography Portfolio' }],
  },
};

const galleryImages = [
  { src: img(IMG.tajReflection, 800), alt: IMG.tajReflection.alt, category: 'Sunrise' },
  { src: img(IMG.tajGoldenHour, 800), alt: IMG.tajGoldenHour.alt, category: 'Couple' },
  { src: img(IMG.agraFort, 800), alt: IMG.agraFort.alt, category: 'Heritage' },
  { src: img(IMG.tajGardens, 800), alt: IMG.tajGardens.alt, category: 'Family' },
  { src: img(IMG.tajDome, 800), alt: IMG.tajDome.alt, category: 'Detail' },
  { src: img(IMG.tajRiverside, 800), alt: IMG.tajRiverside.alt, category: 'Sunrise' },
];

export default function PortfolioPage() {
  return (
    <div className="theme-dark grain min-h-screen flex flex-col pt-20">
      <Header />
      <main id="main-content" className="flex-grow">
        <div className="relative bg-night text-ivory py-20">
          <div className="absolute inset-0 bg-mughal-pattern opacity-60" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="kicker mb-4 block">Our Work</span>
            <h1 className="display-tight font-display text-4xl md:text-5xl font-semibold mb-6 text-ivory">Photography Portfolio</h1>
            <p className="text-lg text-muted">A glimpse into the magical moments we have captured at the Taj Mahal and across Agra.</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, i) => (
              <div key={i} className="relative aspect-square overflow-hidden border border-line group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-night/0 group-hover:bg-night/40 transition-colors duration-500 flex items-end">
                  <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-accent text-night text-[10px] font-mono font-semibold uppercase tracking-[0.18em] px-3 py-1">{image.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted mb-6">Want to see yourself in front of the Taj Mahal?</p>
            <Link href="/book" className="inline-flex items-center bg-ivory text-night px-8 py-4 font-mono text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-accent transition-colors duration-300">
              Book Your Photoshoot
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <StickyWhatsApp />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema([
          { name: 'Home', url: SITE.url },
          { name: 'Portfolio', url: `${SITE.url}/portfolio` },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd({
          '@context': 'https://schema.org',
          '@type': 'ImageGallery',
          name: 'Taj Mahal Photography Portfolio',
          description: 'Professional photographs of the Taj Mahal captured by a government-licensed photographer in Agra, India.',
          url: `${SITE.url}/portfolio`,
          about: { '@type': 'Place', name: 'Taj Mahal', address: 'Agra, Uttar Pradesh, India' },
        }) }}
      />
    </div>
  );
}
