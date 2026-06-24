'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ShieldCheck, Award, Camera, Clock } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Government Licensed',
    description:
      'Officially certified by the Ministry of Tourism after passing rigorous examinations — not every camera is allowed inside.',
  },
  {
    icon: Award,
    title: 'Authorized Access',
    description:
      'A legal permit holder cleared to conduct professional photography within the monument premises.',
  },
  {
    icon: Camera,
    title: 'Premium Equipment',
    description:
      'Shooting on top-tier full-frame bodies and professional prime lenses for gallery-grade results.',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description:
      'High-resolution photographs delivered within 48 hours through a private online gallery.',
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function AuthoritySection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="bg-night py-24 sm:py-32">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Heading column */}
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE }}
              className="kicker flex items-center gap-3 mb-6"
            >
              <span className="h-px w-8 bg-accent" />
              The Standard
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
              className="display-tight text-ivory text-4xl md:text-5xl lg:text-6xl font-medium"
            >
              Why a licensed photographer{' '}
              <span className="italic font-light text-accent">matters</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
              className="mt-6 text-muted leading-relaxed max-w-md"
            >
              Not everyone with a camera is permitted to shoot professionally
              inside the Taj Mahal. As a government-approved photographer, I make
              the experience seamless, legal and premium — with no interruptions
              from security.
            </motion.p>
          </div>

          {/* Numbered feature index */}
          <div className="lg:col-span-7">
            <div className="border-t border-line">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.1 + index * 0.08,
                      ease: EASE,
                    }}
                    className="group grid grid-cols-[auto_1fr_auto] items-start gap-5 sm:gap-8 border-b border-line py-7 transition-colors duration-300 hover:bg-coal/60"
                  >
                    <span className="font-mono text-xs text-accent pt-1.5">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl text-ivory mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed max-w-md">
                        {feature.description}
                      </p>
                    </div>
                    <Icon className="h-5 w-5 text-faint group-hover:text-accent transition-colors duration-300 mt-1.5" />
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
