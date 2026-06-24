'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Star } from 'lucide-react';
import { testimonials } from '@/lib/content';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-coal">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            className="kicker flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-accent" />
            Client Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
            className="display-tight text-ivory text-4xl md:text-5xl lg:text-6xl font-medium"
          >
            Trusted by visitors from{' '}
            <span className="italic font-light text-accent">around the world</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-line">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12, ease: EASE }}
              className="group flex flex-col border-r border-b border-line p-8 lg:p-10 transition-colors duration-300 hover:bg-surface"
            >
              <div className="flex text-accent mb-7 gap-0.5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>

              <blockquote className="font-display text-xl leading-snug text-ivory/90 mb-8 flex-grow">
                “{testimonial.text}”
              </blockquote>

              <figcaption className="mt-auto pt-6 border-t border-line">
                <p className="font-display text-lg text-ivory">{testimonial.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint mt-1">
                  {testimonial.country}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
