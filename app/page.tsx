import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AuthoritySection from '@/components/AuthoritySection';
import ServicesOverview from '@/components/ServicesOverview';
import PhotographyPlans from '@/components/PhotographyPlans';
import LicenseValidation from '@/components/LicenseValidation';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import BackToTop from '@/components/BackToTop';
import { localBusinessSchema, websiteSchema, breadcrumbSchema, faqSchema, jsonLd, SITE } from '@/lib/seo';

const homeFaqs = [
  { question: 'Do photographers need a permit inside the Taj Mahal?', answer: 'Yes, professional photography inside the Taj Mahal requires a specific government permit issued by the Ministry of Tourism. Unlicensed photographers are not allowed to bring professional equipment and are routinely stopped by security. A government-licensed photographer holds legal authorization for professional shoots.' },
  { question: 'Is photography allowed inside the Taj Mahal?', answer: 'Photography is allowed in the gardens, near the reflecting pool, and around the exterior of the monument. Photography is strictly prohibited inside the main mausoleum where the cenotaphs of Shah Jahan and Mumtaz Mahal are located. A licensed photographer guides you to the best legal vantage points.' },
  { question: 'What is the best time for Taj Mahal photography?', answer: 'Sunrise is universally the best time for Taj Mahal photography. The soft morning light creates pink, golden, and white reflections on the marble, and the crowds are significantly smaller. Late afternoon before sunset is the second-best option for warm golden tones.' },
  { question: 'How much does a Taj Mahal photoshoot cost?', answer: 'Packages start at $99 USD for a 2-hour sunrise session including 50 edited photos and official permit. Pre-wedding and couple packages start at $199 (100 photos), and full-day Agra coverage starts at $499 (250 photos with AC transport).' },
  { question: 'How do I book a licensed Taj Mahal photographer?', answer: 'Book via the inquiry form on this website or contact us on WhatsApp. Due to limited daily permits (maximum 2 shoots per day), we recommend booking 2-3 weeks in advance, especially during peak tourist season from October to March.' },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />

      <main className="flex-grow">
        <Hero />
        <AuthoritySection />
        <ServicesOverview />
        <PhotographyPlans />
        <LicenseValidation />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>

      <Footer />
      <StickyWhatsApp />
      <BackToTop />

      {/* JSON-LD: LocalBusiness + PhotographyBusiness (GEO/SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(localBusinessSchema()) }}
      />
      {/* JSON-LD: WebSite with SearchAction */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(websiteSchema()) }}
      />
      {/* JSON-LD: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema([
          { name: 'Home', url: SITE.url },
        ])) }}
      />
      {/* JSON-LD: FAQPage — feeds AI answer engines (AEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(homeFaqs)) }}
      />
    </div>
  );
}
