'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

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
    <section ref={sectionRef} className="py-24 sm:py-32 bg-coal overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left — text */}
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE }}
              className="kicker flex items-center gap-3 mb-6"
            >
              <span className="h-px w-8 bg-accent" />
              Credentials
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
              className="display-tight text-ivory text-4xl md:text-5xl lg:text-6xl font-medium"
            >
              The weight of a{' '}
              <span className="italic font-light text-accent">licensed name</span>
            </motion.h2>

            <div className="mt-8 space-y-6 text-muted leading-relaxed max-w-xl">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
              >
                The Taj Mahal enforces strict rules on professional photography.
                Unlicensed photographers are routinely stopped by security —
                leading to confiscated gear and ruined experiences.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.22, ease: EASE }}
              >
                As an{' '}
                <strong className="text-ivory font-medium">
                  official government-licensed photographer
                </strong>
                , I&apos;ve passed the Ministry of Tourism examinations — granting
                legal authorization to shoot professionally within the premises.
              </motion.p>
            </div>

            <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {checkmarkItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.08, ease: EASE }}
                  className="flex items-start gap-3 text-sm text-muted"
                >
                  <ShieldCheck className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Stat counters */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-line"
            >
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="font-display text-4xl md:text-5xl text-accent">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden border border-line">
              <Image
                src="https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800&auto=format&fit=crop"
                alt="Government-licensed photographer working at the Taj Mahal"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-4 border border-line-strong bg-night/70 backdrop-blur-sm p-4">
                  <div className="w-12 h-12 border border-accent text-accent flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-display text-ivory">Authorized Personnel</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent mt-0.5">
                      Ministry of Tourism · Govt. of India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* corner accents */}
            <div className="absolute -top-3 -right-3 w-20 h-20 border-t border-r border-accent/40" />
            <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b border-l border-accent/40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
