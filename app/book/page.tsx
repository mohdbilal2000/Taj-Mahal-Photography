import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import ContactForm from '@/components/ContactForm';

export default function BookPage() {
  return (
    <div className="min-h-screen flex flex-col pt-28">
      <Header />
      <main className="flex-grow bg-white">
        <ContactForm />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
