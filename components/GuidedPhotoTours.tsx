'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Users, Camera, ShieldCheck, MapPin, Printer } from 'lucide-react';

const packages = [
  {
    id: 'guided-photo-tour-small',
    name: 'Guided Tour + Photo · Small Group',
    tagline: '1–5 Guests · Taj Mahal + Agra Fort',
    price: '$79',
    capacity: 'Up to 5 guests',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000&auto=format&fit=crop',
    description:
      'A guided walk through the Taj Mahal and Agra Fort with a licensed local guide and a professional photographer. Includes 30 natural digital photos and 30 premium printed photo copies. Best photo locations and pose assistance throughout.',
    features: [
      'Licensed local guide for Taj Mahal & Agra Fort',
      'Professional photographer alongside',
      '30 natural high-resolution digital photos',
      '30 premium printed photo copies',
      'Best photo locations & pose assistance',
      'Personalised pacing for couples and small families',
    ],
    bestFor: 'Couples, solo travellers, small families (1–5 guests)',
  },
  {
    id: 'guided-photo-tour-large',
    name: 'Guided Tour + Photo · Large Group',
    tagline: '6–12 Guests · Taj Mahal + Agra Fort',
    price: '$99',
    capacity: 'Up to 12 guests',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop',
    description:
      'The same guided tour and photography combo scaled up for larger groups of 6 to 12 guests. Group portraits plus individual portraits at the Taj Mahal and Agra Fort, with 30 digital photos and 30 printed copies delivered.',
    features: [
      'Licensed local guide for Taj Mahal & Agra Fort',
      'Professional photographer alongside',
      '30 natural high-resolution digital photos',
      '30 premium printed photo copies',
      'Group portraits AND individual portraits',
      'Best photo locations & pose assistance',
    ],
    bestFor: 'Families and groups travelling together (6–12 guests)',
    popular: true,
  },
];

export default function GuidedPhotoTours() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section className="py-24 bg-marble-50" id="guided-photo-tours">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-gold-600 text-sm font-bold tracking-widest uppercase mb-2 block"
          >
            Guided Tour + Photography
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-semibold text-ink-900 mb-6"
          >
            Guide + Photographer Combo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Pair a licensed local guide with a professional photographer for a single, simple
            price. Both packages cover the Taj Mahal and Agra Fort, deliver 30 natural digital
            photos plus 30 premium printed copies, and include pose assistance at every iconic
            spot.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.15 * index,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                whileHover={{ y: -8 }}
                className={`flex flex-col bg-white rounded-sm overflow-hidden transition-shadow duration-300 hover:shadow-2xl relative ${
                  pkg.popular
                    ? 'border-2 border-gold-500 ring-2 ring-gold-500/20 shadow-xl'
                    : 'border border-marble-200 shadow-md'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gold-500 text-ink-900 text-xs font-bold uppercase tracking-wider text-center py-1.5 z-10">
                    Best for Groups
                  </div>
                )}

                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 mb-1 text-gold-400 text-xs font-bold uppercase tracking-widest">
                      <Icon className="w-4 h-4" />
                      <span>{pkg.tagline}</span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl font-semibold">
                      {pkg.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-4xl font-light text-ink-900">{pkg.price}</span>
                    <span className="text-sm text-gray-500 mb-1.5">/ total · {pkg.capacity}</span>
                  </div>

                  <p className="text-gray-600 text-sm mt-4 mb-6">{pkg.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-6 text-xs">
                    <div className="flex items-start gap-2 bg-marble-50 border border-marble-200 p-3 rounded">
                      <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-ink-900 uppercase tracking-wider mb-0.5">Monuments</p>
                        <p className="text-gray-600">Taj Mahal + Agra Fort</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 bg-marble-50 border border-marble-200 p-3 rounded">
                      <Camera className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-ink-900 uppercase tracking-wider mb-0.5">Photos</p>
                        <p className="text-gray-600">30 digital + 30 printed</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 bg-marble-50 border border-marble-200 p-3 rounded">
                      <ShieldCheck className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-ink-900 uppercase tracking-wider mb-0.5">Guide</p>
                        <p className="text-gray-600">Licensed local guide</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 bg-marble-50 border border-marble-200 p-3 rounded">
                      <Printer className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-ink-900 uppercase tracking-wider mb-0.5">Prints</p>
                        <p className="text-gray-600">Premium copies on the day</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6 flex-grow">
                    <h4 className="text-xs font-bold text-ink-900 uppercase tracking-wider mb-3">
                      What&apos;s Included
                    </h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <Check className="w-4 h-4 text-gold-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-6 border-t border-marble-200">
                    <p className="text-xs text-gray-500 mb-4">
                      <strong>Best for:</strong> {pkg.bestFor}
                    </p>
                    <Link
                      href={`/book?plan=${pkg.id}`}
                      className={`block w-full text-center py-3 px-4 rounded-sm text-sm font-medium transition-colors ${
                        pkg.popular
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

        <p className="text-center text-xs text-gray-500 mt-10 max-w-2xl mx-auto">
          * Taj Mahal and Agra Fort monument entry tickets are not included and must be
          purchased separately. The Taj Mahal is closed every Friday.
        </p>
      </div>
    </section>
  );
}
