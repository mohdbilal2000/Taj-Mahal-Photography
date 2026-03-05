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
      
      {/* JSON-LD Schema for LocalBusiness and ProfessionalService */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "ProfessionalService"],
            "name": "Taj Mahal Photography",
            "image": "https://tajmahalphotography.com/logo.png",
            "description": "Official Government Licensed Taj Mahal Photographer in Agra. Authorized for Photography Inside Taj Mahal.",
            "@id": "https://tajmahalphotography.com",
            "url": "https://tajmahalphotography.com",
            "telephone": "+919876543210",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Taj Mahal East Gate Road",
              "addressLocality": "Agra",
              "addressRegion": "Uttar Pradesh",
              "postalCode": "282001",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 27.1751,
              "longitude": 78.0421
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Saturday",
                "Sunday"
              ],
              "opens": "05:30",
              "closes": "19:00"
            },
            "sameAs": [
              "https://instagram.com/tajmahalphotography"
            ],
            "priceRange": "$$$"
          })
        }}
      />
    </div>
  );
}
