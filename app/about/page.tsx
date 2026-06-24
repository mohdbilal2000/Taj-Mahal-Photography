import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ShieldCheck, Award, MapPin, Users, Camera, Clock } from 'lucide-react';
import { breadcrumbSchema, personSchema, webPageSchema, speakableSpec, graphSchema, jsonLd, SITE, LAST_UPDATED } from '@/lib/seo';
import { IMG, img } from '@/lib/images';

export const metadata: Metadata = {
  title: 'About Our Licensed Photographer | Government Authorized Agra',
  description: 'Meet the official government-licensed Taj Mahal photographer in Agra. Learn about the Ministry of Tourism certification, years of experience, and why international visitors trust our authorized photography services.',
  alternates: { canonical: `${SITE.url}/about` },
  openGraph: {
    title: 'About Our Licensed Photographer | Taj Mahal Photography',
    description: 'Meet the official government-licensed Taj Mahal photographer in Agra, India.',
    url: `${SITE.url}/about`,
    images: [{ url: SITE.image, width: 1200, height: 630, alt: 'Licensed Taj Mahal Photographer' }],
  },
};

const stats = [
  { label: 'Years of Experience', value: '10+' },
  { label: 'International Clients Served', value: '5,000+' },
  { label: 'Countries Represented', value: '80+' },
  { label: 'Photos Delivered In', value: '48 hrs' },
];

const timeline = [
  { year: 'Certification', title: 'Government License Obtained', description: 'Passed the rigorous Ministry of Tourism examinations covering monument history, architecture, cultural heritage, and photography regulations.' },
  { year: 'Specialization', title: 'Taj Mahal Photography Focus', description: 'Dedicated practice to master every angle, lighting condition, and seasonal variation at the Taj Mahal and surrounding Mughal monuments.' },
  { year: 'Recognition', title: 'Trusted by Global Visitors', description: 'Built a reputation serving visitors from over 80 countries who consistently praise the professionalism and artistic vision.' },
  { year: 'Today', title: 'Premium Photography Service', description: 'Operating as one of the most sought-after licensed photographers in Agra, offering curated packages from sunrise shoots to full-day heritage tours.' },
];

export default function AboutPage() {
  return (
    <div className="theme-dark grain min-h-screen flex flex-col pt-20">
      <Header />
      <main id="main-content" className="flex-grow">
        {/* Hero */}
        <section className="relative bg-night text-ivory py-24">
          <div className="absolute inset-0 opacity-20">
            <Image
              src={img(IMG.tajDome, 1920)}
              alt={IMG.tajDome.alt}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-mughal-pattern opacity-60" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="kicker mb-4 block">About the Photographer</span>
            <h1 className="display-tight font-display text-4xl md:text-6xl font-semibold mb-6 text-ivory">Official Government Licensed Taj Mahal Photographer</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Certified by the Ministry of Tourism, Government of India. Authorized to conduct professional photography inside the Taj Mahal premises with full legal clearance.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-coal border-b border-line">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-4xl md:text-5xl font-semibold text-ivory">{stat.value}</p>
                  <p className="text-sm text-muted mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section - AEO optimized with clear, direct answers */}
        <section className="py-20 bg-night">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ivory mb-8">What Does a Licensed Taj Mahal Photographer Do?</h2>
            <div className="prose prose-invert prose-lg max-w-none space-y-6">
              <p>
                A government-licensed Taj Mahal photographer is a professional who has been officially certified by the Ministry of Tourism, Government of India, after passing comprehensive examinations. This certification grants legal authorization to conduct professional photography sessions inside the Taj Mahal complex with professional equipment.
              </p>
              <p>
                The license requires demonstrating in-depth knowledge of the monument&apos;s history, Mughal architecture, conservation guidelines, visitor management, and photography regulations enforced by the Archaeological Survey of India (ASI).
              </p>

              <h3 className="font-display text-2xl text-ivory mt-12 mb-4">Why Does the License Matter for Visitors?</h3>
              <p>
                Without a licensed photographer, visitors face a common problem: security personnel at the Taj Mahal gates will confiscate or deny entry to anyone carrying professional photography equipment such as tripods, extra lenses, or large camera bags. This means hiring an unlicensed photographer can result in a ruined experience.
              </p>
              <p>
                With a licensed photographer, visitors enjoy uninterrupted access, expert knowledge of the best angles and timing, and the assurance that every aspect of their photoshoot complies with monument regulations.
              </p>

              <h3 className="font-display text-2xl text-ivory mt-12 mb-4">Our Approach to Photography</h3>
              <p>
                Every session is tailored to the visitor&apos;s needs. Whether it is a romantic sunrise shoot for a couple, a family vacation portrait, or a dramatic pre-wedding editorial, the goal is to create images that feel authentic, elegant, and worthy of the monument they are set against.
              </p>
              <p>
                Equipment includes professional full-frame cameras, a selection of prime and zoom lenses, and portable lighting when regulations permit. All photos are professionally captured and delivered within 48 hours via a private online gallery.
              </p>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-20 bg-coal">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-ivory mb-12 text-center">The Journey</h2>
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-8">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-accent font-bold text-sm tracking-wider uppercase">{item.year}</span>
                  </div>
                  <div className="relative pl-8 border-l-2 border-line pb-4">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
                    <h3 className="font-display text-xl font-semibold text-ivory mb-2">{item.title}</h3>
                    <p className="text-muted">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 bg-night text-ivory text-center">
          <div className="absolute inset-0 bg-mughal-pattern opacity-60" />
          <div className="max-w-3xl mx-auto px-4 relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6 text-ivory">Ready to Capture Your Taj Mahal Moment?</h2>
            <p className="text-muted text-lg mb-10">Book an authorized photoshoot and experience the Taj Mahal through the lens of a certified professional.</p>
            <Link href="/book" className="inline-flex items-center bg-ivory text-night px-8 py-4 font-mono text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-accent transition-colors duration-300">
              Book Your Session
            </Link>
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
                { name: 'About', url: `${SITE.url}/about` },
              ]),
              webPageSchema({
                url: `${SITE.url}/about`,
                name: 'About the Photographer | Taj Mahal Photography',
                description: 'About the official government-licensed Taj Mahal photographer in Agra, India.',
                image: SITE.image,
                lastReviewed: LAST_UPDATED,
                speakableSelectors: ['h2', 'h3', '.prose p'],
              }),
              {
                ...personSchema(),
                mainEntityOfPage: { '@id': `${SITE.url}/about#webpage` },
              },
              {
                '@type': 'ProfilePage',
                '@id': `${SITE.url}/about#profile`,
                mainEntity: { '@id': `${SITE.url}/#photographer` },
                speakable: speakableSpec(['h2', 'h3']),
              },
            ]),
          ),
        }}
      />
    </div>
  );
}
