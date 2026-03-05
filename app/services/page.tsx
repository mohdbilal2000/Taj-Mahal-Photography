import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Taj Mahal Photography Services | Sunrise, Couple, Family',
  description: 'Premium photography services at the Taj Mahal. Specializing in sunrise shoots, couple portraits, pre-wedding, and family photography.',
};

const services = [
  {
    id: 'sunrise',
    title: 'Taj Mahal Sunrise Photoshoot',
    description: 'Experience the magic of the Taj Mahal at dawn. This is our most popular package, offering the best lighting and fewest crowds. We capture the monument as it changes colors with the rising sun.',
    features: ['2 Hour Session', '50+ Edited High-Res Photos', 'Skip-the-line guidance', 'Best lighting conditions'],
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'couple',
    title: 'Couple & Pre-Wedding Photography',
    description: 'Celebrate your love story at the ultimate monument of love. We provide editorial-style posing guidance while capturing candid, romantic moments.',
    features: ['2.5 Hour Session', '75+ Edited High-Res Photos', 'Outfit change allowed (outside gates)', 'Posing direction'],
    image: 'https://images.unsplash.com/photo-1585506942812-e72b29cef752?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'family',
    title: 'Family Vacation Photography',
    description: 'Preserve your family memories with beautiful group portraits and candid shots of you exploring the monument together.',
    features: ['1.5 Hour Session', '40+ Edited High-Res Photos', 'Group and individual portraits', 'Child-friendly pacing'],
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      
      <main className="flex-grow bg-marble-50">
        <div className="bg-ink-900 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-6">Photography Services</h1>
            <p className="text-lg text-gray-300">Premium, authorized photoshoots tailored to your needs.</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900 mb-4">{service.title}</h2>
                  <p className="text-gray-600 text-lg mb-8">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-ink-800">
                        <span className="text-gold-500 mr-3">★</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href={`/book?service=${service.id}`}
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-sm font-medium rounded-sm text-white bg-ink-900 hover:bg-ink-800 transition-colors"
                  >
                    Inquire Availability
                  </Link>
                </div>
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
