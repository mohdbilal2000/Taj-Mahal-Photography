import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import MobileActionBar from '@/components/MobileActionBar';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { breadcrumbSchema, imageObjectSchema, jsonLd, SITE } from '@/lib/seo';
import { GALLERY, planFor } from '@/lib/gallery';
import PortfolioGallery from '@/components/PortfolioGallery';

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


export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow">
        <div className="bg-ink-900 text-white section">
          <div className="shell-narrow max-w-4xl text-center">
            <span className="eyebrow text-gold-400 mb-4 block">Our Work</span>
            <h1 className="h1-fluid font-serif font-semibold mb-6">Photography Portfolio</h1>
            <p className="text-lg text-marble-300">Every photograph here is our own work, at the Taj Mahal and across Agra — and each one is tagged with the package that produced it.</p>
          </div>
        </div>

        <div className="shell py-16 md:py-20">
          <PortfolioGallery />

          <div className="mt-20 text-center border-t border-marble-200 pt-14">
            <p className="text-ink-500 mb-6 lead">
              Every frame above came from a package you can book today.
            </p>
            <Link
              href="/services"
              className="btn btn-ink btn-lg"
            >
              See the packages
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <StickyWhatsApp />
      <MobileActionBar />

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
          // Each frame described individually, so image search has something
          // to rank beyond a filename.
          associatedMedia: GALLERY.map((img) =>
            imageObjectSchema({
              url: `${SITE.url}${img.src}`,
              caption: img.alt,
              contentLocation: img.place,
            })
          ),
        }) }}
      />
    </div>
  );
}
