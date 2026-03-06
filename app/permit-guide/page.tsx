import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import Link from 'next/link';
import { Metadata } from 'next';
import { breadcrumbSchema, faqSchema, jsonLd, SITE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Taj Mahal Photography Permit Guide | Rules & Regulations',
  description: 'Complete guide to Taj Mahal photography permits. Learn what equipment is allowed, how to hire a licensed photographer, prohibited items, restricted zones, and official ASI rules for 2025.',
  alternates: { canonical: `${SITE.url}/permit-guide` },
  openGraph: {
    title: 'Taj Mahal Photography Permit Guide | Official Rules 2025',
    description: 'Everything about photography permits, rules, and regulations at the Taj Mahal.',
    url: `${SITE.url}/permit-guide`,
    images: [{ url: SITE.image, width: 1200, height: 630, alt: 'Taj Mahal Photography Permit Guide' }],
  },
};

const permitFaqs = [
  { question: 'Do I need a permit to take photos at the Taj Mahal?', answer: 'Tourists can take photos with smartphones and basic cameras without a permit. However, professional photography with tripods, extra lenses, large camera bags, or lighting equipment requires a government-licensed photographer who holds an official permit from the Ministry of Tourism.' },
  { question: 'What items are prohibited inside the Taj Mahal?', answer: 'Prohibited items include tripods, monopods, drones, large camera bags, food, tobacco, knives, books, and wireless audio devices. Professional lighting equipment and selfie sticks are also not allowed without authorization.' },
  { question: 'Can I take photos inside the Taj Mahal mausoleum?', answer: 'No. Photography is strictly prohibited inside the main mausoleum building where the cenotaphs of Shah Jahan and Mumtaz Mahal are located. Photography is only permitted in the gardens, near the reflecting pool, and around the exterior of the monument.' },
];

export default function PermitGuidePage() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />

      <main className="flex-grow bg-white">
        <div className="bg-ink-900 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-gold-400 text-sm font-bold tracking-widest uppercase mb-4 block">Official Information</span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-6">Taj Mahal Photography Permit Guide</h1>
            <p className="text-lg text-gray-300">Official rules, regulations, and why hiring a licensed photographer is essential for your visit.</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <article className="prose prose-lg prose-slate max-w-none">
            <h2 className="font-serif text-3xl text-ink-900 mb-6">Understanding Taj Mahal Photography Rules</h2>
            <p>
              The Taj Mahal is a UNESCO World Heritage site and a protected monument under the Archaeological Survey of India (ASI). To preserve its sanctity and ensure security, strict rules govern photography within its premises.
            </p>

            <h3 className="font-serif text-2xl text-ink-900 mt-10 mb-4">Is Photography Allowed Inside the Taj Mahal?</h3>
            <p>This is the most common question visitors ask. The answer depends on where you are within the complex:</p>
            <ul>
              <li><strong>Exterior & Gardens:</strong> Yes, photography is freely allowed in the gardens, near the reflecting pool, on the elevated platform, and around the exterior of the monument.</li>
              <li><strong>Inside the Main Mausoleum:</strong> <strong>No.</strong> Photography is strictly prohibited inside the main tomb area where the cenotaphs of Shah Jahan and Mumtaz Mahal are located. Security guards actively enforce this rule.</li>
              <li><strong>Mosque and Guest House:</strong> Photography is generally allowed in the mosque (to the west) and the guest house (to the east), which flank the main mausoleum.</li>
            </ul>
            <h3 className="font-serif text-2xl text-ink-900 mt-10 mb-4">Do Photographers Need a Permit?</h3>
            <p>
              Tourists are allowed to bring basic point-and-shoot cameras or smartphones for personal use without a special permit. However, <strong>professional photography requires strict authorization from the Ministry of Tourism, Government of India.</strong>
            </p>
            <p>Security personnel at the gates will confiscate or deny entry to individuals carrying:</p>
            <ul>
              <li>Tripods or monopods</li>
              <li>Extra lenses or large camera bags</li>
              <li>Drones (strictly prohibited in the entire area)</li>
              <li>Professional lighting equipment</li>
              <li>Selfie sticks (at peak times)</li>
            </ul>

            <div className="bg-marble-50 p-6 border-l-4 border-gold-500 my-8 not-prose">
              <h4 className="font-serif text-xl text-ink-900 mb-2">The Licensed Photographer Advantage</h4>
              <p className="text-gray-600 mb-0">
                As an Official Government Licensed Photographer, I hold a valid permit issued by the Ministry of Tourism. This allows me to enter with professional-grade equipment and conduct photoshoots without interruption from security, ensuring a smooth and stress-free experience for you.
              </p>
            </div>

            <h3 className="font-serif text-2xl text-ink-900 mt-10 mb-4">Taj Mahal Entry Information</h3>
            <div className="not-prose overflow-x-auto">
              <table className="w-full text-sm border border-marble-200 rounded">
                <thead className="bg-marble-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-ink-900 border-b border-marble-200">Detail</th>
                    <th className="px-4 py-3 text-left font-semibold text-ink-900 border-b border-marble-200">Information</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-marble-200"><td className="px-4 py-3 font-medium">Opening Hours</td><td className="px-4 py-3">Sunrise to Sunset (approx. 6:00 AM – 6:30 PM)</td></tr>
                  <tr className="border-b border-marble-200"><td className="px-4 py-3 font-medium">Closed On</td><td className="px-4 py-3">Every Friday (for prayers at the mosque)</td></tr>
                  <tr className="border-b border-marble-200"><td className="px-4 py-3 font-medium">Entry Fee (Foreign Tourists)</td><td className="px-4 py-3">INR 1,100 (~$13 USD) + INR 200 for mausoleum entry</td></tr>
                  <tr className="border-b border-marble-200"><td className="px-4 py-3 font-medium">Entry Fee (Indian Citizens)</td><td className="px-4 py-3">INR 50 + INR 200 for mausoleum entry</td></tr>
                  <tr className="border-b border-marble-200"><td className="px-4 py-3 font-medium">Best Photography Time</td><td className="px-4 py-3">Sunrise (5:30 – 7:30 AM) or Late Afternoon (4:00 – 6:00 PM)</td></tr>
                  <tr><td className="px-4 py-3 font-medium">Entry Gates</td><td className="px-4 py-3">East Gate, West Gate (East Gate recommended for sunrise)</td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="font-serif text-2xl text-ink-900 mt-10 mb-4">Items Prohibited Inside the Taj Mahal</h3>
            <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              {['Tripods & Monopods', 'Drones & RC Devices', 'Food & Tobacco', 'Knives & Sharp Objects', 'Books & Large Bags', 'Wireless Speakers', 'Professional Lighting', 'Selfie Sticks (peak hours)'].map((item) => (
                <div key={item} className="flex items-center bg-red-50 border border-red-100 rounded px-4 py-3">
                  <span className="text-red-500 mr-3 font-bold">✕</span>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <h3 className="font-serif text-2xl text-ink-900 mt-10 mb-4">How to Book a Licensed Photographer</h3>
            <p>When booking a photographer for the Taj Mahal, always verify their official Government ID badge. Many unauthorized photographers operate outside the gates, but they risk being stopped by security inside, potentially ruining your experience.</p>

            <div className="not-prose my-8">
              <h4 className="font-serif text-xl text-ink-900 mb-6">Step-by-Step Booking Process</h4>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Submit an Inquiry', desc: 'Fill out our booking form or contact us via WhatsApp with your preferred date and service.' },
                  { step: '2', title: 'Receive Confirmation', desc: 'We confirm availability within hours and share session details, meeting point, and preparation tips.' },
                  { step: '3', title: 'Meet at the Gate', desc: 'On shoot day, meet at the designated entry gate (usually East Gate for sunrise sessions).' },
                  { step: '4', title: 'Enjoy Your Session', desc: 'We handle permits, security, and navigation while you focus on having an amazing experience.' },
                  { step: '5', title: 'Receive Your Gallery', desc: 'Get your professionally edited, high-resolution photos within 48 hours via a private online gallery.' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4 bg-marble-50 p-4 rounded border border-marble-200">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold-500 text-white flex items-center justify-center font-bold text-sm">{item.step}</div>
                    <div>
                      <h5 className="font-semibold text-ink-900">{item.title}</h5>
                      <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="not-prose text-center mt-12">
              <Link href="/book" className="inline-flex items-center px-8 py-4 bg-ink-900 text-white font-medium text-sm tracking-wide uppercase hover:bg-ink-800 transition-colors rounded-sm">
                Book Your Licensed Photographer
              </Link>
            </div>
          </article>
        </div>
      </main>

      <Footer />
      <StickyWhatsApp />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema([
          { name: 'Home', url: SITE.url },
          { name: 'Permit Guide', url: `${SITE.url}/permit-guide` },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(permitFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd({
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'How to Book a Licensed Photographer at the Taj Mahal',
          description: 'Step-by-step guide to booking an official government-licensed photographer for your Taj Mahal visit.',
          step: [
            { '@type': 'HowToStep', name: 'Submit an Inquiry', text: 'Fill out the booking form or contact via WhatsApp with your preferred date and service.' },
            { '@type': 'HowToStep', name: 'Receive Confirmation', text: 'We confirm availability and share session details, meeting point, and preparation tips.' },
            { '@type': 'HowToStep', name: 'Meet at the Gate', text: 'On shoot day, meet at the designated entry gate (usually East Gate for sunrise).' },
            { '@type': 'HowToStep', name: 'Enjoy Your Session', text: 'We handle permits, security, and navigation while you enjoy the experience.' },
            { '@type': 'HowToStep', name: 'Receive Your Gallery', text: 'Get professionally edited high-resolution photos within 48 hours via a private gallery.' },
          ],
        }) }}
      />
    </div>
  );
}
