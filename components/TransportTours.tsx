'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Link from 'next/link';
import {
  Car,
  Camera,
  Route,
  Check,
  ArrowUpRight,
  MapPin,
  Clock,
  Wallet,
} from 'lucide-react';

/**
 * Transport & custom-tour offerings for foreign visitors who want more than a
 * single Agra photoshoot: chauffeured Delhi⇄Agra cars, a fully-custom Delhi
 * photography tour, and a combined multi-day itinerary on one private car.
 *
 * Pricing note: the car headline is shown in USD (the audience is foreign
 * travelers) with the rupee anchor in parentheses. ₹3,500/day ≈ $42 at the
 * rate checked on 2026-06-24; we round up so we never sit under the live FX.
 */
const offerings = [
  {
    id: 'agra-delhi-car',
    icon: Car,
    tagline: 'Private Chauffeured Car',
    name: 'Agra ⇄ Delhi Transport',
    price: 'From $42',
    unit: '/ day · ≈ ₹3,500',
    description:
      'A comfortable, air-conditioned chauffeur-driven car for Delhi–Agra transfers, airport pickups, or full-day disposal around Agra. English-friendly drivers who know every monument gate and the best light windows.',
    meta: [
      { icon: Wallet, label: 'From', value: '$42 / day (₹3,500)' },
      { icon: MapPin, label: 'Routes', value: 'Delhi · Agra · NCR' },
      { icon: Clock, label: 'Basis', value: 'Full-day or one-way' },
    ],
    features: [
      'AC sedan, or SUV / Innova on request',
      'Experienced English-speaking chauffeur',
      'Delhi & NCR airport / hotel pickup',
      'Fuel, tolls and parking included',
      'Full-day disposal or point-to-point',
      'Child seats available on request',
    ],
    bestFor: 'Independent travelers & families who want flexible transport',
  },
  {
    id: 'delhi-photo-tour',
    icon: Camera,
    tagline: 'Private Photographer · Delhi',
    name: 'Custom Delhi Photo Tour',
    price: 'Custom',
    unit: 'tailored quote',
    description:
      'A fully-private photography tour of Old & New Delhi with your own photographer — Qutub Minar, Humayun’s Tomb, India Gate, Jama Masjid, the Lotus Temple and the lanes of Chandni Chowk. Built entirely around your shot list and schedule.',
    meta: [
      { icon: Camera, label: 'Crew', value: 'Private photographer' },
      { icon: MapPin, label: 'Sites', value: 'Old & New Delhi' },
      { icon: Clock, label: 'Length', value: 'Half or full day' },
    ],
    features: [
      'Private photographer for the full session',
      'Custom itinerary built on your shot list',
      'Iconic Delhi monuments & heritage lanes',
      'Edited high-resolution online gallery',
      'Transport between locations arranged',
      'Flexible half-day or full-day pacing',
    ],
    bestFor: 'Solo travelers, couples & content creators based in Delhi',
    popular: true,
  },
  {
    id: 'delhi-agra-custom',
    icon: Route,
    tagline: 'Multi-Day · One Team',
    name: 'Delhi + Agra Custom Trip',
    price: 'Tailored',
    unit: 'car + tours',
    description:
      'Combine a Delhi photography tour with an Agra Taj Mahal sunrise shoot on a single private car with one team. We plan the route, the permits and the timing end-to-end so you only have to show up.',
    meta: [
      { icon: Route, label: 'Plan', value: 'Delhi → Agra → Delhi' },
      { icon: Car, label: 'Vehicle', value: 'One private car' },
      { icon: Clock, label: 'Duration', value: '2–3 days' },
    ],
    features: [
      'Delhi photo tour + Agra Taj Mahal shoot',
      'One private car throughout the trip',
      'Government-licensed photographer in Agra',
      'All permits, tickets & timing handled',
      'Overnight-in-Agra option available',
      'A single point of contact end-to-end',
    ],
    bestFor: 'Visitors with 2–3 days who want Delhi and Agra in one trip',
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function TransportTours() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section className="py-24 sm:py-32 bg-night" id="transport-tours">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12" ref={sectionRef}>
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            className="kicker flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-accent" />
            Transport & Custom Tours · Delhi + Agra
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
            className="display-tight text-ivory text-4xl md:text-5xl lg:text-6xl font-medium"
          >
            Private cars &{' '}
            <span className="italic font-light text-accent">custom Delhi tours</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="mt-6 text-muted leading-relaxed"
          >
            Beyond the shoot itself: chauffeur-driven cars between Delhi and
            Agra from <strong className="text-ivory font-medium">$42 a day</strong>,
            fully-custom Delhi photography tours, and combined multi-day trips
            handled by one team.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {offerings.map((o, index) => {
            const Icon = o.icon;
            return (
              <motion.div
                key={o.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index, ease: EASE }}
                className={`group flex flex-col relative transition-colors duration-300 ${
                  o.popular
                    ? 'border border-accent bg-surface'
                    : 'border border-line bg-coal hover:border-line-strong'
                }`}
              >
                {/* Icon / pattern band — distinct from the photo-led package grids */}
                <div className="relative h-32 w-full overflow-hidden bg-mughal-pattern border-b border-line flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-coal via-transparent to-transparent" />
                  <Icon
                    className="relative w-10 h-10 text-accent transition-transform duration-500 group-hover:scale-110"
                    strokeWidth={1.25}
                  />
                  {o.popular && (
                    <span className="absolute top-3 right-3 bg-accent text-night font-mono text-[9px] uppercase tracking-[0.18em] font-semibold px-2.5 py-1">
                      Most Requested
                    </span>
                  )}
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent mb-1.5">
                    {o.tagline}
                  </p>
                  <h3 className="font-display text-2xl text-ivory leading-tight mb-4">
                    {o.name}
                  </h3>

                  <div className="flex items-end gap-2 mb-5 pb-5 border-b border-line">
                    <span className="font-display text-3xl text-ivory">{o.price}</span>
                    <span className="font-mono text-[10px] uppercase tracking-wide text-faint mb-1.5">
                      {o.unit}
                    </span>
                  </div>

                  <p className="text-sm text-muted leading-relaxed mb-5">
                    {o.description}
                  </p>

                  <div className="grid grid-cols-1 gap-2 mb-5 text-xs">
                    {o.meta.map((m) => {
                      const MIcon = m.icon;
                      return (
                        <div
                          key={m.label}
                          className="flex items-center gap-2.5 bg-night border border-line px-3 py-2"
                        >
                          <MIcon className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="font-mono text-[9px] text-faint uppercase tracking-[0.16em]">
                            {m.label}
                          </span>
                          <span className="text-muted ml-auto">{m.value}</span>
                        </div>
                      );
                    })}
                  </div>

                  <ul className="space-y-2.5 mb-6 flex-grow">
                    {o.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted">
                        <Check className="w-4 h-4 text-accent mr-2.5 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-5 border-t border-line">
                    <p className="text-xs text-faint mb-4">
                      <strong className="text-muted font-medium">Best for:</strong>{' '}
                      {o.bestFor}
                    </p>
                    <Link
                      href={`/book?plan=${o.id}`}
                      className={`group/btn flex w-full items-center justify-center gap-2 py-3 px-4 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-300 ${
                        o.popular
                          ? 'bg-accent text-night hover:bg-accent-bright font-semibold'
                          : 'border border-line-strong text-ivory hover:border-accent hover:text-accent'
                      }`}
                    >
                      Request a quote
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
          className="text-xs text-faint mt-10 max-w-3xl leading-relaxed"
        >
          Car hire starts at ₹3,500/day (about $42) for an AC sedan; SUV / Toyota
          Innova and Force Urbania luxury coaches are quoted on request. Final
          fare depends on distance, vehicle and duration. Foreign-currency
          figures use the exchange rate at time of writing and are confirmed in
          writing before you pay.
        </motion.p>
      </div>
    </section>
  );
}
