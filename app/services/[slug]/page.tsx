import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { breadcrumbSchema, serviceSchema, jsonLd, SITE } from '@/lib/seo';

const servicesData: Record<string, { title: string; description: string; longDescription: string; image: string; features: string[]; price: number; duration: string; bestFor: string }> = {
  couple: {
    title: 'Couple & Pre-Wedding Photography',
    description: 'Editorial-style romantic portraits celebrating your love story against the ultimate monument of love.',
    longDescription: 'The Taj Mahal is the greatest monument to love ever built, making it the perfect backdrop for couple and pre-wedding photography. Our editorial-style sessions combine natural posing with creative direction to capture authentic emotion. We guide couples through the best angles, manage crowd movement for clean backgrounds, and utilize the changing light to create a diverse, magazine-worthy gallery.',
    image: 'https://images.unsplash.com/photo-1585506942812-e72b29cef752?q=80&w=1920&auto=format&fit=crop',
    features: ['3-4 Hour Session', '100 Edited High-Res Photos', 'Outfit Change Guidance (Outside Gates)', 'Advanced Retouching & Color Grading', 'Posing Direction & Creative Styling'],
    price: 199,
    duration: '3-4 Hours',
    bestFor: 'Engagements, Pre-Weddings, Anniversaries',
  },
  'pre-wedding': {
    title: 'Pre-Wedding Photography',
    description: 'Editorial-style romantic portraits celebrating your upcoming wedding at the monument of love.',
    longDescription: 'A pre-wedding photoshoot at the Taj Mahal creates timeless images for your wedding invitations, save-the-dates, and personal collection. We specialize in creating diverse looks within a single session, guiding you through formal portraits, candid interactions, and creative compositions that tell your unique story. Our knowledge of the monument ensures we capture every iconic angle while avoiding crowds.',
    image: 'https://images.unsplash.com/photo-1585506942812-e72b29cef752?q=80&w=1920&auto=format&fit=crop',
    features: ['3-4 Hour Session', '100 Edited High-Res Photos', 'Outfit Change Guidance (Outside Gates)', 'Advanced Retouching & Color Grading', 'Posing Direction & Creative Styling'],
    price: 199,
    duration: '3-4 Hours',
    bestFor: 'Couples planning their wedding',
  },
  family: {
    title: 'Family Vacation Photography',
    description: 'Preserve your family memories with beautiful group portraits and candid shots at the Taj Mahal.',
    longDescription: 'Family trips to the Taj Mahal deserve more than smartphone snapshots. Our family photography sessions are designed with a relaxed, child-friendly pace that keeps everyone comfortable while we capture beautiful group portraits and spontaneous moments. We know exactly where to position groups for the best compositions and how to keep young children engaged for natural expressions.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1920&auto=format&fit=crop',
    features: ['1.5 Hour Session', '40+ Edited High-Res Photos', 'Group and Individual Portraits', 'Child-Friendly Pacing', 'Private Online Gallery (48hr delivery)'],
    price: 200,
    duration: '1.5 Hours',
    bestFor: 'Families with children, Multi-generational groups',
  },
  proposal: {
    title: 'Surprise Proposal Photography',
    description: 'Capture the exact moment she says yes with the Taj Mahal as your backdrop.',
    longDescription: 'Planning a proposal at the Taj Mahal? We help coordinate every detail discreetly. We position ourselves as casual tourists while you lead your partner to the perfect spot. The moment you get down on one knee, we capture every expression, tear, and embrace in high resolution. After the proposal, we transition into a celebratory couple session to capture the joy of your new engagement.',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1920&auto=format&fit=crop',
    features: ['1.5 Hour Session', 'Secret Coordination & Planning', '50+ Edited High-Res Photos', 'Same-Day Sneak Peek (3-5 photos)', 'Post-Proposal Couple Session'],
    price: 350,
    duration: '1.5 Hours',
    bestFor: 'Proposals, Surprise engagements',
  },
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return {};
  return {
    title: `${service.title} | From $${service.price}`,
    description: service.description,
    alternates: { canonical: `${SITE.url}/services/${slug}` },
    openGraph: {
      title: `${service.title} | Taj Mahal Photography`,
      description: service.description,
      url: `${SITE.url}/services/${slug}`,
      images: [{ url: service.image, width: 1200, height: 630, alt: service.title }],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow bg-white">
        <div className="relative h-[60vh] min-h-[500px]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="max-w-3xl">
              <span className="text-gold-400 font-bold tracking-widest uppercase mb-4 block">Premium Service</span>
              <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white mb-6">{service.title}</h1>
              <p className="text-xl text-white/90">{service.description}</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl font-semibold text-ink-900 mb-6">About This Session</h2>
              <div className="prose prose-lg prose-slate max-w-none text-gray-600">
                <p>{service.longDescription}</p>
                <h3 className="font-serif text-2xl text-ink-900 mt-10 mb-4">What&apos;s Included</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i}><strong>{feature}</strong></li>
                  ))}
                </ul>
                <p className="mt-6"><strong>Best For:</strong> {service.bestFor}</p>
              </div>
            </div>
            <div>
              <div className="bg-marble-50 p-8 border border-marble-200 rounded-sm sticky top-32">
                <h3 className="font-serif text-2xl font-semibold text-ink-900 mb-2">Package Details</h3>
                <div className="text-3xl font-light text-ink-900 mb-1">${service.price} <span className="text-sm text-gray-500">USD</span></div>
                <p className="text-sm text-gray-500 mb-6">Duration: {service.duration}</p>
                <ul className="space-y-3 mb-8 text-sm text-gray-600">
                  <li className="flex items-center"><span className="text-gold-500 mr-3">✓</span> Official Photography Permit</li>
                  <li className="flex items-center"><span className="text-gold-500 mr-3">✓</span> Professional Equipment</li>
                  <li className="flex items-center"><span className="text-gold-500 mr-3">✓</span> 48-Hour Photo Delivery</li>
                </ul>
                <a href="/book" className="block w-full text-center px-6 py-3 bg-ink-900 text-white font-medium rounded-sm hover:bg-ink-800 transition-colors">
                  Check Availability
                </a>
                <p className="text-xs text-center text-gray-500 mt-4">* Monument entry tickets are not included.</p>
              </div>
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
          { name: 'Services', url: `${SITE.url}/services` },
          { name: service.title, url: `${SITE.url}/services/${slug}` },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(serviceSchema(
          service.title,
          service.description,
          service.price,
          service.duration,
          `${SITE.url}/services/${slug}`,
          service.image,
        )) }}
      />
    </div>
  );
}
