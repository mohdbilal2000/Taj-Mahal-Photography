'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import { PLANS, QUICK_BOOK_IDS } from '@/lib/plans';

const quickPlans = QUICK_BOOK_IDS.map((id) => PLANS.find((p) => p.id === id)!).filter(Boolean);

export default function QuickBookRail() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section className="py-20 bg-marble-50 border-b border-marble-200" id="quick-book">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <div className="text-center mb-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 text-gold-600 text-sm font-bold tracking-widest uppercase mb-2"
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
            Tap a package to open the booking form with it pre-selected — confirmation on
            WhatsApp within 10 minutes.
          </motion.p>
        </div>

        <div className="space-y-3">
          {quickPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <Link
                href={`/book?plan=${plan.id}`}
                className={`group flex items-center gap-4 bg-white rounded-lg px-5 py-4 sm:px-6 sm:py-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 ${
                  plan.popular
                    ? 'border-2 border-gold-500 shadow-md'
                    : 'border border-marble-200 shadow-sm hover:border-gold-400'
                }`}
              >
                <div className="flex-grow min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-serif text-lg sm:text-xl font-semibold text-ink-900">
                      {plan.name}
                    </span>
                    {plan.popular && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-gold-500 text-ink-900 px-2 py-0.5 rounded-full">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-0.5 truncate sm:whitespace-normal">
                    {plan.tagline}
                  </p>
                </div>

                <div className="text-right flex-shrink-0">
                  <span className="block text-xl sm:text-2xl font-light text-ink-900">
                    ${plan.price}
                  </span>
                  <span className="block text-[11px] text-gray-400 uppercase tracking-wide">
                    {plan.duration}
                  </span>
                </div>

                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-marble-50 border border-marble-200 text-ink-900 transition-all duration-300 group-hover:bg-gold-500 group-hover:border-gold-500 group-hover:text-ink-900">
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Looking for something else?{' '}
          <Link href="/services" className="text-gold-600 font-medium hover:underline">
            Compare all 13 packages →
          </Link>
        </p>
      </div>
    </section>
  );
}
