import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import FAQ from '@/components/FAQ';
import { Metadata } from 'next';
import { breadcrumbSchema, faqSchema, speakableSpec, webPageSchema, graphSchema, jsonLd, SITE, LAST_UPDATED } from '@/lib/seo';
import { faqs as faqData } from '@/lib/content';

export const metadata: Metadata = {
  title: 'FAQ | Taj Mahal Photography & Sunrise Luxury Tours from Delhi',
  description: 'Frequently asked questions about Taj Mahal photography permits, prices, sunrise timing, and same-day Sunrise Luxury Tours from Delhi/NCR. Answers from a government-licensed photographer.',
  alternates: { canonical: `${SITE.url}/faq` },
  openGraph: {
    title: 'FAQ | Taj Mahal Photography Questions Answered',
    description: 'Get answers to the most common questions about Taj Mahal photography and luxury tours from Delhi.',
    url: `${SITE.url}/faq`,
  },
};

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
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            graphSchema([
              breadcrumbSchema([
                { name: 'Home', url: SITE.url },
                { name: 'FAQ', url: `${SITE.url}/faq` },
              ]),
              webPageSchema({
                url: `${SITE.url}/faq`,
                name: 'FAQ — Taj Mahal Photography & Luxury Tours',
                description: 'Comprehensive FAQ for Taj Mahal photography services and same-day Sunrise Luxury Tours from Delhi/NCR.',
                lastReviewed: LAST_UPDATED,
                speakableSelectors: ['.faq-answer'],
              }),
              {
                ...faqSchema(faqData),
                speakable: speakableSpec(['.faq-answer']),
              },
            ]),
          ),
        }}
      />
    </div>
  );
}
