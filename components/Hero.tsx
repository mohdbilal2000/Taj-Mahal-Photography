'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

const EASE = [0.16, 1, 0.3, 1] as const;

const META = [
  { k: 'Experience', v: '10+ Years' },
  { k: 'Clients', v: '80+ Countries' },
  { k: 'Delivery', v: '48 Hours' },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] min-h-[640px] overflow-hidden bg-night"
    >
      {/* Parallax background, revealed with a mask wipe on load */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
        initial={{ clipPath: 'inset(12% 12% 12% 12%)', scale: 1.12 }}
        animate={{ clipPath: 'inset(0% 0% 0% 0%)', scale: 1 }}
        transition={{ duration: 1.4, ease: EASE }}
      >
        <Image
          src="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1920&auto=format&fit=crop"
          alt="The white marble Taj Mahal mausoleum reflected in the central pool at sunrise, photographed by a government-licensed photographer in Agra, India"
          fill
          className="object-cover object-center"
          priority
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Legibility gradients + vignette (bottom-weighted, not a flat wash) */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 z-[1] bg-gradient-to-t from-night via-night/30 to-night/40"
      />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(120%_80%_at_50%_0%,transparent,rgba(12,11,10,0.55))]" />

      {/* Side index label (editorial detail) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-4"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-muted [writing-mode:vertical-rl]">
          AGRA · UTTAR PRADESH · INDIA
        </span>
        <span className="h-16 w-px bg-line-strong" />
        <span className="font-mono text-[10px] tracking-[0.3em] text-accent">01</span>
      </motion.div>

      {/* Content — bottom-left anchored, asymmetric */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 h-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col justify-end pb-16 sm:pb-20"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
          className="kicker mb-6 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-accent" />
          Government Licensed Photographer
        </motion.span>

        <h1 className="display-tight text-ivory font-medium text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[7.5rem] max-w-5xl">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1, delay: 0.55, ease: EASE }}
            >
              Capture the magic
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1, delay: 0.68, ease: EASE }}
            >
              of the{' '}
              <span className="italic font-light text-accent">Taj&nbsp;Mahal</span>
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
          className="mt-7 max-w-xl text-base sm:text-lg text-muted leading-relaxed"
        >
          Private, authorized photography sessions inside the world&apos;s most
          photographed monument — by an official Ministry of Tourism licensed
          photographer in Agra.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05, ease: EASE }}
          className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
        >
          <Link
            href="/book"
            className="group inline-flex items-center justify-center gap-2 bg-ivory text-night px-8 py-4 font-mono text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-accent transition-colors duration-300"
          >
            Book your session
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/portfolio"
            className="link-underline inline-flex items-center justify-center sm:justify-start gap-2 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ivory"
          >
            View the portfolio
          </Link>
        </motion.div>

        {/* Credibility data-row (replaces the "Scroll" cliché) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-12 sm:mt-16 grid grid-cols-3 max-w-md gap-px border-t border-line pt-6"
        >
          {META.map((m) => (
            <div key={m.k}>
              <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-faint mb-1">
                {m.k}
              </p>
              <p className="font-display text-lg sm:text-xl text-ivory">{m.v}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
