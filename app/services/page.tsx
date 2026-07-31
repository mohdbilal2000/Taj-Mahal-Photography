import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { breadcrumbSchema, offerSchema, webPageSchema, graphSchema, jsonLd, SITE, LAST_UPDATED } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Photography Services & Sunrise Luxury Tours from Delhi',
  description: 'Taj Mahal photography from $49, a customisable Transport + Guide combo with private car and licensed guide from $100, and same-day Sunrise Luxury Tours from Delhi/NCR — private Innova ($650) or Force Urbania coach ($899) with guide, photographer, monument tickets, golf cart and skip-the-line escort.',
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
    id: 'quick-capture',
    title: 'Quick Capture',
    description: 'A quick, professional photoshoot at the Taj Mahal. You receive a curated digital album of 30 raw photos — perfect for travelers who want quality shots without the wait.',
    features: ['30 Minute Session', '30 Raw Photos (Digital Album)', 'No Physical Prints', 'Instant Digital Delivery'],
    price: '$49',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'sunrise',
    title: 'Taj Mahal Sunrise Photoshoot',
    description: 'Experience the magic of the Taj Mahal at dawn. This is our most popular package, offering the best lighting and fewest crowds. We capture the monument as it changes colors with the rising sun.',
    features: ['1 Hour Session', '50 High-Res Photos', 'Skip-the-line guidance', 'Best lighting conditions'],
    price: '$99',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'couple',
    title: 'Couple & Pre-Wedding Photography',
    description: 'Celebrate your love story at the ultimate monument of love. We provide editorial-style posing guidance while capturing candid, romantic moments.',
    features: ['2+ Hour Session', '100+ Natural High-Res Photos', '50 Raw Physical Photographs', '30 Second Cinematic Video', 'Outfit change allowed (outside gates)', 'Posing direction'],
    price: '$199',
    image: 'https://images.unsplash.com/photo-1585506942812-e72b29cef752?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'family',
    title: 'Family Vacation Photography',
    description: 'Preserve your family memories with beautiful group portraits and candid shots of you exploring the monument together.',
    features: ['1.5 Hour Session', '40+ High-Res Photos', 'Group and individual portraits', 'Child-friendly pacing'],
    price: '$299',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'guided-photo-tour-small',
    title: 'Guided Tour + Photo · Small Group (1–5 Guests)',
    description: 'A licensed local guide plus a professional photographer at the Taj Mahal and Agra Fort. 30 natural high-resolution digital photos and 30 premium printed copies. Single fixed price for up to 5 guests. Monument tickets not included.',
    features: ['Licensed local guide for Taj Mahal & Agra Fort', 'Professional photographer alongside', '30 natural digital photos', '30 premium printed photo copies', 'Best photo locations & pose assistance', 'Up to 5 guests'],
    price: '$79',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'guided-photo-tour-large',
    title: 'Guided Tour + Photo · Large Group (6–12 Guests)',
    description: 'The same guide + photographer combo covering the Taj Mahal and Agra Fort, scaled up for groups of 6 to 12 guests. Group portraits and individual portraits, 30 digital photos and 30 printed copies. Monument tickets not included.',
    features: ['Licensed local guide for Taj Mahal & Agra Fort', 'Professional photographer alongside', '30 natural digital photos', '30 premium printed photo copies', 'Group portraits + individual portraits', 'Best photo locations & pose assistance', 'Up to 12 guests'],
    price: '$99',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'transport-guide',
    title: 'Transport + Guide (No Photography)',
    description: 'A private A/C car with chauffeur plus a Ministry of Tourism licensed guide — you choose the cities (Agra, Delhi, Jaipur, Mathura-Vrindavan) and the number of days, and we confirm one clear quote on WhatsApp starting from $100. No photographer — shoot on your own camera. Monument tickets not included.',
    features: ['Starting from $100 — exact quote on WhatsApp', 'Your choice of cities & days', 'Private A/C car + chauffeur', 'Ministry of Tourism licensed guide', 'Hotel / railway station pickup', 'No photographer — bring your own camera'],
    price: '$100',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'sunrise-luxury-innova',
    title: 'Taj Mahal Sunrise Luxury Tour (Innova)',
    description: 'Same-day sunrise tour from Delhi/NCR to Agra in a private Toyota Innova. Covers the Taj Mahal and Agra Fort with a Ministry of Tourism licensed guide and photographer, monument tickets, a private golf cart inside the Taj complex, and a security escort to skip the line. Ideal for couples and small families.',
    features: ['Same Day · 14–16 Hours', 'Private Toyota Innova (Delhi/NCR ↔ Agra)', 'Govt. licensed guide & photographer', 'Taj Mahal + Agra Fort tickets included', 'Private golf cart inside Taj complex', 'Skip-the-line with security escort'],
    price: '$650',
    image: 'https://images.unsplash.com/photo-1585506942812-e72b29cef752?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'sunrise-luxury-urbania',
    title: 'Taj Mahal Sunrise Luxury Urbania',
    description: 'The flagship same-day sunrise tour from Delhi/NCR for larger families and groups. Travel in a private Force Urbania luxury coach with reclining seats, A/C and Wi-Fi. Includes a Ministry of Tourism licensed guide and photographer, Taj Mahal and Agra Fort tickets, a private golf cart inside the Taj complex, and a security escort to skip the line.',
    features: ['Same Day · 14–16 Hours', 'Private Force Urbania luxury coach', 'Up to 13 guests', 'Govt. licensed guide & photographer', 'Taj Mahal + Agra Fort tickets included', 'Private golf cart inside Taj complex', 'Skip-the-line with security escort'],
    price: '$899',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />

      <main className="flex-grow bg-marble-50">
        <div className="bg-ink-900 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-gold-400 text-sm font-bold tracking-widest uppercase mb-4 block">Our Expertise</span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-6">Photography Services</h1>
            <p className="text-lg text-gray-300">Premium, authorized photoshoots tailored to your needs. All packages include official photography permit authorization.</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900">{service.title}</h2>
                  </div>
                  <p className="text-2xl font-light text-gold-600 mb-4">From {service.price} <span className="text-sm text-gray-500">USD</span></p>
                  <p className="text-gray-600 text-lg mb-8">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-ink-800">
                        <span className="text-gold-500 mr-3">★</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/book?service=${service.id}`}
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-sm font-medium rounded-sm text-white bg-ink-900 hover:bg-ink-800 transition-colors"
                  >
                    Check Availability
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AEO: Direct answers for service queries */}
        <section className="py-20 bg-white border-t border-marble-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-semibold text-ink-900 mb-8">Service Quick Answers</h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-ink-900 mb-2">What is included in a Taj Mahal photography package?</h3>
                <p className="text-gray-600">All packages include an official photography permit, a professional photographer with full-frame camera equipment, posing guidance, and high-resolution photos delivered within 48 hours via a private online gallery. Monument entry tickets are not included.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink-900 mb-2">Which Taj Mahal photography package is most popular?</h3>
                <p className="text-gray-600">The Sunrise Photoshoot ($99, 1 hour) is the most popular package. It offers the best natural lighting, fewest crowds, and captures the iconic color changes on the marble as the sun rises. Ideal for couples and solo travelers visiting for the first time.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink-900 mb-2">Can I combine multiple photography services?</h3>
                <p className="text-gray-600">Yes. The Taj Mahal + Agra Fort Heritage Trail ($399, 5 hours) and Full Day Agra Experience ($499, 8-10 hours) combine multiple locations. Custom combinations can also be arranged upon request.</p>
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
