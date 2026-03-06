import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import { Metadata } from 'next';
import { breadcrumbSchema, jsonLd, SITE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for Taj Mahal Photography services. Read about booking policies, cancellations, photo delivery, liability, and intellectual property.',
  alternates: { canonical: `${SITE.url}/terms` },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow bg-white">
        <div className="bg-ink-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold">Terms of Service</h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <article className="prose prose-lg prose-slate max-w-none">
            <p className="text-gray-500 text-sm">Last updated: January 1, 2025</p>

            <h2 className="font-serif text-2xl text-ink-900 mt-10 mb-4">1. Services</h2>
            <p>Taj Mahal Photography provides professional photography services at the Taj Mahal and other heritage sites in Agra, India. All photography is conducted by a government-licensed photographer holding valid authorization from the Ministry of Tourism, Government of India.</p>

            <h2 className="font-serif text-2xl text-ink-900 mt-10 mb-4">2. Booking and Confirmation</h2>
            <ul>
              <li>Bookings are made through our website contact form, WhatsApp, or email.</li>
              <li>A booking is confirmed only after you receive written confirmation from us (via WhatsApp or email).</li>
              <li>A non-refundable deposit of 30% of the total package price is required to secure your date and time slot.</li>
              <li>The remaining balance is due on the day of the photoshoot before the session begins.</li>
              <li>Due to limited daily permits (maximum 2 sessions per day), early booking is strongly recommended.</li>
            </ul>

            <h2 className="font-serif text-2xl text-ink-900 mt-10 mb-4">3. Monument Entry Tickets</h2>
            <p>The photography service fee does not include Taj Mahal or other monument entry tickets. Clients are responsible for purchasing their own entry tickets. We are happy to provide guidance on ticket purchasing, including current pricing and the official booking process.</p>

            <h2 className="font-serif text-2xl text-ink-900 mt-10 mb-4">4. Cancellation and Refund Policy</h2>
            <ul>
              <li><strong>More than 7 days before:</strong> Full refund of deposit.</li>
              <li><strong>3-7 days before:</strong> 50% of deposit refunded, or free rescheduling to an alternative date (subject to availability).</li>
              <li><strong>Less than 48 hours before:</strong> No refund. Rescheduling may be offered at our discretion.</li>
              <li><strong>No-show:</strong> No refund will be issued.</li>
              <li><strong>Weather/closure:</strong> If the Taj Mahal is closed due to weather, government order, or unforeseen circumstances, we will reschedule at no additional cost or issue a full refund.</li>
            </ul>

            <h2 className="font-serif text-2xl text-ink-900 mt-10 mb-4">5. Photo Delivery</h2>
            <ul>
              <li>Edited, high-resolution photographs are delivered via a private online gallery within 48-72 hours of the session.</li>
              <li>The number of delivered photos depends on the package selected (as listed on the website).</li>
              <li>Gallery links remain active for 30 days. After this period, files may be removed from the server. Clients should download all images promptly.</li>
              <li>Raw (unedited) files are not provided unless explicitly agreed upon in advance.</li>
            </ul>

            <h2 className="font-serif text-2xl text-ink-900 mt-10 mb-4">6. Intellectual Property</h2>
            <ul>
              <li>The photographer retains copyright of all images.</li>
              <li>Clients receive a personal-use license to print, share on social media, and use the images for non-commercial purposes.</li>
              <li>Commercial use of photographs (advertising, publications, stock photography) requires a separate licensing agreement.</li>
              <li>Credit to Taj Mahal Photography when sharing on social media is appreciated but not required.</li>
            </ul>

            <h2 className="font-serif text-2xl text-ink-900 mt-10 mb-4">7. Client Conduct</h2>
            <p>Clients are expected to follow all rules and regulations of the Taj Mahal and other monument premises, including:</p>
            <ul>
              <li>No photography inside the main mausoleum.</li>
              <li>Respecting security personnel instructions.</li>
              <li>Not climbing, touching, or damaging any part of the monument.</li>
              <li>Arriving on time for the scheduled session.</li>
            </ul>

            <h2 className="font-serif text-2xl text-ink-900 mt-10 mb-4">8. Liability</h2>
            <ul>
              <li>We are not responsible for personal injury, loss of belongings, or any incident occurring during the visit to the monument.</li>
              <li>We are not liable for delays caused by security checks, government restrictions, or events beyond our control.</li>
              <li>In the unlikely event of equipment failure, we will reschedule the session at no additional cost.</li>
            </ul>

            <h2 className="font-serif text-2xl text-ink-900 mt-10 mb-4">9. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Updated terms will be posted on this page with the revised date. Continued use of our services after changes constitutes acceptance of the new terms.</p>

            <h2 className="font-serif text-2xl text-ink-900 mt-10 mb-4">10. Contact</h2>
            <p>For questions regarding these terms:</p>
            <ul>
              <li>Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li>WhatsApp: <a href={`https://wa.me/${SITE.whatsapp}`}>{SITE.phoneDisplay}</a></li>
            </ul>
          </article>
        </div>
      </main>
      <Footer />
      <StickyWhatsApp />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema([
          { name: 'Home', url: SITE.url },
          { name: 'Terms of Service', url: `${SITE.url}/terms` },
        ])) }}
      />
    </div>
  );
}
