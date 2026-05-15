'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/lib/content';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-24 bg-marble-50" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-gold-600 text-sm font-bold tracking-widest uppercase mb-2 block">Common Questions</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Everything you need to know about photography at the Taj Mahal.</p>
        </motion.div>

        <div>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                className="bg-white border border-marble-200 rounded-lg overflow-hidden mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
              >
                <button
                  className="w-full px-6 py-5 flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-ink-900 text-left pr-8">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="h-5 w-5 text-gray-500" />
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
                      <div className="px-6 pb-5 text-gray-600">
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
      </div>
    </section>
  );
}
