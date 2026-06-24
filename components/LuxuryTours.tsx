'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Car, Bus, MapPin, ShieldCheck, Ticket, Camera, Sunrise, ArrowUpRight } from 'lucide-react';

const tours = [
  {
    id: 'sunrise-luxury-innova',
    name: 'Taj Mahal Sunrise Luxury Tour',
    tagline: 'Private Innova · Couples & Families',
    price: '$650',
    duration: 'Same Day · 14–16 Hours',
    route: 'Delhi / NCR → Agra → Delhi / NCR',
    vehicle: 'Private Toyota Innova',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1585506942812-e72b29cef752?q=80&w=1000&auto=format&fit=crop',
    description:
      'A premium same-day sunrise tour from Delhi/NCR to Agra in a private Toyota Innova. Includes a government-licensed guide, a licensed photographer, monument tickets, a private golf cart inside the Taj Mahal complex, and a security escort to skip the line.',
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
    price: '$899',
    duration: 'Same Day · 14–16 Hours',
    route: 'Delhi / NCR → Agra → Delhi / NCR',
    vehicle: 'Private Force Urbania (Luxury Coach)',
    icon: Bus,
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop',
    description:
      'The same luxury sunrise experience scaled up for larger families and groups. Travel from Delhi/NCR to Agra in a private Force Urbania coach with reclining seats, government-licensed guide and photographer, monument tickets, a private golf cart, and skip-the-line security assistance.',
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

const EASE = [0.16, 1, 0.3, 1] as const;

export default function LuxuryTours() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section className="py-24 sm:py-32 bg-night" id="luxury-tours">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12" ref={sectionRef}>
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            className="kicker flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-accent" />
            Same-Day Luxury Tours from Delhi
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
            className="display-tight text-ivory text-4xl md:text-5xl lg:text-6xl font-medium"
          >
            Sunrise over the Taj,{' '}
            <span className="italic font-light text-accent">back by evening</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="mt-6 text-muted leading-relaxed"
          >
            Fully managed from Delhi: private vehicle, government-licensed guide
            and photographer, monument tickets, a golf cart inside the complex,
            and a security escort to skip the line.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {tours.map((tour, index) => {
            const Icon = tour.icon;
            const meta = [
              { icon: MapPin, label: 'Route', value: tour.route },
              { icon: Icon, label: 'Vehicle', value: tour.vehicle },
              { icon: Sunrise, label: 'Monuments', value: tour.monuments.join(' + ') },
              { icon: Ticket, label: 'Tickets', value: 'Included' },
            ];
            return (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.12 * index, ease: EASE }}
                className={`group flex flex-col overflow-hidden relative transition-colors duration-300 ${
                  tour.popular
                    ? 'border border-accent bg-surface'
                    : 'border border-line bg-coal hover:border-line-strong'
                }`}
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />
                  {tour.popular && (
                    <span className="absolute top-3 right-3 bg-accent text-night font-mono text-[9px] uppercase tracking-[0.18em] font-semibold px-2.5 py-1">
                      Best for Groups
                    </span>
                  )}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-1 text-accent font-mono text-[10px] uppercase tracking-[0.18em]">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tour.tagline}</span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl text-ivory">
                      {tour.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  <div className="flex items-end gap-2 mb-1">
                    <span className="font-display text-4xl text-ivory">{tour.price}</span>
                    <span className="font-mono text-[10px] uppercase tracking-wide text-faint mb-1.5">
                      / tour · all inclusive
                    </span>
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint mb-6 pb-6 border-b border-line">
                    {tour.duration}
                  </p>

                  <p className="text-muted text-sm leading-relaxed mb-6">{tour.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-6 text-xs">
                    {meta.map((m, i) => {
                      const MIcon = m.icon;
                      return (
                        <div key={i} className="flex items-start gap-2 bg-night border border-line p-3">
                          <MIcon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-mono text-[9px] text-faint uppercase tracking-[0.16em] mb-0.5">{m.label}</p>
                            <p className="text-muted">{m.value}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <ul className="space-y-2.5 mb-6 flex-grow">
                    {tour.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted">
                        <Check className="w-4 h-4 text-accent mr-2.5 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6 border-t border-line">
                    <div className="flex flex-wrap items-center gap-4 mb-4 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                      <span className="inline-flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                        Licensed guide
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Camera className="w-3.5 h-3.5 text-accent" />
                        Licensed photographer
                      </span>
                    </div>
                    <p className="text-xs text-faint mb-4">
                      <strong className="text-muted font-medium">Best for:</strong> {tour.bestFor}
                    </p>
                    <Link
                      href={`/book?plan=${tour.id}`}
                      className={`group/btn flex w-full items-center justify-center gap-2 py-3 px-4 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-300 ${
                        tour.popular
                          ? 'bg-accent text-night hover:bg-accent-bright font-semibold'
                          : 'border border-line-strong text-ivory hover:border-accent hover:text-accent'
                      }`}
                    >
                      Check Availability
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
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
          className="text-xs text-faint mt-10 max-w-2xl"
        >
          Both tours are operated by our team with a guide and photographer licensed by the
          Ministry of Tourism, Government of India. Pickup and drop available across Delhi, Noida,
          Gurugram, Ghaziabad and Faridabad.
        </motion.p>
      </div>
    </section>
  );
}
