'use client';

import { motion, useInView, useReducedMotion } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

/**
 * Counts up to the number — but *starts* at it.
 *
 * Starting at zero put "0+ Years, 0+ Clients, 0+ Countries" into the server
 * HTML, which is what every crawler reads and what a visitor sees until the
 * section scrolls into view. A site that says it has zero clients is a site
 * that looks broken or fake, and no amount of animation fixes the copy a
 * crawler already took.
 */
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(target);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView || reduceMotion) return;

    const duration = 1600;
    const startTime = performance.now();
    let frame = 0;

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target, reduceMotion]);

  return (
    <span ref={ref}>
      {count.toLocaleString('en-US')}
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
      className="section bg-ink-900 text-white overflow-hidden relative"
    >
      {/* Background image with parallax */}
      <div className="absolute inset-0 opacity-10 bg-cover bg-center bg-[url('/photos/gallery/05.jpg')]" />

      <div className="shell relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - text content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="h1-fluid font-serif font-semibold mb-6"
            >
              The Importance of a Licensed Photographer
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="w-20 h-1 bg-gold-500 mb-8"
            />

            <div className="space-y-6 text-marble-300">
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
                  <div className="text-sm text-ink-400 mt-1">{stat.label}</div>
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
            <div className="aspect-[4/5] relative rounded-sm overflow-hidden border-4 border-white/10 shadow-2xl">
              <Image
                src="/photos/gallery/02.jpg"
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
            <div className="pointer-events-none absolute -top-3 right-0 h-24 w-24 border-r-2 border-t-2 border-gold-500 opacity-50 lg:-right-6 lg:-top-6 lg:h-32 lg:w-32" />
            <div className="pointer-events-none absolute -bottom-3 left-0 h-24 w-24 border-b-2 border-l-2 border-gold-500 opacity-50 lg:-bottom-6 lg:-left-6 lg:h-32 lg:w-32" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
