import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import Image from 'next/image';

export default function PortfolioPage() {
  const images = [
    'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1585506942812-e72b29cef752?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1592635196238-f14d75121615?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1514222288957-49a4653e1073?q=80&w=800&auto=format&fit=crop',
  ];

  return (
    <div className="min-h-screen flex flex-col pt-28">
      <Header />
      <main className="flex-grow bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink-900 mb-4">Our Portfolio</h1>
            <p className="text-lg text-gray-600">A glimpse into the magical moments we&apos;ve captured.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-sm group">
                <Image src={src} alt={`Portfolio image ${i + 1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
