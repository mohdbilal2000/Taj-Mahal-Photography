'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/lib/content';
import { SITE } from '@/lib/seo';

export default function Testimonials({ rating }: { rating: { value: number; count: number } }) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="section bg-marble-50">
      <div className="shell">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="collage-label text-xs font-bold uppercase tracking-widest text-gold-700 mb-3">
            Client Stories
          </span>
          <h2 className="font-serif text-4xl font-semibold text-ink-900 mb-4">
            Trusted by International Visitors
          </h2>
          <p className="text-ink-700">
            Read what couples and families from around the world have to say about their experience.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 text-ink-900">
            <span className="flex items-center gap-0.5" aria-hidden>
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(rating.value)
                      ? 'fill-gold-500 text-gold-500'
                      : 'text-gold-500/40'
                  }`}
                />
              ))}
            </span>
            <span className="font-semibold">{rating.value}</span>
            <span className="text-ink-500">from {rating.count} Google reviews</span>
          </p>
        </div>

        <div className="reveal reveal-stagger collage-grid grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
          {testimonials.map((testimonial, index) => (
            // A quote is a card like any other here; motion on the card
            // itself would overwrite the collage tilt.
            <div key={index} className="collage-card overflow-hidden">
              <div className="collage-body px-2 py-4 sm:px-3">
              {/* Stars row */}
              <div className="flex text-gold-500 mb-6 gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.15 + 0.3 + i * 0.05,
                      ease: 'easeOut',
                    }}
                  >
                    <Star className="h-5 w-5 fill-current" />
                  </motion.span>
                ))}
              </div>

              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 h-12 w-12 text-marble-200 pointer-events-none" />

              {/* Testimonial text */}
              <p className="text-ink-700 italic mb-8 relative z-10">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author info */}
              <div className="mt-auto">
                <p className="font-serif text-lg font-semibold text-ink-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-ink-500">{testimonial.country}</p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-500" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={SITE.googleBusiness}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Read more reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
