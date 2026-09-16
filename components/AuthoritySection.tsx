'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ShieldCheck, Award, Camera, Clock } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Government Licensed',
    description:
      'Officially certified by the Ministry of Tourism after passing rigorous examinations.',
  },
  {
    icon: Award,
    title: 'Authorized Access',
    description:
      'Legal permit holder allowed to conduct professional photography inside the premises.',
  },
  {
    icon: Camera,
    title: 'Premium Equipment',
    description:
      'Shooting with top-tier full-frame cameras and professional prime lenses.',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description:
      'High-resolution photos delivered within 48 hours via a private online gallery.',
  },
];

export default function AuthoritySection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-serif text-3xl md:text-4xl font-semibold text-ink-900 mb-4"
          >
            Why Choose a Licensed Photographer?
          </motion.h2>

          {/* Gold accent divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={
              isInView
                ? { opacity: 1, scaleX: 1 }
                : { opacity: 0, scaleX: 0 }
            }
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            className="section-divider mx-auto mb-6 h-0.5 w-16 bg-gold-500 rounded-full"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-gray-600 leading-relaxed"
          >
            Not everyone with a camera is allowed to shoot professionally inside
            the Taj Mahal. As a government-approved photographer, I ensure a
            seamless, legal, and premium experience without interruptions from
            security.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-marble-200 border border-marble-200 rounded-sm overflow-hidden"
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group bg-white p-6 md:p-8 h-full transition-colors duration-300 hover:bg-marble-50"
              >
                <Icon className="h-6 w-6 text-gold-500 mb-5" strokeWidth={1.5} />
                <h3 className="font-serif text-lg md:text-xl font-semibold text-ink-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
