import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';
import { breadcrumbSchema, jsonLd, SITE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Book a Taj Mahal Photoshoot | Check Availability',
  description: 'Book your authorized Taj Mahal photography session. Limited to 2 daily permits. Sunrise, couple, pre-wedding, and family packages available. Government-licensed photographer in Agra.',
  alternates: { canonical: `${SITE.url}/book` },
  openGraph: {
    title: 'Book a Taj Mahal Photoshoot | Check Availability',
    description: 'Reserve your photography session at the Taj Mahal with a licensed professional.',
    url: `${SITE.url}/book`,
  },
};

export default function BookPage() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow bg-white">
        <ContactForm />
      </main>
      <Footer />
      <StickyWhatsApp />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema([
          { name: 'Home', url: SITE.url },
          { name: 'Book Now', url: `${SITE.url}/book` },
        ])) }}
      />
    </div>
  );
}
