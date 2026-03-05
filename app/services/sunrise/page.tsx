import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Taj Mahal Sunrise Photoshoot | Premium Photography',
  description: 'Book a premium sunrise photoshoot at the Taj Mahal. Avoid the crowds and capture the monument in the best morning light with a licensed photographer.',
};

export default function SunriseServicePage() {
  return (
    <div className="min-h-screen flex flex-col pt-28">
      <Header />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1920&auto=format&fit=crop"
            alt="Taj Mahal Sunrise"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="max-w-3xl">
              <span className="text-gold-400 font-bold tracking-widest uppercase mb-4 block">Signature Service</span>
              <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white mb-6">Taj Mahal Sunrise Photoshoot</h1>
              <p className="text-xl text-white/90">The ultimate photography experience in the most magical light.</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl font-semibold text-ink-900 mb-6">Why Choose the Sunrise Session?</h2>
              <div className="prose prose-lg prose-slate max-w-none text-gray-600">
                <p>
                  The Taj Mahal at sunrise is an ethereal experience. As the first rays of sun hit the white marble, the monument transforms, reflecting soft pinks, warm golds, and brilliant whites. 
                </p>
                <p>
                  Beyond the lighting, the sunrise session offers the most crucial advantage for photography: <strong>fewer crowds</strong>. By entering as soon as the gates open, we can capture wide, sweeping shots of you with the monument without hundreds of tourists in the background.
                </p>
                
                <h3 className="font-serif text-2xl text-ink-900 mt-10 mb-4">What&apos;s Included</h3>
                <ul className="space-y-2">
                  <li><strong>2 Hour Guided Session:</strong> Plenty of time to explore all the best vantage points.</li>
                  <li><strong>50+ High-Resolution Edited Photos:</strong> Professionally color-graded and retouched.</li>
                  <li><strong>Skip-the-Line Guidance:</strong> We know exactly which gate to use and how to navigate security quickly.</li>
                  <li><strong>Posing Direction:</strong> Gentle guidance to ensure you look natural and elegant.</li>
                  <li><strong>Private Online Gallery:</strong> Delivered within 48 hours for easy downloading and sharing.</li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-marble-50 p-8 border border-marble-200 rounded-sm sticky top-32">
                <h3 className="font-serif text-2xl font-semibold text-ink-900 mb-2">Package Details</h3>
                <div className="text-3xl font-light text-ink-900 mb-6">$250 <span className="text-sm text-gray-500">USD</span></div>
                
                <ul className="space-y-4 mb-8 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="text-gold-500 mr-3">✓</span>
                    Meeting Time: 5:30 AM (Varies by season)
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold-500 mr-3">✓</span>
                    Duration: 2 Hours
                  </li>
                  <li className="flex items-center">
                    <span className="text-gold-500 mr-3">✓</span>
                    Delivery: 48 Hours
                  </li>
                </ul>
                
                <a href="#book" className="block w-full text-center px-6 py-3 bg-ink-900 text-white font-medium rounded-sm hover:bg-ink-800 transition-colors">
                  Check Availability
                </a>
                <p className="text-xs text-center text-gray-500 mt-4">
                  * Monument entry tickets are not included in the photography fee.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <ContactForm />
      </main>

      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
