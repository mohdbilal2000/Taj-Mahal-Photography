import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';
import { breadcrumbSchema, jsonLd, SITE } from '@/lib/seo';
import { ImagePlus } from 'lucide-react';

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

const services = [
  'Quick Capture ($50)',
  'Sunrise Photoshoot ($99)',
  'Pre-Wedding & Couple ($199)',
  'Family Photography ($299)',
  'Proposal Photography ($350)',
  'Taj Mahal + Agra Fort Heritage Trail ($399)',
  'Full Day Agra Experience ($499)',
  'Guide + Photo Combo – Small Group ($50)',
  'Guide + Photo Combo – Large Group ($80)',
  'Sunrise Luxury Tour – Private Innova ($650)',
  'Sunrise Luxury Urbania Tour – Group ($899)',
  'Agra ⇄ Delhi Private Car (from $42/day)',
  'Custom Delhi Photography Tour',
  'Delhi + Agra Custom Trip',
];

export default function BookPage() {
  return (
    <div className="theme-dark grain min-h-screen flex flex-col pt-20">
      <Header />
      <main id="main-content" className="flex-grow bg-night">

        {/* Hero / intro */}
        <div className="bg-coal bg-mughal-pattern border-b border-line py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="kicker mb-4">Check Availability</p>
            <h1 className="display-tight font-display text-ivory text-4xl md:text-5xl font-medium">
              Book your authorized photoshoot
            </h1>
            <p className="mt-5 text-muted text-lg max-w-2xl mx-auto leading-relaxed">
              Tell us your date and the experience you have in mind. Choose from photoshoots,
              guided photo combos, sunrise luxury tours, chauffeur-driven cars, and fully
              custom Delhi &amp; Agra trips.
            </p>

            {/* Services / plans summary */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-left max-w-2xl mx-auto">
              {services.map((service) => (
                <div key={service} className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-2 h-px w-3 bg-accent flex-shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            {/* Add-on note */}
            <div className="mt-8 inline-flex items-center gap-2.5 border border-line bg-surface px-5 py-3 text-sm text-muted">
              <ImagePlus className="w-4 h-4 text-accent flex-shrink-0" />
              <span>
                Add <strong className="text-ivory">extra edited high-resolution photos for $20 each</strong> to any package or tour.
              </span>
            </div>
          </div>
        </div>

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
