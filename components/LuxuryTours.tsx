'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Car, Bus, MapPin, ShieldCheck, Ticket, Camera, Sunrise } from 'lucide-react';

const tours = [
  {
    id: 'sunrise-luxury-innova',
    name: 'Taj Mahal Sunrise Luxury Tour',
    tagline: 'Private Innova · Couples & Families',
    price: 'From $650',
    duration: 'Same Day · 14–16 Hours',
    route: 'Delhi / NCR → Agra → Delhi / NCR',
    vehicle: 'Private Toyota Innova',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1585506942812-e72b29cef752?q=80&w=1000&auto=format&fit=crop',
    description:
      'A premium same-day sunrise tour from Delhi/NCR to Agra in a private Toyota Innova. Includes a government-licensed guide, a licensed photographer, monument tickets, a private golf cart inside the Taj Mahal complex, and a security escort to skip the line.',
    aiSnippet:
      'A same-day private sunrise tour from Delhi/NCR to Agra covering the Taj Mahal and Agra Fort with a Toyota Innova, a Ministry of Tourism licensed guide and photographer, monument tickets, a private golf cart, and skip-the-line security assistance — priced from $650 USD for couples and families.',
    bestFor: 'Couples, Families (up to 6 guests)',
    monuments: ['Taj Mahal', 'Agra Fort'],
    features: [
      'Round-trip private Toyota Innova from Delhi/NCR',
      'Ministry of Tourism licensed guide',
      'Ministry of Tourism licensed photographer',
      'Private golf cart inside Taj Mahal complex',
      'Skip-the-line entry with security escort',
      'Taj Mahal & Agra Fort monument tickets included',
      'Sunrise arrival at Taj Mahal east gate',
    ],
  },
  {
    id: 'sunrise-luxury-urbania',
    name: 'Taj Mahal Sunrise Luxury Urbania',
    tagline: 'Force Urbania · Families & Groups',
    price: 'From $899',
    duration: 'Same Day · 14–16 Hours',
    route: 'Delhi / NCR → Agra → Delhi / NCR',
    vehicle: 'Private Force Urbania (Luxury Coach)',
    icon: Bus,
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop',
    description:
      'The same luxury sunrise experience scaled up for larger families and groups. Travel from Delhi/NCR to Agra in a private Force Urbania coach with reclining seats, government-licensed guide and photographer, monument tickets, a private golf cart, and skip-the-line security assistance.',
    aiSnippet:
      'A same-day private sunrise tour from Delhi/NCR to Agra in a Force Urbania luxury coach for larger families and groups. Covers the Taj Mahal and Agra Fort with a Ministry of Tourism licensed guide and photographer, monument tickets, a private golf cart, and a security escort to skip the line — priced from $899 USD.',
    bestFor: 'Families & Groups (up to 13 guests)',
    monuments: ['Taj Mahal', 'Agra Fort'],
    features: [
      'Round-trip private Force Urbania luxury coach',
      'Ministry of Tourism licensed guide',
      'Ministry of Tourism licensed photographer',
      'Private golf cart inside Taj Mahal complex',
      'Skip-the-line entry with security escort',
      'Taj Mahal & Agra Fort monument tickets included',
      'Reclining seats, A/C and Wi-Fi onboard',
    ],
    popular: true,
  },
];

export default function LuxuryTours() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section className="py-24 bg-ink-900 text-white" id="luxury-tours">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-gold-400 text-sm font-bold tracking-widest uppercase mb-2 block"
          >
            Same-Day Luxury Tours from Delhi
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-semibold mb-6"
          >
            Sunrise Luxury Tours: Delhi to Agra
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 text-lg"
          >
            Wake up in Delhi, watch the sun rise over the Taj Mahal, and return the same evening.
            Every tour is fully managed by our team: private vehicle, government-licensed guide and
            photographer, monument tickets, golf cart inside the complex, and a security escort to
            skip the line.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tours.map((tour, index) => {
            const Icon = tour.icon;
            return (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.15 * index,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                whileHover={{ y: -8 }}
                className={`flex flex-col bg-white text-ink-900 rounded-sm overflow-hidden transition-shadow duration-300 hover:shadow-2xl relative ${
                  tour.popular
                    ? 'border-2 border-gold-500 ring-2 ring-gold-500/20 shadow-xl'
                    : 'border border-marble-200 shadow-md'
                }`}
              >
                {tour.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gold-500 text-ink-900 text-xs font-bold uppercase tracking-wider text-center py-1.5 z-10">
                    Best for Groups
                  </div>
                )}

                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 mb-1 text-gold-400 text-xs font-bold uppercase tracking-widest">
                      <Icon className="w-4 h-4" />
                      <span>{tour.tagline}</span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl font-semibold">
                      {tour.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-4xl font-light">
                      {tour.price}
                    </span>
                    <span className="text-sm text-gray-500 mb-1.5">/ tour · starting price, confirmed on WhatsApp</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-5">{tour.duration}</p>

                  <p className="text-gray-600 text-sm mb-6">
                    {tour.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6 text-xs">
                    <div className="flex items-start gap-2 bg-marble-50 border border-marble-200 p-3 rounded">
                      <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-ink-900 uppercase tracking-wider mb-0.5">Route</p>
                        <p className="text-gray-600">{tour.route}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 bg-marble-50 border border-marble-200 p-3 rounded">
                      <Icon className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-ink-900 uppercase tracking-wider mb-0.5">Vehicle</p>
                        <p className="text-gray-600">{tour.vehicle}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 bg-marble-50 border border-marble-200 p-3 rounded">
                      <Sunrise className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-ink-900 uppercase tracking-wider mb-0.5">Monuments</p>
                        <p className="text-gray-600">{tour.monuments.join(' + ')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 bg-marble-50 border border-marble-200 p-3 rounded">
                      <Ticket className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-ink-900 uppercase tracking-wider mb-0.5">Tickets</p>
                        <p className="text-gray-600">Included</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6 flex-grow">
                    <h4 className="text-xs font-bold text-ink-900 uppercase tracking-wider mb-3">
                      What&apos;s Included
                    </h4>
                    <ul className="space-y-2">
                      {tour.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <Check className="w-4 h-4 text-gold-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-6 border-t border-marble-200">
                    <div className="flex flex-wrap items-center gap-3 mb-4 text-xs text-gray-500">
                      <span className="inline-flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-gold-500" />
                        Govt. licensed guide
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Camera className="w-3.5 h-3.5 text-gold-500" />
                        Govt. licensed photographer
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-4">
                      <strong>Best for:</strong> {tour.bestFor}
                    </p>
                    <Link
                      href={`/book?plan=${tour.id}`}
                      className={`block w-full text-center py-3 px-4 rounded-sm text-sm font-medium transition-colors ${
                        tour.popular
                          ? 'bg-gold-500 text-ink-900 hover:bg-gold-400'
                          : 'bg-ink-900 text-white hover:bg-ink-800'
                      }`}
                    >
                      Check Availability
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-xs text-gray-400 mt-10 max-w-2xl mx-auto"
        >
          Both tours are operated by our team with a guide and photographer licensed by the
          Ministry of Tourism, Government of India. Pickup and drop available across Delhi, Noida,
          Gurugram, Ghaziabad and Faridabad.
        </motion.p>
      </div>
    </section>
  );
}
