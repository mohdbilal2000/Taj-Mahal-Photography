'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Users, Camera, ShieldCheck, MapPin, Printer, ArrowUpRight } from 'lucide-react';

const packages = [
  {
    id: 'guided-photo-tour-small',
    name: 'Guided Tour + Photo · Small Group',
    tagline: '1–5 Guests · Taj Mahal + Agra Fort',
    price: '$50',
    capacity: 'Up to 5 guests',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000&auto=format&fit=crop',
    description:
      'A guided walk through the Taj Mahal and Agra Fort with a licensed local guide and a professional photographer. Includes 20 natural digital photos and 20 premium printed photo copies. Best photo locations and pose assistance throughout.',
    features: [
      'Licensed local guide for Taj Mahal & Agra Fort',
      'Professional photographer alongside',
      '20 natural high-resolution digital photos',
      '20 premium printed photo copies',
      'Best photo locations & pose assistance',
      'Personalised pacing for couples and small families',
    ],
    bestFor: 'Couples, solo travellers, small families (1–5 guests)',
  },
  {
    id: 'guided-photo-tour-large',
    name: 'Guided Tour + Photo · Large Group',
    tagline: '6–12 Guests · Taj Mahal + Agra Fort',
    price: '$80',
    capacity: 'Up to 12 guests',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop',
    description:
      'The same guided tour and photography combo scaled up for larger groups of 6 to 12 guests. Group portraits plus individual portraits at the Taj Mahal and Agra Fort, with 20 digital photos and 20 printed copies delivered.',
    features: [
      'Licensed local guide for Taj Mahal & Agra Fort',
      'Professional photographer alongside',
      '20 natural high-resolution digital photos',
      '20 premium printed photo copies',
      'Group portraits AND individual portraits',
      'Best photo locations & pose assistance',
    ],
    bestFor: 'Families and groups travelling together (6–12 guests)',
    popular: true,
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function GuidedPhotoTours() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section className="py-24 sm:py-32 bg-coal" id="guided-photo-tours">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12" ref={sectionRef}>
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            className="kicker flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-accent" />
            Guide + Photographer Combo
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
            className="display-tight text-ivory text-4xl md:text-5xl lg:text-6xl font-medium"
          >
            A guide and a photographer,{' '}
            <span className="italic font-light text-accent">one price</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="mt-6 text-muted leading-relaxed"
          >
            Both packages cover the Taj Mahal and Agra Fort, deliver 20 natural
            digital photos plus 20 premium printed copies, and include pose
            assistance at every iconic spot.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            const meta = [
              { icon: MapPin, label: 'Monuments', value: 'Taj Mahal + Agra Fort' },
              { icon: Camera, label: 'Photos', value: '20 digital + 20 printed' },
              { icon: ShieldCheck, label: 'Guide', value: 'Licensed local guide' },
              { icon: Printer, label: 'Prints', value: 'Premium copies on the day' },
            ];
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.12 * index, ease: EASE }}
                className={`group flex flex-col overflow-hidden relative transition-colors duration-300 ${
                  pkg.popular
                    ? 'border border-accent bg-surface'
                    : 'border border-line bg-night hover:border-line-strong'
                }`}
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />
                  {pkg.popular && (
                    <span className="absolute top-3 right-3 bg-accent text-night font-mono text-[9px] uppercase tracking-[0.18em] font-semibold px-2.5 py-1">
                      Best for Groups
                    </span>
                  )}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-1 text-accent font-mono text-[10px] uppercase tracking-[0.18em]">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{pkg.tagline}</span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl text-ivory">
                      {pkg.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  <div className="flex items-end gap-2 mb-6 pb-6 border-b border-line">
                    <span className="font-display text-4xl text-ivory">{pkg.price}</span>
                    <span className="font-mono text-[10px] uppercase tracking-wide text-faint mb-1.5">
                      / total · {pkg.capacity}
                    </span>
                  </div>

                  <p className="text-muted text-sm leading-relaxed mb-6">{pkg.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-6 text-xs">
                    {meta.map((m) => {
                      const MIcon = m.icon;
                      return (
                        <div key={m.label} className="flex items-start gap-2 bg-coal border border-line p-3">
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
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted">
                        <Check className="w-4 h-4 text-accent mr-2.5 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6 border-t border-line">
                    <p className="text-xs text-faint mb-4">
                      <strong className="text-muted font-medium">Best for:</strong> {pkg.bestFor}
                    </p>
                    <Link
                      href={`/book?plan=${pkg.id}`}
                      className={`group/btn flex w-full items-center justify-center gap-2 py-3 px-4 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-300 ${
                        pkg.popular
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

        <p className="text-xs text-faint mt-10 max-w-2xl">
          * Taj Mahal and Agra Fort monument entry tickets are not included and must be
          purchased separately. The Taj Mahal is closed every Friday.
        </p>
      </div>
    </section>
  );
}
