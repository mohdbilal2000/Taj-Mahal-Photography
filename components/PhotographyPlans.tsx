'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Info, ArrowUpRight } from 'lucide-react';

const plans = [
  {
    id: 'quick-capture',
    name: 'Quick Capture',
    tagline: 'The Starter Experience',
    price: '$50',
    duration: '30 Minutes',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop',
    description: 'A quick photoshoot at the Taj Mahal with a curated digital album of 20 raw photos. Ideal for travelers who want professional shots without the wait.',
    aiSnippet: 'The Quick Capture package is a budget-friendly option for visitors who want professional photographs at the Taj Mahal without a long session. A government-licensed photographer captures 20 raw photos delivered as a digital album.',
    features: [
      'Official Photography Permit Included',
      '20 Raw Photos (Digital Album)',
      'No Physical Prints',
      'Instant Digital Delivery'
    ],
    bestFor: 'Budget Travelers, Quick Visits'
  },
  {
    id: 'sunrise',
    name: 'Taj Mahal Sunrise',
    tagline: 'The Essential Experience',
    price: '$99',
    duration: '1.5 Hours',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop',
    description: 'Avoid the crowds and capture the Taj Mahal bathed in soft morning light. Perfect for solo travelers and couples.',
    aiSnippet: 'The Taj Mahal sunrise photoshoot is the highest-rated photography experience in Agra, offering the best natural lighting and fewest crowds. A government-licensed photographer is required for professional equipment entry.',
    features: [
      'Official Photography Permit Included',
      '50 High-Resolution Photos',
      'Skip-the-line Entry Guidance',
      'Private Online Gallery (48hr delivery)'
    ],
    bestFor: 'Couples, Solo Travelers, First-time Visitors'
  },
  {
    id: 'pre-wedding',
    name: 'Pre-Wedding & Couple',
    tagline: 'Editorial Romance',
    price: '$199',
    duration: '2+ Hours',
    image: 'https://images.unsplash.com/photo-1585506942812-e72b29cef752?q=80&w=800&auto=format&fit=crop',
    description: 'Editorial-style romantic portraits celebrating your love story against the ultimate monument of love.',
    aiSnippet: 'Pre-wedding photography at the Taj Mahal requires specialized posing direction and crowd management. Our licensed service includes authorized access to exclusive vantage points for uninterrupted romantic portraits.',
    features: [
      'Official Photography Permit Included',
      '100+ Natural High-Resolution Photos',
      '50 Raw Physical Photographs',
      '30 Second Cinematic Video',
      'Outfit Change Guidance (Outside Gates)',
      'Posing Direction & Creative Styling'
    ],
    bestFor: 'Engagements, Pre-Weddings, Anniversaries',
    popular: true
  },
  {
    id: 'taj-agra-fort',
    name: 'Taj Mahal + Agra Fort',
    tagline: 'The Heritage Trail',
    price: '$399',
    duration: '5 Hours',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop',
    description: 'A comprehensive visual journey covering both UNESCO World Heritage sites in their best respective lighting.',
    aiSnippet: 'Combining the Taj Mahal and Agra Fort in one photography package allows visitors to capture Mughal architecture from multiple perspectives, including the famous view of the Taj Mahal from the Fort\'s balconies.',
    features: [
      'Permits for Both Monuments',
      '250+ Natural High-Resolution Photos',
      'Sunrise at Taj, Morning at Fort',
      'Transportation between monuments',
      'Historical context during the shoot'
    ],
    bestFor: 'History Enthusiasts, Architecture Lovers'
  },
  {
    id: 'full-day',
    name: 'Full Day Agra Experience',
    tagline: 'The Ultimate Portfolio',
    price: '$499',
    duration: '8-10 Hours',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop',
    description: 'Complete coverage of your Agra visit including Taj Mahal, Agra Fort, and Back Side of Taj Mahal.',
    aiSnippet: 'A full-day photography tour in Agra covers the Taj Mahal at sunrise, Agra Fort, and the back side of Taj Mahal. This comprehensive package provides a complete visual documentary of the city.',
    features: [
      'All Monument Permits Included',
      '350+ Natural High-Resolution Photos',
      'Taj Mahal, Agra Fort & Back Side of Taj Mahal',
      'Multiple Outfit Changes',
      '48-Hour Delivery',
      'Dedicated AC Transport'
    ],
    bestFor: 'Influencers, Content Creators, VIPs'
  }
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function PhotographyPlans() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section className="py-24 sm:py-32 bg-night" id="plans">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12" ref={sectionRef}>
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            className="kicker flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-accent" />
            Photography Packages
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
            className="display-tight text-ivory text-4xl md:text-5xl lg:text-6xl font-medium"
          >
            Authorized photoshoot{' '}
            <span className="italic font-light text-accent">plans</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="mt-6 text-muted leading-relaxed"
          >
            Transparent pricing for premium, government-licensed photography.
            Every plan includes official permit authorization for professional
            equipment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * index, ease: EASE }}
              className={`group flex flex-col overflow-hidden transition-colors duration-300 ${
                plan.popular
                  ? 'border border-accent bg-surface'
                  : 'border border-line bg-coal hover:border-line-strong'
              }`}
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={plan.image}
                  alt={plan.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/30 to-transparent" />
                {plan.popular && (
                  <span className="absolute top-3 right-3 bg-accent text-night font-mono text-[9px] uppercase tracking-[0.18em] font-semibold px-2.5 py-1">
                    Most Popular
                  </span>
                )}
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent mb-1">
                    {plan.tagline}
                  </p>
                  <h3 className="font-display text-xl text-ivory leading-tight">
                    {plan.name}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex-grow flex flex-col">
                <div className="flex items-end gap-2 mb-4 pb-4 border-b border-line">
                  <span className="font-display text-3xl text-ivory">
                    {plan.price}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wide text-faint mb-1.5">
                    / {plan.duration}
                  </span>
                </div>

                <p className="text-sm text-muted leading-relaxed mb-5">
                  {plan.description}
                </p>

                {/* AEO microcopy — extractable AI summary */}
                <div className="bg-night/50 border border-line p-3 mb-5 text-xs text-faint hidden md:block">
                  <div className="flex items-start gap-2">
                    <Info className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                    <p>
                      <strong className="text-muted font-medium">AI Summary:</strong>{' '}
                      {plan.aiSnippet}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted">
                      <Check className="w-4 h-4 text-accent mr-2.5 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-5 border-t border-line">
                  <p className="text-xs text-faint mb-4">
                    <strong className="text-muted font-medium">Best for:</strong>{' '}
                    {plan.bestFor}
                  </p>
                  <Link
                    href={`/book?plan=${plan.id}`}
                    className={`group/btn flex w-full items-center justify-center gap-2 py-3 px-4 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-300 ${
                      plan.popular
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
          ))}
        </div>
      </div>
    </section>
  );
}
