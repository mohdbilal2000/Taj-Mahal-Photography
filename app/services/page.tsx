import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { IMG, img } from '@/lib/images';
import { breadcrumbSchema, offerSchema, webPageSchema, graphSchema, jsonLd, SITE, LAST_UPDATED } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Photography Services & Sunrise Luxury Tours from Delhi',
  description: 'Premium Taj Mahal photography services from $99 plus same-day Sunrise Luxury Tours from Delhi/NCR — private Innova ($650) or Force Urbania coach ($899) with guide, photographer, monument tickets, golf cart and skip-the-line escort.',
  alternates: { canonical: `${SITE.url}/services` },
  openGraph: {
    title: 'Taj Mahal Photography Services | Licensed Photographer',
    description: 'Premium photography services at the Taj Mahal by a government-licensed photographer.',
    url: `${SITE.url}/services`,
    images: [{ url: SITE.image, width: 1200, height: 630, alt: 'Taj Mahal Photography Services' }],
  },
};

const services = [
  {
    id: 'express-capture',
    title: 'Express Capture',
    description: 'The most affordable way to photograph the Taj Mahal. A 15-minute single-spot capture at the most iconic vantage point, with 10 edited high-resolution digital photos delivered instantly.',
    features: ['15 Minute Session', '10 Edited High-Res Photos', 'Single Iconic Vantage Point', 'Official Photography Permit', 'Instant Digital Delivery'],
    price: '$20',
    image: img(IMG.tajRiverside, 1000),
    alt: IMG.tajRiverside.alt,
  },
  {
    id: 'quick-capture',
    title: 'Quick Capture',
    description: 'A quick, professional photoshoot at the Taj Mahal. You receive a curated digital album of 20 raw photos — perfect for travelers who want quality shots without the wait.',
    features: ['30 Minute Session', '20 Raw Photos (Digital Album)', 'No Physical Prints', 'Instant Digital Delivery'],
    price: '$50',
    image: img(IMG.tajDawnHaze, 1000),
    alt: IMG.tajDawnHaze.alt,
  },
  {
    id: 'sunrise',
    title: 'Taj Mahal Sunrise Photoshoot',
    description: 'Experience the magic of the Taj Mahal at dawn. This is our most popular package, offering the best lighting and fewest crowds. We capture the monument as it changes colors with the rising sun.',
    features: ['1.5 Hour Session', '50 High-Res Photos', 'Skip-the-line guidance', 'Best lighting conditions'],
    price: '$99',
    image: img(IMG.tajReflection, 1000),
    alt: IMG.tajReflection.alt,
  },
  {
    id: 'couple',
    title: 'Couple & Pre-Wedding Photography',
    description: 'Celebrate your love story at the ultimate monument of love. We provide editorial-style posing guidance while capturing candid, romantic moments.',
    features: ['2+ Hour Session', '100+ Natural High-Res Photos', '50 Raw Physical Photographs', '30 Second Cinematic Video', 'Outfit change allowed (outside gates)', 'Posing direction'],
    price: '$199',
    image: img(IMG.tajGoldenHour, 1000),
    alt: IMG.tajGoldenHour.alt,
  },
  {
    id: 'family',
    title: 'Family Vacation Photography',
    description: 'Preserve your family memories with beautiful group portraits and candid shots of you exploring the monument together.',
    features: ['1.5 Hour Session', '40+ High-Res Photos', 'Group and individual portraits', 'Child-friendly pacing'],
    price: '$299',
    image: img(IMG.tajGardens, 1000),
    alt: IMG.tajGardens.alt,
  },
  {
    id: 'guided-photo-tour-small',
    title: 'Guided Tour + Photo · Small Group (1–5 Guests)',
    description: 'A licensed local guide plus a professional photographer at the Taj Mahal and Agra Fort. 20 natural high-resolution digital photos and 20 premium printed copies. Single fixed price for up to 5 guests. Monument tickets not included.',
    features: ['Licensed local guide for Taj Mahal & Agra Fort', 'Professional photographer alongside', '20 natural digital photos', '20 premium printed photo copies', 'Best photo locations & pose assistance', 'Up to 5 guests'],
    price: '$50',
    image: img(IMG.agraFort, 1000),
    alt: IMG.agraFort.alt,
  },
  {
    id: 'guided-photo-tour-large',
    title: 'Guided Tour + Photo · Large Group (6–12 Guests)',
    description: 'The same guide + photographer combo covering the Taj Mahal and Agra Fort, scaled up for groups of 6 to 12 guests. Group portraits and individual portraits, 20 digital photos and 20 printed copies. Monument tickets not included.',
    features: ['Licensed local guide for Taj Mahal & Agra Fort', 'Professional photographer alongside', '20 natural digital photos', '20 premium printed photo copies', 'Group portraits + individual portraits', 'Best photo locations & pose assistance', 'Up to 12 guests'],
    price: '$80',
    image: img(IMG.tajDome, 1000),
    alt: IMG.tajDome.alt,
  },
  {
    id: 'sunrise-luxury-innova',
    title: 'Taj Mahal Sunrise Luxury Tour (Innova)',
    description: 'Same-day sunrise tour from Delhi/NCR to Agra in a private Toyota Innova. Covers the Taj Mahal and Agra Fort with a Ministry of Tourism licensed guide and photographer, monument tickets, a private golf cart inside the Taj complex, and a security escort to skip the line. Ideal for couples and small families.',
    features: ['Same Day · 14–16 Hours', 'Private Toyota Innova (Delhi/NCR ↔ Agra)', 'Govt. licensed guide & photographer', 'Taj Mahal + Agra Fort tickets included', 'Private golf cart inside Taj complex', 'Skip-the-line with security escort'],
    price: '$650',
    image: img(IMG.tajGoldenHour, 1000),
    alt: IMG.tajGoldenHour.alt,
  },
  {
    id: 'sunrise-luxury-urbania',
    title: 'Taj Mahal Sunrise Luxury Urbania',
    description: 'The flagship same-day sunrise tour from Delhi/NCR for larger families and groups. Travel in a private Force Urbania luxury coach with reclining seats, A/C and Wi-Fi. Includes a Ministry of Tourism licensed guide and photographer, Taj Mahal and Agra Fort tickets, a private golf cart inside the Taj complex, and a security escort to skip the line.',
    features: ['Same Day · 14–16 Hours', 'Private Force Urbania luxury coach', 'Up to 13 guests', 'Govt. licensed guide & photographer', 'Taj Mahal + Agra Fort tickets included', 'Private golf cart inside Taj complex', 'Skip-the-line with security escort'],
    price: '$899',
    image: img(IMG.tajRiverside, 1000),
    alt: IMG.tajRiverside.alt,
  },
];

export default function ServicesPage() {
  return (
    <div className="theme-dark grain min-h-screen flex flex-col pt-20">
      <Header />

      <main id="main-content" className="flex-grow bg-night">
        <div className="bg-coal bg-mughal-pattern text-ivory py-20 border-b border-line">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="kicker inline-flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-accent" />
              Our Expertise
              <span className="h-px w-8 bg-accent" />
            </span>
            <h1 className="display-tight font-display text-4xl md:text-5xl font-medium mb-6 text-ivory">Photography Services</h1>
            <p className="text-lg text-muted">Premium, authorized photoshoots tailored to your needs. All packages include official photography permit authorization.</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] overflow-hidden border border-line">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="font-display text-3xl md:text-4xl font-medium text-ivory">{service.title}</h2>
                  </div>
                  <p className="text-2xl font-light text-accent mb-4">From {service.price} <span className="text-sm text-faint">USD</span></p>
                  <p className="text-muted text-lg mb-8">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-muted">
                        <span className="text-accent mr-3">★</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/book?service=${service.id}`}
                    className="inline-flex items-center justify-center bg-ivory text-night px-8 py-4 font-mono text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-accent transition-colors duration-300"
                  >
                    Check Availability
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AEO: Direct answers for service queries */}
        <section className="py-20 bg-coal border-t border-line">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-medium text-ivory mb-8">Service Quick Answers</h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-ivory mb-2">What is included in a Taj Mahal photography package?</h3>
                <p className="text-muted">All packages include an official photography permit, a professional photographer with full-frame camera equipment, posing guidance, and high-resolution photos delivered within 48 hours via a private online gallery. Monument entry tickets are not included.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ivory mb-2">Which Taj Mahal photography package is most popular?</h3>
                <p className="text-muted">The Sunrise Photoshoot ($99, 1.5 hours) is the most popular package. It offers the best natural lighting, fewest crowds, and captures the iconic color changes on the marble as the sun rises. Ideal for couples and solo travelers visiting for the first time.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ivory mb-2">Can I combine multiple photography services?</h3>
                <p className="text-muted">Yes. The Taj Mahal + Agra Fort Heritage Trail ($399, 5 hours) and Full Day Agra Experience ($499, 8-10 hours) combine multiple locations. Custom combinations can also be arranged upon request.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyWhatsApp />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            graphSchema([
              breadcrumbSchema([
                { name: 'Home', url: SITE.url },
                { name: 'Services', url: `${SITE.url}/services` },
              ]),
              webPageSchema({
                url: `${SITE.url}/services`,
                name: 'Photography Services & Sunrise Luxury Tours from Delhi',
                description: 'All Taj Mahal photography packages and same-day Sunrise Luxury Tours from Delhi/NCR.',
                image: SITE.image,
                lastReviewed: LAST_UPDATED,
              }),
              {
                '@type': 'ItemList',
                '@id': `${SITE.url}/services#list`,
                name: 'Taj Mahal Photography Services',
                description: 'Professional photography services at the Taj Mahal by a government-licensed photographer.',
                itemListElement: services.map((s, i) => ({
                  '@type': 'ListItem',
                  position: i + 1,
                  item: {
                    '@type': 'Service',
                    name: s.title,
                    description: s.description,
                    url: `${SITE.url}/services/${s.id}`,
                    provider: { '@id': `${SITE.url}/#business` },
                    offers: offerSchema(s.title, Number(s.price.replace('$', '')), s.description, `${SITE.url}/services/${s.id}`),
                  },
                })),
              },
            ]),
          ),
        }}
      />
    </div>
  );
}
