import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ShieldCheck, Award, MapPin, Users, Camera, Clock } from 'lucide-react';
import { breadcrumbSchema, personSchema, jsonLd, SITE } from '@/lib/seo';

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
  { label: 'Five-Star Reviews', value: '500+' },
];

const timeline = [
  { year: 'Certification', title: 'Government License Obtained', description: 'Passed the rigorous Ministry of Tourism examinations covering monument history, architecture, cultural heritage, and photography regulations.' },
  { year: 'Specialization', title: 'Taj Mahal Photography Focus', description: 'Dedicated practice to master every angle, lighting condition, and seasonal variation at the Taj Mahal and surrounding Mughal monuments.' },
  { year: 'Recognition', title: 'Trusted by Global Visitors', description: 'Built a reputation serving visitors from over 80 countries, with consistent five-star reviews praising professionalism and artistic vision.' },
  { year: 'Today', title: 'Premium Photography Service', description: 'Operating as one of the most sought-after licensed photographers in Agra, offering curated packages from sunrise shoots to full-day heritage tours.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative bg-ink-900 text-white py-24">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="text-gold-400 text-sm font-bold tracking-widest uppercase mb-4 block">About the Photographer</span>
            <h1 className="font-serif text-4xl md:text-6xl font-semibold mb-6">Official Government Licensed Taj Mahal Photographer</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Certified by the Ministry of Tourism, Government of India. Authorized to conduct professional photography inside the Taj Mahal premises with full legal clearance.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white border-b border-marble-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-4xl md:text-5xl font-semibold text-ink-900">{stat.value}</p>
                  <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section - AEO optimized with clear, direct answers */}
        <section className="py-20 bg-marble-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900 mb-8">What Does a Licensed Taj Mahal Photographer Do?</h2>
            <div className="prose prose-lg prose-slate max-w-none text-gray-600 space-y-6">
              <p>
                A government-licensed Taj Mahal photographer is a professional who has been officially certified by the Ministry of Tourism, Government of India, after passing comprehensive examinations. This certification grants legal authorization to conduct professional photography sessions inside the Taj Mahal complex with professional equipment.
              </p>
              <p>
                The license requires demonstrating in-depth knowledge of the monument&apos;s history, Mughal architecture, conservation guidelines, visitor management, and photography regulations enforced by the Archaeological Survey of India (ASI).
              </p>

              <h3 className="font-serif text-2xl text-ink-900 mt-12 mb-4">Why Does the License Matter for Visitors?</h3>
              <p>
                Without a licensed photographer, visitors face a common problem: security personnel at the Taj Mahal gates will confiscate or deny entry to anyone carrying professional photography equipment such as tripods, extra lenses, or large camera bags. This means hiring an unlicensed photographer can result in a ruined experience.
              </p>
              <p>
                With a licensed photographer, visitors enjoy uninterrupted access, expert knowledge of the best angles and timing, and the assurance that every aspect of their photoshoot complies with monument regulations.
              </p>

              <h3 className="font-serif text-2xl text-ink-900 mt-12 mb-4">Our Approach to Photography</h3>
              <p>
                Every session is tailored to the visitor&apos;s needs. Whether it is a romantic sunrise shoot for a couple, a family vacation portrait, or a dramatic pre-wedding editorial, the goal is to create images that feel authentic, elegant, and worthy of the monument they are set against.
              </p>
              <p>
                Equipment includes professional full-frame cameras, a selection of prime and zoom lenses, and portable lighting when regulations permit. All photos are professionally edited with color grading, exposure correction, and retouching before delivery within 48 hours via a private online gallery.
              </p>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900 mb-12 text-center">The Journey</h2>
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-8">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-gold-500 font-bold text-sm tracking-wider uppercase">{item.year}</span>
                  </div>
                  <div className="relative pl-8 border-l-2 border-marble-200 pb-4">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gold-500" />
                    <h3 className="font-serif text-xl font-semibold text-ink-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-ink-900 text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">Ready to Capture Your Taj Mahal Moment?</h2>
            <p className="text-gray-300 text-lg mb-10">Book an authorized photoshoot and experience the Taj Mahal through the lens of a certified professional.</p>
            <Link href="/book" className="inline-flex items-center px-8 py-4 bg-white text-ink-900 font-medium text-sm tracking-wide uppercase hover:bg-marble-100 transition-colors rounded-sm">
              Book Your Session
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsApp />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema([
          { name: 'Home', url: SITE.url },
          { name: 'About', url: `${SITE.url}/about` },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(personSchema()) }}
      />
    </div>
  );
}
