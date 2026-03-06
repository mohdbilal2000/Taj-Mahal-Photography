import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';
import Image from 'next/image';
import { breadcrumbSchema, serviceSchema, faqSchema, jsonLd, SITE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Taj Mahal Sunrise Photoshoot | $99 | Best Morning Light',
  description: 'Book a premium sunrise photoshoot at the Taj Mahal from $99. 2-hour session, 50 edited photos, skip-the-line guidance, and official permit included. The most magical light and fewest crowds.',
  alternates: { canonical: `${SITE.url}/services/sunrise` },
  openGraph: {
    title: 'Taj Mahal Sunrise Photoshoot | Licensed Photographer',
    description: 'Capture the Taj Mahal in the most magical morning light with a licensed photographer.',
    url: `${SITE.url}/services/sunrise`,
    images: [{ url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop', width: 1200, height: 630, alt: 'Taj Mahal at Sunrise' }],
  },
};

const sunriseFaqs = [
  { question: 'What time does the Taj Mahal sunrise photoshoot start?', answer: 'The session starts at gate opening, which varies by season. Typically around 5:30 AM in summer and 6:30 AM in winter. We will confirm exact timing when you book.' },
  { question: 'How many photos will I receive from the sunrise session?', answer: 'You will receive 50 professionally edited, high-resolution photographs delivered via a private online gallery within 48 hours.' },
  { question: 'Is the sunrise session worth the early wake-up?', answer: 'Absolutely. Sunrise offers the best natural lighting with warm golden tones, the fewest crowds for clean compositions, and the iconic sight of the marble changing colors as the sun rises. It is our most popular and highest-rated session.' },
];

export default function SunriseServicePage() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />

      <main className="flex-grow bg-white">
        <div className="relative h-[60vh] min-h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1920&auto=format&fit=crop"
            alt="Taj Mahal at sunrise with golden light on white marble"
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
              <p className="text-xl text-white/90">The ultimate photography experience in the most magical morning light.</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl font-semibold text-ink-900 mb-6">Why Choose the Sunrise Session?</h2>
              <div className="prose prose-lg prose-slate max-w-none text-gray-600">
                <p>
                  The Taj Mahal at sunrise is an ethereal experience. As the first rays of sun hit the white marble, the monument transforms, reflecting soft pinks, warm golds, and brilliant whites.
                </p>
                <p>
                  Beyond the lighting, the sunrise session offers the most crucial advantage for photography: <strong>fewer crowds</strong>. By entering as soon as the gates open, we capture wide, sweeping shots of you with the monument without hundreds of tourists in the background.
                </p>

                <h3 className="font-serif text-2xl text-ink-900 mt-10 mb-4">What&apos;s Included</h3>
                <ul className="space-y-2">
                  <li><strong>2 Hour Guided Session:</strong> Plenty of time to explore all the best vantage points.</li>
                  <li><strong>50 High-Resolution Edited Photos:</strong> Professionally color-graded and retouched.</li>
                  <li><strong>Official Photography Permit:</strong> Full authorization for professional equipment entry.</li>
                  <li><strong>Skip-the-Line Guidance:</strong> We know exactly which gate to use and how to navigate security quickly.</li>
                  <li><strong>Posing Direction:</strong> Gentle guidance to ensure you look natural and elegant.</li>
                  <li><strong>Private Online Gallery:</strong> Delivered within 48 hours for easy downloading and sharing.</li>
                </ul>

                <h3 className="font-serif text-2xl text-ink-900 mt-10 mb-4">Sunrise Session Timeline</h3>
                <ol>
                  <li><strong>30 min before sunrise:</strong> Meet at the East Gate. Quick introductions and plan review.</li>
                  <li><strong>Gate opening:</strong> Enter together, clear security with official permit.</li>
                  <li><strong>First 30 minutes:</strong> Capture the iconic reflecting pool shots as the light transforms.</li>
                  <li><strong>Next 45 minutes:</strong> Move to the elevated platform for close-up portraits and varied angles.</li>
                  <li><strong>Final 30 minutes:</strong> Garden shots, candid moments, and any specific requests.</li>
                </ol>
              </div>
            </div>

            <div>
              <div className="bg-marble-50 p-8 border border-marble-200 rounded-sm sticky top-32">
                <h3 className="font-serif text-2xl font-semibold text-ink-900 mb-2">Package Details</h3>
                <div className="text-3xl font-light text-ink-900 mb-6">$99 <span className="text-sm text-gray-500">USD</span></div>

                <ul className="space-y-4 mb-8 text-sm text-gray-600">
                  <li className="flex items-center"><span className="text-gold-500 mr-3">✓</span> Meeting Time: 5:30 AM (Varies by season)</li>
                  <li className="flex items-center"><span className="text-gold-500 mr-3">✓</span> Duration: 2 Hours</li>
                  <li className="flex items-center"><span className="text-gold-500 mr-3">✓</span> Photos: 50 Edited</li>
                  <li className="flex items-center"><span className="text-gold-500 mr-3">✓</span> Delivery: 48 Hours</li>
                  <li className="flex items-center"><span className="text-gold-500 mr-3">✓</span> Official Permit Included</li>
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema([
          { name: 'Home', url: SITE.url },
          { name: 'Services', url: `${SITE.url}/services` },
          { name: 'Sunrise Photoshoot', url: `${SITE.url}/services/sunrise` },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(serviceSchema(
          'Taj Mahal Sunrise Photoshoot',
          'Premium sunrise photography at the Taj Mahal. 2-hour session with 50 edited photos, official permit, and skip-the-line guidance.',
          99,
          '2 Hours',
          `${SITE.url}/services/sunrise`,
          'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop',
        )) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(sunriseFaqs)) }}
      />
    </div>
  );
}
