'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { Plus } from 'lucide-react';
import { faqs } from '@/lib/content';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-night" id="faq">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Heading */}
          <div className="lg:col-span-4">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE }}
              className="kicker flex items-center gap-3 mb-6"
            >
              <span className="h-px w-8 bg-accent" />
              Common Questions
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
              className="display-tight text-ivory text-4xl md:text-5xl font-medium"
            >
              Everything you need{' '}
              <span className="italic font-light text-accent">to know</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
              className="mt-6 text-muted leading-relaxed max-w-sm"
            >
              About photography permits, timing and what to expect at the Taj
              Mahal.
            </motion.p>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-8">
            <div className="border-t border-line">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, ease: EASE, delay: index * 0.04 }}
                    className="border-b border-line"
                  >
                    <button
                      className="w-full py-6 flex justify-between items-start gap-6 text-left group"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`font-display text-lg sm:text-xl transition-colors ${
                          isOpen ? 'text-accent' : 'text-ivory group-hover:text-accent'
                        }`}
                      >
                        {faq.question}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="flex-shrink-0 mt-1"
                      >
                        <Plus
                          className={`h-5 w-5 transition-colors ${
                            isOpen ? 'text-accent' : 'text-faint'
                          }`}
                        />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="faq-answer pb-6 pr-10 text-muted leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {!isOpen && (
                      <span className="sr-only faq-answer">{faq.answer}</span>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
