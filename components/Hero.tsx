'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { PLANS } from '@/lib/plans';
import { SITE } from '@/lib/seo';
import { HERO_IMAGE } from '@/lib/images';
import { whatsappUrl, WHATSAPP_MESSAGES } from '@/lib/contact';
import Price from './Price';
import type { Rating } from '@/lib/reviews';

const LOWEST = PLANS.reduce((min, p) => (p.price < min.price ? p : min), PLANS[0]);

/** The three objections a guest has before they scroll, answered up front. */
const PROOF = [
  { label: 'Licensed', detail: 'Ministry of Tourism' },
  { label: 'Permit included', detail: 'Pro gear inside' },
  { label: '48-hour delivery', detail: 'Private gallery' },
];

/**
 * The entrance is a CSS animation, not a motion one: motion renders its
 * initial state into the server HTML, which would ship the H1 at opacity 0 to
 * anything that does not execute JavaScript. `.rise` is defined in globals.css
 * and is neutralised by the prefers-reduced-motion block there.
 */
const rise = (delay: number) => ({ style: { animationDelay: `${delay}s` } });

export default function Hero({ rating }: { rating: Rating }) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '18%']);

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
      {/* Copy sits left, so darken that side — the headline never lands on marble. */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-ink-900/80 via-ink-900/25 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-10 md:pb-16 pt-28 md:pt-32">
        <div className="max-w-3xl">
          {/* Links to the real profile rather than printing a rating we cannot
              verify here — the stars are an affordance, not a claim. */}
          <a
            {...rise(0.05)}
            href={SITE.googleBusiness}
            target="_blank"
            rel="noopener noreferrer"
            className="rise inline-flex items-center gap-3 mb-6 group"
          >
            <span className="flex items-center gap-1" aria-hidden>
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(rating.value)
                      ? 'fill-gold-400 text-gold-400'
                      : 'text-gold-400/50'
                  }`}
                />
              ))}
            </span>
            <span className="text-white/85 text-sm">
              <strong className="font-semibold text-white">{rating.value}</strong> from{' '}
              <span className="link-sweep">{rating.count} Google reviews</span>
            </span>
          </a>

          <h1
            {...rise(0.12)}
            className="rise text-white text-balance mb-6 font-serif font-light leading-[0.98] tracking-[-0.02em] text-[clamp(2.5rem,1.5rem+3.6vw,4.5rem)]"
          >
            Photographs of the Taj Mahal
            <span className="block italic text-gold-400">worth flying home with</span>
          </h1>

          <p {...rise(0.2)} className="rise lead text-white/85 max-w-lg mb-7 text-pretty">
            A government-licensed photographer, the official permit, and the quiet hour after
            sunrise — so you are in the photographs instead of taking them.
          </p>

          <div
            {...rise(0.28)}
            className="rise flex flex-col sm:flex-row sm:items-center gap-3 mb-8"
          >
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
          </div>

          <p {...rise(0.34)} className="rise text-white/70 text-sm mb-7">
            Sessions from{' '}
            <span className="text-white font-semibold">
              <Price planId={LOWEST.id} usd={LOWEST.price} hideCode />
            </span>{' '}
            · 20% deposit confirms your date · balance after the shoot
          </p>

          <ul
            {...rise(0.4)}
            className="rise grid grid-cols-3 gap-px bg-white/15 border border-white/15 rounded-sm overflow-hidden max-w-xl"
          >
            {PROOF.map((item) => (
              <li key={item.label} className="bg-ink-900/40 backdrop-blur-sm px-3 py-2.5 sm:px-4 sm:py-3">
                <p className="text-white text-xs sm:text-sm font-semibold leading-tight">
                  {item.label}
                </p>
                <p className="text-white/60 text-[10px] sm:text-xs mt-0.5 leading-tight">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
