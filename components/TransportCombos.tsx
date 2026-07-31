'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Car, Camera, ShieldCheck, MapPin, Clock } from 'lucide-react';

const packages = [
  {
    id: 'transport-photography',
    name: 'Transport + Photography',
    tagline: 'Private Car · Licensed Photographer',
    price: '$129',
    duration: 'Half Day (4–5 Hours)',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000&auto=format&fit=crop',
    description:
      'A private air-conditioned car with a professional chauffeur plus a government-licensed photographer for the day. Hotel or railway station pickup in Agra, the Taj Mahal and Agra Fort covered without taxis or haggling, and 60+ high-resolution photos delivered to a private gallery.',
    features: [
      'Private A/C car with chauffeur (hotel / railway station pickup in Agra)',
      'Government-licensed photographer throughout',
      '60+ natural high-resolution digital photos',
      'Taj Mahal + Agra Fort covered in one relaxed loop',
      'Best photo locations & pose assistance',
      'Private online gallery within 48 hours',
    ],
    highlight: { icon: Camera, label: 'Photos', value: '60+ digital, 48hr delivery' },
    bestFor: 'Visitors arriving by train or staying in Agra who want photos and transport handled together',
    popular: true,
  },
  {
    id: 'transport-guide',
    name: 'Transport + Guide',
    tagline: 'Private Car · Licensed Guide · No Photography',
    price: '$89',
    duration: 'Half Day (4–5 Hours)',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop',
    description:
      'A private air-conditioned car with a professional chauffeur plus a Ministry of Tourism licensed guide who narrates the Mughal history of the Taj Mahal and Agra Fort. No photographer — ideal if you shoot on your own phone or camera and just want the logistics and storytelling handled.',
    features: [
      'Private A/C car with chauffeur (hotel / railway station pickup in Agra)',
      'Ministry of Tourism licensed local guide',
      'Full historical narration at Taj Mahal + Agra Fort',
      'Flexible pacing — linger where you like',
      'Tips on the best selfie and phone-photo spots',
      'No photographer included — bring your own camera',
    ],
    highlight: { icon: ShieldCheck, label: 'Guide', value: 'Ministry of Tourism licensed' },
    bestFor: 'Independent travellers who want comfort and context, but prefer taking their own photos',
  },
];

export default function TransportCombos() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section className="py-24 bg-white" id="transport-combos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-gold-600 text-sm font-bold tracking-widest uppercase mb-2 block"
          >
            Transport Combos in Agra
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-semibold text-ink-900 mb-6"
          >
            Arrive Relaxed, Leave with Memories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Skip the taxi haggling at the gate. A private air-conditioned car picks you up
            anywhere in Agra and loops you through the Taj Mahal and Agra Fort — pair it with
            a licensed photographer, or with a licensed guide if you prefer to shoot your own
            photos.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            const HighlightIcon = pkg.highlight.icon;
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
                    Most Convenient
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
                    <span className="text-sm text-gray-500 mb-1.5">/ total · USD</span>
                  </div>

                  <p className="text-gray-600 text-sm mt-4 mb-6">{pkg.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-6 text-xs">
                    <div className="flex items-start gap-2 bg-marble-50 border border-marble-200 p-3 rounded">
                      <Car className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-ink-900 uppercase tracking-wider mb-0.5">Transport</p>
                        <p className="text-gray-600">Private A/C car + chauffeur</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 bg-marble-50 border border-marble-200 p-3 rounded">
                      <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-ink-900 uppercase tracking-wider mb-0.5">Monuments</p>
                        <p className="text-gray-600">Taj Mahal + Agra Fort</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 bg-marble-50 border border-marble-200 p-3 rounded">
                      <Clock className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-ink-900 uppercase tracking-wider mb-0.5">Duration</p>
                        <p className="text-gray-600">{pkg.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 bg-marble-50 border border-marble-200 p-3 rounded">
                      <HighlightIcon className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-ink-900 uppercase tracking-wider mb-0.5">{pkg.highlight.label}</p>
                        <p className="text-gray-600">{pkg.highlight.value}</p>
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
                    <div className="flex gap-3">
                      <Link
                        href={`/services/${pkg.id}`}
                        className="flex-1 text-center py-3 px-4 rounded-sm text-sm font-medium border border-ink-900 text-ink-900 hover:bg-marble-50 transition-colors"
                      >
                        View Details
                      </Link>
                      <Link
                        href={`/book?plan=${pkg.id}`}
                        className={`flex-1 text-center py-3 px-4 rounded-sm text-sm font-medium transition-colors ${
                          pkg.popular
                            ? 'bg-gold-500 text-ink-900 hover:bg-gold-400'
                            : 'bg-ink-900 text-white hover:bg-ink-800'
                        }`}
                      >
                        Check Availability
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-xs text-gray-500 mt-10 max-w-2xl mx-auto">
          * Taj Mahal and Agra Fort monument entry tickets are not included and must be
          purchased separately. Pickup available from any hotel in Agra or Agra Cantt
          railway station. The Taj Mahal is closed every Friday.
        </p>
      </div>
    </section>
  );
}
