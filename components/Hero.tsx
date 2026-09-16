'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { SITE } from '@/lib/seo';
import { HERO_IMAGE } from '@/lib/images';
import { PLANS } from '@/lib/plans';
import { whatsappUrl, WHATSAPP_MESSAGES } from '@/lib/contact';
import Price from './Price';

const LOWEST = PLANS.reduce((min, p) => (p.price < min.price ? p : min), PLANS[0]);

/** Proof the guest can see before scrolling — the three objections, answered. */
const PROOF = [
  { label: 'Licensed', detail: 'Ministry of Tourism' },
  { label: 'Permit included', detail: 'Pro gear inside' },
  { label: '48-hour delivery', detail: 'Private gallery' },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '18%']);

  // One timing curve for the whole entrance, so nothing arrives out of step.
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay: reduceMotion ? 0 : delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92svh] flex items-end overflow-hidden grain"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <Image
          src={HERO_IMAGE}
          alt="The white marble Taj Mahal reflected in the central pool at sunrise, photographed by a government-licensed photographer in Agra, India"
          fill
          sizes="100vw"
          className="object-cover object-center scale-105"
          priority
          fetchPriority="high"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="absolute inset-0 z-[1] scrim-hero" />
      {/* Copy sits left; darken that side so the headline never sits on marble. */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-ink-900/80 via-ink-900/25 to-transparent" />

      {/* Editorial, left-aligned: a centred stack reads like a template. */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-10 md:pb-16 pt-28 md:pt-32">
        <div className="max-w-3xl">
          {/* Links out to the real profile rather than printing a rating we
              cannot verify here — the stars are an affordance, not a claim. */}
          <motion.a
            {...rise(0.05)}
            href={SITE.googleBusiness}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mb-6 group"
          >
            <span className="flex items-center gap-1" aria-hidden>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
              ))}
            </span>
            <span className="text-white/85 text-sm link-sweep">Read guest reviews on Google</span>
          </motion.a>

          <motion.h1 {...rise(0.12)} className="text-white text-balance mb-6 font-serif font-light leading-[0.98] tracking-[-0.02em] text-[clamp(2.5rem,1.5rem+3.6vw,4.5rem)]">
            Photographs of the Taj Mahal
            <span className="block italic text-gold-400">worth flying home with</span>
          </motion.h1>

          <motion.p {...rise(0.2)} className="lead text-white/85 max-w-lg mb-7 text-pretty">
            A government-licensed photographer, the official permit, and the quiet hour after
            sunrise — so you are in the photographs instead of taking them.
          </motion.p>

          <motion.div {...rise(0.28)} className="flex flex-col sm:flex-row sm:items-center gap-3 mb-10">
            <Link
              href="#quick-book"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-gold-500 text-ink-900 font-semibold text-sm tracking-wide rounded-sm hover:bg-gold-400 transition-colors"
            >
              Book your session
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={whatsappUrl(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 backdrop-blur-md border border-white/25 text-white font-medium text-sm tracking-wide rounded-sm hover:bg-white/20 transition-colors"
            >
              Ask on WhatsApp
              <span className="text-white/60 text-xs font-normal">replies in ~10 min</span>
            </a>
          </motion.div>

          <motion.p {...rise(0.34)} className="text-white/70 text-sm mb-7">
            Sessions from{' '}
            <span className="text-white font-semibold">
              <Price planId={LOWEST.id} usd={LOWEST.price} hideCode />
            </span>{' '}
            · 20% deposit confirms your date · balance after the shoot
          </motion.p>

          <motion.ul
            {...rise(0.4)}
            className="grid grid-cols-3 gap-px bg-white/15 border border-white/15 rounded-sm overflow-hidden max-w-xl"
          >
            {PROOF.map((item) => (
              <li key={item.label} className="bg-ink-900/40 backdrop-blur-sm px-3 py-2.5 sm:px-4 sm:py-3">
                <p className="text-white text-xs sm:text-sm font-semibold leading-tight">{item.label}</p>
                <p className="text-white/60 text-[10px] sm:text-xs mt-0.5 leading-tight">{item.detail}</p>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
