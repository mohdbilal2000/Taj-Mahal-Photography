'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = Date.now();

    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const checkmarkItems = [
  'Guaranteed entry with professional camera gear',
  'No interruptions from security personnel',
  'Access to the best vantage points',
  "Deep knowledge of the monument's history and lighting",
];

const stats = [
  { target: 10, suffix: '+', label: 'Years' },
  { target: 5000, suffix: '+', label: 'Clients' },
  { target: 80, suffix: '+', label: 'Countries' },
];

export default function LicenseValidation() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-ink-900 text-white overflow-hidden relative"
    >
      {/* Background image with parallax */}
      <div className="absolute inset-0 opacity-10 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1514222288957-49a4653e1073?q=80&w=1920&auto=format&fit=crop')]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - text content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="font-serif text-3xl md:text-5xl font-semibold mb-6"
            >
              The Importance of a Licensed Photographer
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="w-20 h-1 bg-gold-500 mb-8"
            />

            <div className="space-y-6 text-gray-300">
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              >
                The Taj Mahal has strict regulations regarding professional photography.
                Unlicensed photographers are routinely stopped by security, leading to
                confiscated equipment and ruined experiences for tourists.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              >
                As an <strong>Official Government Licensed Photographer</strong>, I have
                passed the required examinations by the Ministry of Tourism, granting me
                legal authorization to conduct professional photoshoots within the monument
                premises.
              </motion.p>

              <ul className="space-y-4 mt-8">
                {checkmarkItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.4 + index * 0.1,
                      ease: 'easeOut',
                    }}
                    className="flex items-start"
                  >
                    <span className="text-gold-400 mr-3">&#10003;</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Animated stat counters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.9, ease: 'easeOut' }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gold-400">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column - image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative"
          >
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden border-4 border-white/10 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800&auto=format&fit=crop"
                alt="Photographer in action at Taj Mahal"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-ink-900 font-bold text-xs text-center leading-tight">
                      GOVT
                      <br />
                      ID
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Authorized Personnel</p>
                    <p className="text-gold-400 text-sm">
                      Ministry of Tourism, Govt. of India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-gold-500 opacity-50" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-gold-500 opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
