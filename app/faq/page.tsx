import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import FAQ from '@/components/FAQ';

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col pt-28">
      <Header />
      <main className="flex-grow bg-white">
        <FAQ />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
