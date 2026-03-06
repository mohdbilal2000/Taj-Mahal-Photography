'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Do photographers need a permit inside the Taj Mahal?",
    answer: "Yes, professional photography inside the Taj Mahal requires a specific government permit. Unlicensed photographers are not allowed to bring professional equipment (like tripods or multiple lenses) and are often stopped by security. As a licensed photographer, I have the authorized access needed."
  },
  {
    question: "Is photography allowed inside the Taj Mahal?",
    answer: "Photography is allowed in the gardens and exterior areas of the Taj Mahal. However, photography is strictly prohibited inside the main mausoleum (where the tombs are located). I will guide you to all the best legal spots for stunning photos."
  },
  {
    question: "What is the best time for Taj Mahal photography?",
    answer: "Sunrise is universally considered the best time. The lighting is soft and magical, the marble reflects beautiful pink and golden hues, and the crowds are significantly smaller. Late afternoon before sunset is the second best option."
  },
  {
    question: "How much does a Taj Mahal photoshoot cost?",
    answer: "Packages start at $99 USD for a 2-hour sunrise session with 50 edited photos. Pre-wedding and couple packages start at $199, and full-day coverage starts at $499. All packages include official permit authorization for professional equipment."
  },
  {
    question: "How do I book your services?",
    answer: "You can book by filling out the inquiry form on this website or contacting me directly via WhatsApp. Due to limited daily permits, I recommend booking at least 2-3 weeks in advance, especially during peak tourist season (October to March)."
  },
  {
    question: "When will we receive our photos?",
    answer: "You will receive a link to a private online gallery with your high-resolution, professionally edited photos within 48-72 hours after the shoot."
  },
  {
    question: "What should I wear for a Taj Mahal photoshoot?",
    answer: "Bold, saturated colors like red, emerald green, royal blue, and gold photograph beautifully against the white marble. Avoid white clothing as it blends with the monument. Flowy fabrics like sarees, maxi dresses, and dupattas add movement and drama to portraits."
  },
  {
    question: "Is the Taj Mahal open on Fridays?",
    answer: "No. The Taj Mahal is closed to visitors every Friday for prayers at the mosque within the complex. Plan your visit for any other day of the week."
  },
];

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

        <div itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                className="bg-white border border-marble-200 rounded-lg overflow-hidden mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  className="w-full px-6 py-5 flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-ink-900 text-left pr-8" itemProp="name">{faq.question}</span>
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
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <div className="px-6 pb-5 text-gray-600">
                        <p itemProp="text">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {!isOpen && (
                  <span
                    className="sr-only"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <span itemProp="text">{faq.answer}</span>
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
