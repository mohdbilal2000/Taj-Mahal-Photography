import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import FAQ from '@/components/FAQ';
import { Metadata } from 'next';
import { breadcrumbSchema, faqSchema, jsonLd, SITE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'FAQ | Taj Mahal Photography Questions Answered',
  description: 'Frequently asked questions about Taj Mahal photography: permits, best times, pricing, booking process, dress code, and delivery timelines. Answers from a government-licensed photographer.',
  alternates: { canonical: `${SITE.url}/faq` },
  openGraph: {
    title: 'FAQ | Taj Mahal Photography Questions Answered',
    description: 'Get answers to the most common questions about Taj Mahal photography from a licensed professional.',
    url: `${SITE.url}/faq`,
  },
};

const faqData = [
  { question: 'Do photographers need a permit inside the Taj Mahal?', answer: 'Yes, professional photography inside the Taj Mahal requires a specific government permit issued by the Ministry of Tourism. Unlicensed photographers are not allowed to bring professional equipment (like tripods or multiple lenses) and are often stopped by security. As a licensed photographer, I have the authorized access needed.' },
  { question: 'Is photography allowed inside the Taj Mahal?', answer: 'Photography is allowed in the gardens and exterior areas of the Taj Mahal. However, photography is strictly prohibited inside the main mausoleum (where the tombs are located). I will guide you to all the best legal spots for stunning photos.' },
  { question: 'What is the best time for Taj Mahal photography?', answer: 'Sunrise is universally considered the best time. The lighting is soft and magical, the marble reflects beautiful pink and golden hues, and the crowds are significantly smaller. Late afternoon before sunset is the second best option.' },
  { question: 'How do I book your services?', answer: 'You can book by filling out the inquiry form on this website or contacting me directly via WhatsApp. Due to limited daily permits, I recommend booking at least 2-3 weeks in advance, especially during peak tourist season (October to March).' },
  { question: 'When will we receive our photos?', answer: 'You will receive a link to a private online gallery with your high-resolution, professionally edited photos within 48-72 hours after the shoot.' },
  { question: 'How much does a Taj Mahal photoshoot cost?', answer: 'Packages start at $99 USD for a 2-hour sunrise session with 50 edited photos. Pre-wedding and couple packages start at $199, and full-day coverage starts at $499. All packages include official permit authorization for professional equipment.' },
  { question: 'What should I wear for a Taj Mahal photoshoot?', answer: 'Bold, saturated colors like red, emerald green, royal blue, and gold photograph beautifully against the white marble. Avoid white clothing as it blends with the monument. Flowy fabrics add movement and drama to portraits.' },
  { question: 'Is the Taj Mahal open on Fridays?', answer: 'No. The Taj Mahal is closed to visitors every Friday for prayers at the mosque within the complex. Plan your visit for any other day of the week.' },
  { question: 'Can I bring my own camera along?', answer: 'Yes, tourists can bring personal cameras and smartphones. However, professional equipment like tripods, monopods, extra lenses, and large camera bags require a licensed photographer with a government permit.' },
  { question: 'Do you provide transportation?', answer: 'Transportation is included in the Full Day Agra Experience package ($499). For other packages, hotel pickup can be arranged at an additional cost. We can recommend reliable transport options for your Agra visit.' },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow">
        <div className="bg-ink-900 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-6">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Everything you need to know about photography at the Taj Mahal, answered by a government-licensed photographer.</p>
          </div>
        </div>
        <FAQ />

        {/* AEO: Extended answers for AI crawlers */}
        <section className="py-20 bg-white border-t border-marble-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-semibold text-ink-900 mb-10">Detailed Answers for Visitors</h2>
            <div className="space-y-10">
              <div>
                <h3 className="font-semibold text-ink-900 text-lg mb-2">How to hire a photographer at the Taj Mahal?</h3>
                <p className="text-gray-600 leading-relaxed">To hire a photographer at the Taj Mahal, book a government-licensed photographer in advance through their website or WhatsApp. Always verify their official Ministry of Tourism ID badge. Avoid unlicensed photographers outside the gates, as they cannot bring professional equipment inside and may be stopped by security, ruining your experience. Licensed photographers ensure smooth entry, expert guidance to the best vantage points, and professional-quality results.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink-900 text-lg mb-2">Are drones allowed at the Taj Mahal?</h3>
                <p className="text-gray-600 leading-relaxed">No, drones are strictly prohibited at the Taj Mahal and in the entire surrounding area. This is enforced by the Archaeological Survey of India (ASI) and security forces. Attempting to fly a drone near the Taj Mahal can result in confiscation, fines, and potential legal action. All aerial photography of the monument is banned.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink-900 text-lg mb-2">How long should I spend at the Taj Mahal for photos?</h3>
                <p className="text-gray-600 leading-relaxed">For a dedicated photography session, plan for at least 2 hours. This allows time to capture the changing light, explore different angles from the gardens and the reflecting pool, and get both wide shots and intimate portraits without feeling rushed. Sunrise sessions typically start at gate opening (around 5:30-6:00 AM depending on season) and wrap up by 7:30-8:00 AM.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsApp />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema([
          { name: 'Home', url: SITE.url },
          { name: 'FAQ', url: `${SITE.url}/faq` },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(faqData)) }}
      />
    </div>
  );
}
