import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { breadcrumbSchema, jsonLd, SITE } from '@/lib/seo';

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
  { src: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop', alt: 'Taj Mahal at sunrise with golden light reflecting on white marble', category: 'Sunrise' },
  { src: 'https://images.unsplash.com/photo-1585506942812-e72b29cef752?q=80&w=800&auto=format&fit=crop', alt: 'Romantic couple portrait at the Taj Mahal reflecting pool', category: 'Couple' },
  { src: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop', alt: 'Taj Mahal grand view from the main gateway entrance', category: 'Heritage' },
  { src: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop', alt: 'Taj Mahal with visitors on the elevated platform', category: 'Family' },
  { src: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800&auto=format&fit=crop', alt: 'Close-up architectural detail of Taj Mahal marble inlay work', category: 'Detail' },
  { src: 'https://images.unsplash.com/photo-1590136132691-8b19a18b4ef3?q=80&w=800&auto=format&fit=crop', alt: 'Taj Mahal reflected in the central water channel at dawn', category: 'Sunrise' },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow">
        <div className="bg-ink-900 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-gold-400 text-sm font-bold tracking-widest uppercase mb-4 block">Our Work</span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-6">Photography Portfolio</h1>
            <p className="text-lg text-gray-300">A glimpse into the magical moments we have captured at the Taj Mahal and across Agra.</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-sm group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-end">
                  <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-gold-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">{img.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">Want to see yourself in front of the Taj Mahal?</p>
            <Link href="/book" className="inline-flex items-center px-8 py-4 bg-ink-900 text-white font-medium text-sm tracking-wide uppercase hover:bg-ink-800 transition-colors rounded-sm">
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
