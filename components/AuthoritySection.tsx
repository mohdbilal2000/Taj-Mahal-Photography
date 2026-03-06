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
      'High-resolution, professionally edited photos delivered within 48 hours.',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 40 }
                }
                transition={{
                  duration: 0.5,
                  delay: (index + 1) * 0.1,
                  ease: 'easeOut',
                }}
                className="p-8 bg-white border border-marble-200 rounded-lg text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-marble-50 mb-6">
                  <Icon className="h-8 w-8 text-gold-500" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
