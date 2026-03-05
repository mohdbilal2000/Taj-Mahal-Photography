import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const servicesData: Record<string, any> = {
  'couple': {
    title: 'Couple & Pre-Wedding Photography',
    description: 'Editorial-style romantic portraits celebrating your love story against the ultimate monument of love.',
    image: 'https://images.unsplash.com/photo-1585506942812-e72b29cef752?q=80&w=1920&auto=format&fit=crop',
    features: ['3-4 Hour Session', '100+ Edited High-Res Photos', 'Outfit change allowed (outside gates)', 'Posing direction']
  },
  'pre-wedding': {
    title: 'Pre-Wedding Photography',
    description: 'Editorial-style romantic portraits celebrating your love story against the ultimate monument of love.',
    image: 'https://images.unsplash.com/photo-1585506942812-e72b29cef752?q=80&w=1920&auto=format&fit=crop',
    features: ['3-4 Hour Session', '100+ Edited High-Res Photos', 'Outfit change allowed (outside gates)', 'Posing direction']
  },
  'family': {
    title: 'Family Vacation Photography',
    description: 'Preserve your family memories with beautiful group portraits and candid shots of you exploring the monument together.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1920&auto=format&fit=crop',
    features: ['1.5 Hour Session', '40+ Edited High-Res Photos', 'Group and individual portraits', 'Child-friendly pacing']
  },
  'proposal': {
    title: 'Surprise Proposal Shoot',
    description: 'Capture the exact moment she says yes with the Taj Mahal as your backdrop. We help plan the perfect moment discreetly.',
    image: 'https://images.unsplash.com/photo-1592635196238-f14d75121615?q=80&w=1920&auto=format&fit=crop',
    features: ['1.5 Hour Session', 'Secret coordination', '50+ Edited High-Res Photos', 'Same-day sneak peek']
  }
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col pt-28">
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
                <p>{service.description}</p>
                <h3 className="font-serif text-2xl text-ink-900 mt-10 mb-4">What&apos;s Included</h3>
                <ul className="space-y-2">
                  {service.features.map((feature: string, i: number) => (
                    <li key={i}><strong>{feature}</strong></li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="bg-marble-50 p-8 border border-marble-200 rounded-sm sticky top-32">
                <h3 className="font-serif text-2xl font-semibold text-ink-900 mb-2">Book This Session</h3>
                <a href="/book" className="block w-full text-center px-6 py-3 bg-ink-900 text-white font-medium rounded-sm hover:bg-ink-800 transition-colors mt-6">
                  Check Availability
                </a>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
