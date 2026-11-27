'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/lib/content';

/**
 * `limit` shows the first few questions and folds the rest behind one button.
 * The folded ones stay in the markup, so the page still contains every answer
 * its FAQ schema lists.
 */
export default function FAQ({ limit }: { limit?: number } = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);
  const folded = limit !== undefined && !showAll;
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="section bg-marble-50" id="faq">
      <div className="shell-narrow">
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="collage-label text-xs font-bold uppercase tracking-widest text-gold-700 mb-3">Common Questions</span>
          <h2 className="h2-fluid font-serif font-semibold text-ink-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-ink-700">Everything you need to know about photography at the Taj Mahal.</p>
        </motion.div>

        <div>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                className={`faq-item mb-3 ${folded && index >= (limit ?? 0) ? 'hidden' : ''} ${isOpen ? 'is-open' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: Math.min(index, 8) * 0.05 }}
              >
                <button
                  className="w-full px-5 sm:px-6 py-5 flex justify-between items-center text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-ink-900 text-left pr-8">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="h-5 w-5 text-ink-500" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-5 text-ink-700 leading-relaxed">
                        <p className="faq-answer">{faq.answer}</p>
                      </div>
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

        {limit !== undefined && faqs.length > limit && (
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {!showAll && (
              <button type="button" onClick={() => setShowAll(true)} className="btn btn-outline">
                Show all {faqs.length} questions
              </button>
            )}
            <Link href="/faq" className="btn btn-ink">
              Open the full FAQ page
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
