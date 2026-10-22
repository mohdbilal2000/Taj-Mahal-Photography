'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { PLANS } from '@/lib/plans';
import { SITE } from '@/lib/seo';
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
 * The banner is a table of prints rather than one photograph behind a scrim.
 *
 * A dark wash over a single image is what every tour site in Agra does, and
 * it buried the photograph it was built on. This lays the work out the way
 * the studio's own Instagram does — mounted, taped, slightly askew, on paper
 * — and lets the type sit in ink on cream where it is actually readable.
 * The lead print is the gateway silhouette, the strongest frame in the set.
 */
const LEAD = {
  src: '/photos/gallery/11.jpg',
  alt: 'A couple silhouetted in the great gateway of the Taj Mahal, reflected in rainwater on the marble',
  caption: 'the great gate',
};

const SIDE = [
  {
    src: '/photos/gallery/16.jpg',
    alt: 'A guest in a red saree beside the reflecting pool at the Taj Mahal',
    caption: 'first light',
  },
  {
    src: '/photos/gallery/13.jpg',
    alt: 'International guests with their licensed guide in the Taj Mahal gardens',
    caption: 'guided all morning',
  },
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
  // The prints drift apart as the page moves, so the pile reads as paper
  // rather than as a flat graphic.
  const leadY = useTransform(scrollYProgress, [0, 1], ['0px', reduceMotion ? '0px' : '-60px']);
  const sideY = [
    useTransform(scrollYProgress, [0, 1], ['0px', reduceMotion ? '0px' : '-120px']),
    useTransform(scrollYProgress, [0, 1], ['0px', reduceMotion ? '0px' : '-24px']),
  ];

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-marble-50 pt-28 pb-16 md:pt-32 md:pb-24"
    >
      {/* A print of the monument, washed almost out — paper texture, not a
          photograph you are meant to look at. */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Image
          src="/photos/gallery/02.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.14]"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-marble-50 via-marble-50/70 to-marble-50" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-y-9 px-5 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-x-14 lg:gap-y-6 lg:px-8">
        {/* ── Headline. On a phone this is all that precedes the work. */}
        <div className="order-1 lg:col-start-1 lg:row-start-1 lg:self-end">
          <span {...rise(0.04)} className="rise collage-label text-xs font-bold uppercase tracking-widest text-gold-700">
            Agra · India
          </span>

          <h1
            {...rise(0.1)}
            className="rise mt-5 font-serif font-light leading-[0.95] tracking-[-0.02em] text-ink-900 text-[clamp(2.6rem,1.4rem+4.2vw,4.75rem)] text-balance"
          >
            Photographs of
            <br />
            the Taj Mahal
            <span className="mt-1 block italic text-gold-600">worth flying home with</span>
          </h1>

          <p {...rise(0.18)} className="rise lead mt-6 max-w-lg text-ink-700 text-pretty">
            A government-licensed photographer, the official permit, and the quiet hour after
            sunrise — so you are in the photographs instead of taking them.
          </p>

        </div>

        {/* ── The prints */}
        <div className="order-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
          <div className="relative mx-auto flex max-w-[30rem] items-start gap-3 sm:gap-4 lg:max-w-none">
            <motion.figure
              style={{ y: leadY, ['--tilt' as string]: '-2.2deg' }}
              className="collage-card taped w-[58%] shrink-0"
            >
              <div className="collage-media relative aspect-[4/5]">
                <Image
                  src={LEAD.src}
                  alt={LEAD.alt}
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 28vw, 56vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <figcaption className="collage-caption px-1 py-3 text-xl sm:text-2xl">
                {LEAD.caption}
              </figcaption>
            </motion.figure>

            <div className="flex w-[42%] flex-col gap-3 pt-8 sm:gap-4 sm:pt-12">
              {SIDE.map((print, i) => (
                <motion.figure
                  key={print.src}
                  style={{ y: sideY[i], ['--tilt' as string]: i ? '-1.4deg' : '2.4deg' }}
                  // The third print would push the booking button off a phone
                  // screen, so it joins from the small breakpoint up.
                  className={`collage-card ${i === 1 ? 'hidden sm:block' : ''}`}
                >
                  <div className="collage-media relative aspect-[4/5]">
                    <Image
                      src={print.src}
                      alt={print.alt}
                      fill
                      sizes="(min-width: 1024px) 20vw, 40vw"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <figcaption className="collage-caption px-1 py-2 text-base sm:text-lg">
                    {print.caption}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </div>

        {/* ── What to do next */}
        <div className="order-3 lg:col-start-1 lg:row-start-2 lg:self-start">
          <div {...rise(0.26)} className="rise flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#quick-book"
              className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-sm bg-gold-500 px-7 text-sm font-semibold tracking-wide text-ink-900 transition-colors hover:bg-gold-400"
            >
              Book your session
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={whatsappUrl(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-sm border border-ink-900/20 bg-white/70 px-7 text-sm font-medium tracking-wide text-ink-900 backdrop-blur-sm transition-colors hover:border-ink-900/40"
            >
              Ask on WhatsApp
              <span className="text-xs font-normal text-ink-400">replies in ~10 min</span>
            </a>
          </div>

          <p {...rise(0.32)} className="rise mt-5 text-sm text-ink-500">
            Sessions from{' '}
            <span className="font-semibold text-ink-900">
              <Price planId={LOWEST.id} usd={LOWEST.price} hideCode />
            </span>{' '}
            · 20% deposit confirms your date · balance after the shoot
          </p>

          {/* Rating links to the real profile rather than printing a number we
              cannot verify here — the stars are an affordance, not a claim. */}
          <a
            {...rise(0.38)}
            href={SITE.googleBusiness}
            target="_blank"
            rel="noopener noreferrer"
            className="rise group mt-6 inline-flex items-center gap-2.5 py-1"
          >
            <span className="flex items-center gap-0.5" aria-hidden>
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className={`h-3.5 w-3.5 ${
                    i < Math.floor(rating.value) ? 'fill-gold-500 text-gold-500' : 'text-gold-500/40'
                  }`}
                />
              ))}
            </span>
            <span className="text-sm text-ink-500">
              <strong className="font-semibold text-ink-900">{rating.value}</strong> from{' '}
              <span className="link-sweep">{rating.count} Google reviews</span>
            </span>
          </a>

          <ul {...rise(0.44)} className="rise mt-8 grid max-w-xl grid-cols-3 gap-2 sm:gap-3">
            {PROOF.map((item) => (
              <li
                key={item.label}
                className="rounded-sm border border-ink-900/10 bg-white/70 px-3 py-2.5 backdrop-blur-sm"
              >
                <p className="text-xs font-semibold leading-tight text-ink-900 sm:text-sm">
                  {item.label}
                </p>
                <p className="mt-0.5 text-[10px] leading-tight text-ink-400 sm:text-xs">
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
