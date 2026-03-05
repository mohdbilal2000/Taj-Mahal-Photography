import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Sunrise Photoshoot',
    description: 'The most magical time to visit. Avoid the crowds and capture the Taj Mahal bathed in soft morning light.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop',
    link: '/services/sunrise'
  },
  {
    title: 'Couple & Pre-Wedding',
    description: 'Romantic, editorial-style portraits celebrating your love story against the ultimate monument of love.',
    image: 'https://images.unsplash.com/photo-1585506942812-e72b29cef752?q=80&w=800&auto=format&fit=crop',
    link: '/services/couple'
  },
  {
    title: 'Family Photography',
    description: 'Beautifully composed group portraits and candid moments of your family vacation.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop',
    link: '/services/family'
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-mughal-pattern bg-marble-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-gold-600 text-sm font-bold tracking-widest uppercase mb-2 block">Our Expertise</span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-ink-900">Premium Photography Services</h2>
          </div>
          <Link href="/services" className="hidden md:inline-flex items-center text-ink-900 font-medium hover:text-gold-600 transition-colors">
            View all services <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.link} className="group block">
              <div className="relative h-96 mb-6 overflow-hidden rounded-sm">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-ink-900 mb-2 group-hover:text-gold-600 transition-colors">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <span className="inline-flex items-center text-sm font-medium text-ink-900 group-hover:text-gold-600 transition-colors">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link href="/services" className="inline-flex items-center text-ink-900 font-medium hover:text-gold-600 transition-colors">
            View all services <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
