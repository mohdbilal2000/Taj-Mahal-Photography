import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col pt-28">
      <Header />
      <main className="flex-grow bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink-900 mb-8">About The License</h1>
          <div className="prose prose-lg prose-slate max-w-none">
            <p>I am an Official Government Licensed Photographer authorized by the Ministry of Tourism, Government of India.</p>
            <p>This license is granted only after passing rigorous examinations regarding the history, architecture, and photography regulations of the Taj Mahal and other monuments.</p>
          </div>
        </div>
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
