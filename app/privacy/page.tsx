import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import { Metadata } from 'next';
import { breadcrumbSchema, jsonLd, SITE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Taj Mahal Photography. Learn how we collect, use, and protect your personal information when you book our photography services.',
  alternates: { canonical: `${SITE.url}/privacy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow bg-white">
        <div className="bg-ink-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold">Privacy Policy</h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <article className="prose prose-lg prose-slate max-w-none">
            <p className="text-gray-500 text-sm">Last updated: January 1, 2025</p>

            <h2 className="font-serif text-2xl text-ink-900 mt-10 mb-4">1. Information We Collect</h2>
            <p>When you inquire about or book our photography services, we may collect the following personal information:</p>
            <ul>
              <li><strong>Contact Information:</strong> Your full name, email address, WhatsApp number, and nationality.</li>
              <li><strong>Booking Details:</strong> Preferred date, service type, group size, and any special requests or occasion details.</li>
              <li><strong>Communication Records:</strong> Messages exchanged via our contact form, WhatsApp, or email related to your booking.</li>
              <li><strong>Photographs:</strong> Images captured during your photoshoot session.</li>
            </ul>

            <h2 className="font-serif text-2xl text-ink-900 mt-10 mb-4">2. How We Use Your Information</h2>
            <p>We use your personal information exclusively for:</p>
            <ul>
              <li>Processing and confirming your photography booking.</li>
              <li>Communicating with you about your session details, timing, and logistics.</li>
              <li>Delivering your edited photographs via a private online gallery.</li>
              <li>Sending follow-up communications related to your booking (e.g., delivery notifications).</li>
              <li>Improving our services based on client feedback.</li>
            </ul>

            <h2 className="font-serif text-2xl text-ink-900 mt-10 mb-4">3. Photo Usage and Rights</h2>
            <p>We respect your image rights:</p>
            <ul>
              <li>You receive full personal-use rights to all delivered photographs.</li>
              <li>We may request permission to use select images for our portfolio, website, or social media with your written consent.</li>
              <li>If you do not wish your photos to be used for promotional purposes, simply let us know and we will fully respect your decision.</li>
              <li>We will never sell your photographs to third parties.</li>
            </ul>

            <h2 className="font-serif text-2xl text-ink-900 mt-10 mb-4">4. Data Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. Your information may only be shared with:</p>
            <ul>
              <li>Cloud storage providers used to deliver your photo gallery (encrypted and password-protected).</li>
              <li>Payment processors when applicable, solely for transaction purposes.</li>
            </ul>

            <h2 className="font-serif text-2xl text-ink-900 mt-10 mb-4">5. Data Security</h2>
            <p>We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or destruction. However, no method of transmission over the internet is 100% secure.</p>

            <h2 className="font-serif text-2xl text-ink-900 mt-10 mb-4">6. Data Retention</h2>
            <p>We retain your personal information for up to 12 months after your session for delivery and follow-up purposes. Photo files are retained on our secure servers for up to 6 months, after which they are permanently deleted unless you request extended storage.</p>

            <h2 className="font-serif text-2xl text-ink-900 mt-10 mb-4">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Request access to the personal information we hold about you.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion of your personal data and photographs.</li>
              <li>Withdraw consent for promotional use of your images at any time.</li>
            </ul>

            <h2 className="font-serif text-2xl text-ink-900 mt-10 mb-4">8. Cookies</h2>
            <p>Our website may use essential cookies for basic functionality. We do not use tracking cookies or third-party analytics that collect personally identifiable information.</p>

            <h2 className="font-serif text-2xl text-ink-900 mt-10 mb-4">9. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact us:</p>
            <ul>
              <li>Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li>WhatsApp: <a href={`https://wa.me/${SITE.whatsapp}`}>{SITE.phoneDisplay}</a></li>
              <li>Address: {SITE.address.street}, {SITE.address.city}, {SITE.address.state}, India {SITE.address.zip}</li>
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
          { name: 'Privacy Policy', url: `${SITE.url}/privacy` },
        ])) }}
      />
    </div>
  );
}
