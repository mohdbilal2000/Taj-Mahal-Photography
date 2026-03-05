import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col pt-28">
      <Header />
      <main className="flex-grow bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink-900 mb-8">Terms of Service</h1>
          <div className="prose prose-lg prose-slate max-w-none">
            <p>By booking our services, you agree to the following terms:</p>
            <ul>
              <li>A deposit may be required to secure your booking.</li>
              <li>Cancellations must be made at least 48 hours in advance for a full refund.</li>
              <li>We are not responsible for monument closures or weather conditions, but we will do our best to reschedule.</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
