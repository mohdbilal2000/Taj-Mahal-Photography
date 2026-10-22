'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Zap, Clock, BadgeCheck, ShieldCheck } from 'lucide-react';
import { PLANS, QUICK_BOOK_IDS, imageForPlan } from '@/lib/plans';
import Price from './Price';
import InrRateNote from './InrRateNote';
import QuickBook from './QuickBook';

const quickPlans = QUICK_BOOK_IDS.map((id) => PLANS.find((p) => p.id === id)!).filter(Boolean);

export default function QuickBookRail() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section className="py-14 md:py-20 bg-marble-50 border-b border-marble-200" id="quick-book">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="collage-label inline-flex items-center gap-1.5 text-gold-700 text-xs font-bold tracking-widest uppercase mb-3"
          >
            <Zap className="w-4 h-4" />
            Book in under a minute
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl font-semibold text-ink-900"
          >
            Pick a Plan, We Handle the Rest
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-gray-600 mt-3"
          >
            Tap a card to open the booking form with it pre-selected — confirmation on
            WhatsApp within 10 minutes.
          </motion.p>
        </div>

        {/* The whole booking path in three fields, above the cards: most
            visitors already know which package they want. */}
        <div className="mx-auto mb-12 max-w-3xl">
          <QuickBook />
        </div>

        {/* Mobile: horizontal snap rail (Klook-style). Desktop: 3-column grid. */}
        <div className="collage-grid flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-7 md:overflow-visible md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {quickPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 * index, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="snap-start flex-shrink-0 w-[80vw] max-w-[320px] md:w-auto md:max-w-none"
            >
              <Link
                href={`/book?plan=${plan.id}`}
                className={`collage-card group flex h-full flex-col ${
                  plan.popular ? 'ring-2 ring-gold-500/40' : ''
                }`}
              >
                {/* Image header */}
                <div className="collage-media relative h-40 w-full">
                  <Image
                    src={imageForPlan(plan)}
                    alt={plan.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 via-transparent to-transparent" />
                  {plan.badge && (
                    <span className="absolute top-3 left-3 bg-gold-500 text-ink-900 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                      {plan.badge}
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 bg-ink-900/70 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
                    <Clock className="w-3 h-3" />
                    {plan.duration}
                  </span>
                </div>

                {/* Body */}
                <div className="collage-body flex flex-grow flex-col">
                  <h3 className="font-serif text-xl font-semibold text-ink-900 leading-snug">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1.5 line-clamp-2">{plan.tagline}</p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-4 text-[11px] text-gray-500">
                    <span className="inline-flex items-center gap-1">
                      <BadgeCheck className="w-3.5 h-3.5 text-gold-500" />
                      Instant WhatsApp confirmation
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-gold-500" />
                      Licensed &amp; authorized
                    </span>
                  </div>

                  {/* Price footer */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-marble-200 mt-5">
                    <div>
                      <Price
                        planId={plan.id}
                        usd={plan.price}
                        fromPrice={plan.fromPrice}
                        className="text-2xl font-light text-ink-900"
                        codeClassName="text-xs text-gray-400 ml-1"
                      />
                    </div>
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-marble-50 border border-marble-200 text-ink-900 transition-all duration-300 group-hover:bg-gold-500 group-hover:border-gold-500">
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <InrRateNote className="text-center mt-8" />

        <p className="text-center text-sm text-gray-500 mt-8">
          Looking for something else?{' '}
          <Link href="/services" className="text-gold-600 font-medium hover:underline">
            Compare all {PLANS.length} packages →
          </Link>
        </p>
      </div>
    </section>
  );
}
