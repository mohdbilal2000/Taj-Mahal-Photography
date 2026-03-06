'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah & James",
    country: "United Kingdom",
    text: "Booking a licensed photographer was the best decision we made. He knew exactly where to go to avoid the crowds and the photos are breathtaking. Security checked his badge at the gate and we walked right in with all the gear.",
    rating: 5
  },
  {
    name: "Elena Rossi",
    country: "Italy",
    text: "Absolutely professional and highly skilled. The sunrise shoot was magical. He guided us on poses and made us feel so comfortable. The final edited pictures were delivered the next day!",
    rating: 5
  },
  {
    name: "Michael Chen",
    country: "United States",
    text: "I was worried about the strict photography rules I read about online. Having an official permit holder meant zero stress. He's a true artist and captured our proposal perfectly.",
    rating: 5
  }
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-24 bg-marble-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-600 text-sm font-bold tracking-widest uppercase mb-2 block">
            Client Stories
          </span>
          <h2 className="font-serif text-4xl font-semibold text-ink-900 mb-4">
            Trusted by International Visitors
          </h2>
          <p className="text-gray-600">
            Read what couples and families from around the world have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: 'easeOut',
              }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden"
            >
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
              <p className="text-gray-700 italic mb-8 relative z-10">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author info */}
              <div className="mt-auto">
                <p className="font-serif text-lg font-semibold text-ink-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.country}</p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-500" />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 border border-ink-900 text-sm font-medium rounded-sm text-ink-900 hover:bg-ink-900 hover:text-white transition-colors"
          >
            Read more reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
