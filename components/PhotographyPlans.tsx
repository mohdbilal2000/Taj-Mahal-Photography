'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Info } from 'lucide-react';

const plans = [
  {
    id: 'basic',
    name: 'Basic Package',
    tagline: 'The Essential Experience',
    price: '$99',
    duration: '1-1.5 Hours',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop',
    description: 'Capture the Taj Mahal bathed in soft morning light. Perfect for solo travelers and couples looking for a quick, high-quality session.',
    aiSnippet: 'The Basic photography package is a popular choice for visitors to Agra, offering 50 high-resolution photos in a focused 1 to 1.5 hour session. A government-licensed photographer is required for professional equipment entry.',
    features: [
      'Official Photography Permit Included',
      '50 High-Resolution Photos',
      'Private Online Gallery (48hr delivery)'
    ],
    bestFor: 'Couples, Solo Travelers, First-time Visitors'
  },
  {
    id: 'standard',
    name: 'Standard Package',
    tagline: 'The Complete Experience',
    price: '$199',
    duration: '2+ Hours',
    image: 'https://images.unsplash.com/photo-1585506942812-e72b29cef752?q=80&w=800&auto=format&fit=crop',
    description: 'An extended photography session with professionally edited photos plus bonus natural shots for a complete visual story.',
    aiSnippet: 'The Standard package offers over 2 hours of professional photography at the Taj Mahal, including 50 professionally edited photos and 100+ bonus natural high-resolution photos. Our licensed service includes authorized access to exclusive vantage points.',
    features: [
      'Official Photography Permit Included',
      '50 Professionally Edited Photos',
      '100+ Natural High-Resolution Photos (Bonus)',
      'Advanced Retouching & Color Grading',
      'Posing Direction & Creative Styling'
    ],
    bestFor: 'Engagements, Pre-Weddings, Anniversaries',
    popular: true
  },
  {
    id: 'family',
    name: 'Family Vacation Package',
    tagline: 'Memories for Everyone',
    price: '$299',
    duration: '1.5 Hours',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop',
    description: 'Preserve your family memories with beautiful group portraits and candid shots of you exploring the monument together.',
    aiSnippet: 'The Family Vacation package is designed for families visiting the Taj Mahal, with child-friendly pacing and a mix of group and individual portraits to capture every family member.',
    features: [
      'Official Photography Permit Included',
      'Group and Individual Portraits',
      'Child-Friendly Pacing',
      'Private Online Gallery (48hr delivery)'
    ],
    bestFor: 'Families, Group Travelers'
  },
  {
    id: 'premium-taj-agra-fort',
    name: 'Premium Taj & Agra Fort',
    tagline: 'The Heritage Trail',
    price: '$399',
    duration: '5 Hours',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop',
    description: 'A comprehensive visual journey covering both the Taj Mahal and Agra Fort UNESCO World Heritage sites.',
    aiSnippet: 'The Premium Taj & Agra Fort package covers both UNESCO World Heritage sites, delivering 100 professionally edited photos and 250+ bonus natural high-resolution photos, including the famous view of the Taj Mahal from the Fort\'s balconies.',
    features: [
      'Permits for Both Monuments',
      '100 Professionally Edited Photos',
      '250+ Natural High-Resolution Photos (Bonus)',
      'Transportation between monuments',
      'Historical context during the shoot'
    ],
    bestFor: 'History Enthusiasts, Architecture Lovers'
  }
];

export default function PhotographyPlans() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section className="py-24 bg-white" id="plans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-gold-600 text-sm font-bold tracking-widest uppercase mb-2 block"
          >
            Photography Packages
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-semibold text-ink-900 mb-6"
          >
            Authorized Photoshoot Plans
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Transparent pricing for premium, government-licensed photography services.
            All plans include official permit authorization for professional equipment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 * index,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              whileHover={{ y: -8 }}
              className={`flex flex-col bg-marble-50 rounded-sm overflow-hidden transition-shadow duration-300 hover:shadow-xl ${
                plan.popular
                  ? 'border-2 border-gold-500 ring-2 ring-gold-500/20 relative shadow-lg'
                  : 'border border-marble-200 shadow-sm'
              }`}
              itemScope
              itemType="https://schema.org/Offer"
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gold-500 text-white text-xs font-bold uppercase tracking-wider text-center py-1.5 z-10">
                  Most Popular
                </div>
              )}

              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={plan.image}
                  alt={plan.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif text-2xl font-semibold" itemProp="name">
                    {plan.name}
                  </h3>
                  <p className="text-gold-400 text-sm font-medium">{plan.tagline}</p>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <div className="mb-6">
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-3xl font-light text-ink-900" itemProp="price">
                      {plan.price}
                    </span>
                    <span className="text-sm text-gray-500 mb-1">/ {plan.duration}</span>
                    <meta itemProp="priceCurrency" content="USD" />
                  </div>
                  <p className="text-gray-600 text-sm" itemProp="description">
                    {plan.description}
                  </p>
                </div>

                {/* AI Feeder Microcopy */}
                <div className="bg-white p-3 rounded border border-marble-200 mb-6 text-xs text-gray-500 hidden md:block">
                  <div className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                    <p>
                      <strong>AI Summary:</strong> {plan.aiSnippet}
                    </p>
                  </div>
                </div>

                <div className="mb-6 flex-grow">
                  <h4 className="text-xs font-bold text-ink-900 uppercase tracking-wider mb-3">
                    What&apos;s Included
                  </h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <Check className="w-4 h-4 text-gold-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-marble-200">
                  <p className="text-xs text-gray-500 mb-4">
                    <strong>Best for:</strong> {plan.bestFor}
                  </p>
                  <Link
                    href={`/book?plan=${plan.id}`}
                    className={`block w-full text-center py-3 px-4 rounded-sm text-sm font-medium transition-colors ${
                      plan.popular
                        ? 'bg-gold-500 text-ink-900 hover:bg-gold-600'
                        : 'border border-ink-900 text-ink-900 hover:bg-marble-100'
                    }`}
                  >
                    Check Availability
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
