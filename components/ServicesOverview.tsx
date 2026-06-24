'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { IMG, img } from '@/lib/images';

const services = [
  {
    title: 'Sunrise Photoshoot',
    description:
      'The most magical hour. Soft morning light, empty courtyards, and the marble at its purest.',
    image: img(IMG.tajReflection, 900, { ar: '3/4' }),
    alt: IMG.tajReflection.alt,
    link: '/services/sunrise',
    offset: 'lg:mt-0',
  },
  {
    title: 'Couple & Pre-Wedding',
    description:
      'Romantic, editorial portraits set against the ultimate monument to love.',
    image: img(IMG.tajGoldenHour, 900, { ar: '3/4' }),
    alt: IMG.tajGoldenHour.alt,
    link: '/services/couple',
    offset: 'lg:mt-16',
  },
  {
    title: 'Family Photography',
    description:
      'Composed group portraits and unscripted candids from your family’s journey.',
    image: img(IMG.tajGardens, 900, { ar: '3/4' }),
    alt: IMG.tajGardens.alt,
    link: '/services/family',
    offset: 'lg:mt-8',
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ServicesOverview() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section className="bg-coal bg-mughal-pattern py-24 sm:py-32">
      <div ref={sectionRef} className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE }}
              className="kicker flex items-center gap-3 mb-6"
            >
              <span className="h-px w-8 bg-accent" />
              Our Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
              className="display-tight text-ivory text-4xl md:text-5xl lg:text-6xl font-medium"
            >
              Sessions crafted{' '}
              <span className="italic font-light text-accent">around the light</span>
            </motion.h2>
          </div>
          <Link
            href="/services"
            className="link-underline hidden md:inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted hover:text-ivory transition-colors shrink-0 pb-2"
          >
            All services
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Asymmetric gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.12, ease: EASE }}
              className={service.offset}
            >
              <Link href={service.link} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden">
                  {/* clip-path reveal */}
                  <motion.div
                    className="absolute inset-0"
                    initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
                    animate={
                      isInView ? { clipPath: 'inset(0% 0% 0% 0%)' } : {}
                    }
                    transition={{
                      duration: 1,
                      delay: 0.2 + index * 0.12,
                      ease: EASE,
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-night via-night/10 to-transparent" />

                  {/* index */}
                  <span className="absolute top-4 left-4 font-mono text-[11px] tracking-[0.2em] text-ivory/80">
                    0{index + 1}
                  </span>

                  {/* overlay caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-end justify-between gap-3">
                      <h3 className="font-display text-2xl text-ivory">
                        {service.title}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 text-accent shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <p className="mt-2 text-sm text-muted leading-relaxed max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:hidden">
          <Link
            href="/services"
            className="link-underline inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
          >
            All services
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
