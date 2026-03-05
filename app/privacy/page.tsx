import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col pt-28">
      <Header />
      <main className="flex-grow bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-lg prose-slate max-w-none">
            <p>Your privacy is important to us. We only collect information necessary to process your booking and communicate with you regarding your photoshoot.</p>
            <p>We do not share your personal information with third parties.</p>
          </div>
        </div>
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
