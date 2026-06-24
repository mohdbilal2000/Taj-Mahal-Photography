import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import Link from 'next/link';
import { Metadata } from 'next';
import { breadcrumbSchema, faqSchema, speakableSpec, webPageSchema, graphSchema, jsonLd, SITE, LAST_UPDATED } from '@/lib/seo';

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
    <div className="theme-dark grain min-h-screen flex flex-col pt-20">
      <Header />

      <main id="main-content" className="flex-grow bg-night">
        <div className="bg-night bg-mughal-pattern border-b border-line py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="kicker mb-4 block">Official Information</span>
            <h1 className="display-tight font-display text-4xl md:text-5xl font-semibold text-ivory mb-6">Taj Mahal Photography Permit Guide</h1>
            <p className="text-lg text-muted">Official rules, regulations, and why hiring a licensed photographer is essential for your visit.</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <article className="prose prose-invert prose-lg max-w-none">
            <h2 className="font-display text-3xl text-ivory mb-6">Understanding Taj Mahal Photography Rules</h2>
            <p>
              The Taj Mahal is a UNESCO World Heritage site and a protected monument under the Archaeological Survey of India (ASI). To preserve its sanctity and ensure security, strict rules govern photography within its premises.
            </p>

            <h3 className="font-display text-2xl text-ivory mt-10 mb-4">Is Photography Allowed Inside the Taj Mahal?</h3>
            <p>This is the most common question visitors ask. The answer depends on where you are within the complex:</p>
            <ul>
              <li><strong>Exterior & Gardens:</strong> Yes, photography is freely allowed in the gardens, near the reflecting pool, on the elevated platform, and around the exterior of the monument.</li>
              <li><strong>Inside the Main Mausoleum:</strong> <strong>No.</strong> Photography is strictly prohibited inside the main tomb area where the cenotaphs of Shah Jahan and Mumtaz Mahal are located. Security guards actively enforce this rule.</li>
              <li><strong>Mosque and Guest House:</strong> Photography is generally allowed in the mosque (to the west) and the guest house (to the east), which flank the main mausoleum.</li>
            </ul>
            <h3 className="font-display text-2xl text-ivory mt-10 mb-4">Do Photographers Need a Permit?</h3>
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

            <div className="bg-surface p-6 border-l-2 border-accent my-8 not-prose">
              <h4 className="font-display text-xl text-ivory mb-2">The Licensed Photographer Advantage</h4>
              <p className="text-muted mb-0">
                As an Official Government Licensed Photographer, I hold a valid permit issued by the Ministry of Tourism. This allows me to enter with professional-grade equipment and conduct photoshoots without interruption from security, ensuring a smooth and stress-free experience for you.
              </p>
            </div>

            <h3 className="font-display text-2xl text-ivory mt-10 mb-4">Taj Mahal Entry Information</h3>
            <div className="not-prose overflow-x-auto">
              <table className="w-full text-sm border border-line">
                <thead className="bg-coal">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-ivory border-b border-line">Detail</th>
                    <th className="px-4 py-3 text-left font-semibold text-ivory border-b border-line">Information</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-line"><td className="px-4 py-3 font-medium text-ivory">Opening Hours</td><td className="px-4 py-3">Sunrise to Sunset (approx. 6:00 AM – 6:30 PM)</td></tr>
                  <tr className="border-b border-line"><td className="px-4 py-3 font-medium text-ivory">Closed On</td><td className="px-4 py-3">Every Friday (for prayers at the mosque)</td></tr>
                  <tr className="border-b border-line"><td className="px-4 py-3 font-medium text-ivory">Entry Fee (Foreign Tourists)</td><td className="px-4 py-3">INR 1,100 (~$13 USD) + INR 200 for mausoleum entry</td></tr>
                  <tr className="border-b border-line"><td className="px-4 py-3 font-medium text-ivory">Entry Fee (Indian Citizens)</td><td className="px-4 py-3">INR 50 + INR 200 for mausoleum entry</td></tr>
                  <tr className="border-b border-line"><td className="px-4 py-3 font-medium text-ivory">Best Photography Time</td><td className="px-4 py-3">Sunrise (5:30 – 7:30 AM) or Late Afternoon (4:00 – 6:00 PM)</td></tr>
                  <tr><td className="px-4 py-3 font-medium text-ivory">Entry Gates</td><td className="px-4 py-3">East Gate, West Gate (East Gate recommended for sunrise)</td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="font-display text-2xl text-ivory mt-10 mb-4">Items Prohibited Inside the Taj Mahal</h3>
            <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              {['Tripods & Monopods', 'Drones & RC Devices', 'Food & Tobacco', 'Knives & Sharp Objects', 'Books & Large Bags', 'Wireless Speakers', 'Professional Lighting', 'Selfie Sticks (peak hours)'].map((item) => (
                <div key={item} className="flex items-center bg-coal border border-line px-4 py-3">
                  <span className="text-accent mr-3 font-bold">✕</span>
                  <span className="text-sm text-muted">{item}</span>
                </div>
              ))}
            </div>

            <h3 className="font-display text-2xl text-ivory mt-10 mb-4">How to Book a Licensed Photographer</h3>
            <p>When booking a photographer for the Taj Mahal, always verify their official Government ID badge. Many unauthorized photographers operate outside the gates, but they risk being stopped by security inside, potentially ruining your experience.</p>

            <div className="not-prose my-8">
              <h4 className="font-display text-xl text-ivory mb-6">Step-by-Step Booking Process</h4>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Submit an Inquiry', desc: 'Fill out our booking form or contact us via WhatsApp with your preferred date and service.' },
                  { step: '2', title: 'Receive Confirmation', desc: 'We confirm availability within hours and share session details, meeting point, and preparation tips.' },
                  { step: '3', title: 'Meet at the Gate', desc: 'On shoot day, meet at the designated entry gate (usually East Gate for sunrise sessions).' },
                  { step: '4', title: 'Enjoy Your Session', desc: 'We handle permits, security, and navigation while you focus on having an amazing experience.' },
                  { step: '5', title: 'Receive Your Gallery', desc: 'Get your high-resolution photos within 48 hours via a private online gallery.' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4 bg-coal p-4 border border-line">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-night flex items-center justify-center font-bold text-sm">{item.step}</div>
                    <div>
                      <h5 className="font-semibold text-ivory">{item.title}</h5>
                      <p className="text-sm text-muted mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="not-prose text-center mt-12">
              <Link href="/book" className="inline-flex items-center px-8 py-4 bg-ivory text-night font-mono text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-accent transition-colors">
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
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            graphSchema([
              breadcrumbSchema([
                { name: 'Home', url: SITE.url },
                { name: 'Permit Guide', url: `${SITE.url}/permit-guide` },
              ]),
              webPageSchema({
                url: `${SITE.url}/permit-guide`,
                name: 'Taj Mahal Photography Permit Guide',
                description: 'Official rules, regulations, prohibited items and licensed-photographer booking process for the Taj Mahal.',
                image: SITE.image,
                lastReviewed: LAST_UPDATED,
                speakableSelectors: ['.faq-answer', 'h2', 'h3'],
              }),
              {
                ...faqSchema(permitFaqs),
                speakable: speakableSpec(['.faq-answer']),
              },
              {
                '@type': 'HowTo',
                '@id': `${SITE.url}/permit-guide#how-to-book-licensed`,
                name: 'How to Book a Licensed Photographer at the Taj Mahal',
                description: 'Step-by-step guide to booking an official government-licensed photographer for your Taj Mahal visit.',
                step: [
                  { '@type': 'HowToStep', position: 1, name: 'Submit an Inquiry', text: 'Fill out the booking form or contact via WhatsApp with your preferred date and service.' },
                  { '@type': 'HowToStep', position: 2, name: 'Receive Confirmation', text: 'We confirm availability and share session details, meeting point, and preparation tips.' },
                  { '@type': 'HowToStep', position: 3, name: 'Meet at the Gate', text: 'On shoot day, meet at the designated entry gate (usually East Gate for sunrise).' },
                  { '@type': 'HowToStep', position: 4, name: 'Enjoy Your Session', text: 'We handle permits, security, and navigation while you enjoy the experience.' },
                  { '@type': 'HowToStep', position: 5, name: 'Receive Your Gallery', text: 'Get high-resolution photos within 48 hours via a private gallery.' },
                ],
              },
            ]),
          ),
        }}
      />
    </div>
  );
}
