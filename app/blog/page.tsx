import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col pt-28">
      <Header />
      <main className="flex-grow bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink-900 mb-8">Photography Blog & Guides</h1>
          <p className="text-lg text-gray-600">Coming soon. We are preparing comprehensive guides for your visit to Agra.</p>
        </div>
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
