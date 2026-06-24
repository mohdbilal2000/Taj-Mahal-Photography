import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AuthoritySection from '@/components/AuthoritySection';
import ServicesOverview from '@/components/ServicesOverview';
import PhotographyPlans from '@/components/PhotographyPlans';
import GuidedPhotoTours from '@/components/GuidedPhotoTours';
import LuxuryTours from '@/components/LuxuryTours';
import LicenseValidation from '@/components/LicenseValidation';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import { faqs as siteFaqs, testimonials } from '@/lib/content';
import ContactForm from '@/components/ContactForm';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import BackToTop from '@/components/BackToTop';
import {
  localBusinessSchema,
  websiteSchema,
  breadcrumbSchema,
  faqSchema,
  personSchema,
  reviewSchema,
  tajMahalAttractionSchema,
  agraFortAttractionSchema,
  luxuryTourSchema,
  speakableSpec,
  howToSchema,
  webPageSchema,
  graphSchema,
  jsonLd,
  SITE,
  LAST_UPDATED,
} from '@/lib/seo';

const innovaTour = luxuryTourSchema({
  slug: 'sunrise-luxury-innova',
  name: 'Taj Mahal Sunrise Luxury Tour (Private Innova)',
  description:
    'Same-day private sunrise tour from Delhi/NCR to Agra in a Toyota Innova. Covers the Taj Mahal and Agra Fort with a Ministry of Tourism licensed guide and photographer, monument tickets, a private golf cart inside the Taj complex, and a security escort to skip the line.',
  price: 650,
  image: 'https://images.unsplash.com/photo-1585506942812-e72b29cef752?q=80&w=1200&auto=format&fit=crop',
  vehicle: 'innova',
  audience: 'Couples and families up to 6 guests',
});

const urbaniaTour = luxuryTourSchema({
  slug: 'sunrise-luxury-urbania',
  name: 'Taj Mahal Sunrise Luxury Urbania Tour',
  description:
    'Same-day private sunrise tour from Delhi/NCR to Agra in a Force Urbania luxury coach for larger families and groups of up to 13 guests. Includes a Ministry of Tourism licensed guide and photographer, Taj Mahal and Agra Fort tickets, a private golf cart inside the Taj complex, and a security escort to skip the line.',
  price: 899,
  image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop',
  vehicle: 'urbania',
  audience: 'Families and groups up to 13 guests',
});

const howToBook = howToSchema({
  name: 'How to book a Taj Mahal photoshoot or sunrise luxury tour',
  description:
    'Step-by-step instructions for booking a government-licensed Taj Mahal photoshoot in Agra or a same-day Sunrise Luxury Tour from Delhi/NCR.',
  totalTime: 'PT10M',
  estimatedCost: { value: 50, currency: 'USD' },
  steps: [
    { name: 'Choose your package or tour', text: 'Pick from sunrise photoshoot, couple/pre-wedding, family, heritage trail, full day Agra, or a same-day Sunrise Luxury Tour from Delhi (Innova $650 or Urbania $899).', url: `${SITE.url}/services` },
    { name: 'Submit the inquiry form', text: 'Send your name, nationality, WhatsApp number, preferred date and service through the booking form.', url: `${SITE.url}/book` },
    { name: 'Confirm on WhatsApp', text: 'You receive a WhatsApp reply within 10 minutes during business hours confirming availability and answering any questions.' },
    { name: 'Pay a deposit', text: 'A small deposit secures your slot. Remaining balance is paid in cash, UPI or bank transfer on the day of the shoot.' },
    { name: 'Show up at the meeting point', text: 'Photography clients meet at the Taj Mahal east gate 30 minutes before sunrise. Sunrise Luxury Tour clients are picked up from their Delhi/NCR hotel around 2:30 AM.' },
    { name: 'Receive your photos', text: 'A private online gallery with 50+ high-resolution photos is delivered within 48 to 72 hours after the session.' },
  ],
});

const homeWebPage = webPageSchema({
  url: SITE.url,
  name: SITE.title,
  description: SITE.description,
  image: SITE.image,
  lastReviewed: LAST_UPDATED,
  // `.tldr` intentionally NOT in this selector list — it lives in an sr-only
  // block (legitimate a11y), but pointing `speakable` at hidden content
  // invites scrutiny under Google's hidden-text policy. Only mark visible
  // answer passages as speakable.
  speakableSelectors: ['.faq-answer', '.quick-answer', 'h1', 'h2'],
});

export default function Home() {
  const graph = graphSchema([
    personSchema(),
    localBusinessSchema(),
    websiteSchema(),
    homeWebPage,
    tajMahalAttractionSchema(),
    agraFortAttractionSchema(),
    innovaTour,
    urbaniaTour,
    breadcrumbSchema([{ name: 'Home', url: SITE.url }]),
    {
      ...faqSchema(siteFaqs),
      speakable: speakableSpec(['.faq-answer']),
    },
    howToBook,
    ...testimonials.map((t) =>
      reviewSchema({
        author: t.name,
        country: t.country,
        body: t.text,
        rating: t.rating,
        datePublished: t.datePublished,
      }),
    ),
  ]);

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />

      <main id="main-content" className="flex-grow">
        <Hero />

        {/* Accessible site facts block — read by screen readers and AI extractors.
            Kept off-screen with sr-only (legitimate accessibility pattern, not cloaking). */}
        <p className="sr-only tldr">
          Taj Mahal Photography is an official government-licensed photographer in Agra, India,
          authorized by the Ministry of Tourism for professional photoshoots inside the Taj Mahal.
          Photography packages start at $50. Same-day Sunrise Luxury Tours from Delhi to Agra are
          available in a private Toyota Innova ($650, up to 6 guests) or a Force Urbania luxury
          coach ($899, up to 13 guests) — both include a licensed guide and photographer, Taj
          Mahal and Agra Fort tickets, a private golf cart inside the complex, and a security
          escort to skip the line. Maximum 2 photography permits per day. WhatsApp +91 83930 10125
          for 10-minute response.
        </p>

        <AuthoritySection />
        <ServicesOverview />
        <PhotographyPlans />
        <GuidedPhotoTours />
        <LuxuryTours />
        <LicenseValidation />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>

      <Footer />
      <StickyWhatsApp />
      <BackToTop />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(graph) }} />
    </div>
  );
}
