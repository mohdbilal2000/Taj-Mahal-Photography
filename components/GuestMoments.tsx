'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight, Heart } from 'lucide-react';

/**
 * The polaroid wall.
 *
 * Two of the studio's photographs already carry this treatment — a cream
 * mount, a hand-written caption, a heart — because they were made for
 * Instagram. Dropped into the plain portfolio grid they looked like a
 * mistake; given a section of their own, with the rest of the set mounted
 * the same way in CSS, the treatment becomes the point instead of an
 * inconsistency.
*/
type Moment = {
  src: string;
  alt: string;
  /** Hand-written line under the photograph, as on the studio's own posts. */
  caption: string;
  tilt: string;
};

const MOMENTS: Moment[] = [
  {
    src: '/photos/gallery/14.jpg',
    alt: 'A guest photographed in the Taj Mahal gardens in the late afternoon',
    caption: 'taj with us',
    tilt: '-2.5deg',
  },
  {
    src: '/photos/gallery/08.jpg',
    alt: 'A couple sharing a moment on a bench with the Taj Mahal behind them',
    caption: 'the quiet hour',
    tilt: '1.8deg',
  },
  {
    src: '/photos/gallery/12.jpg',
    alt: 'Guests photographed with their licensed guide in front of the Taj Mahal',
    caption: 'guided all morning',
    tilt: '-1.4deg',
  },
  {
    src: '/photos/gallery/18.jpg',
    alt: 'A couple photographed on the lawns with the Taj Mahal behind them',
    caption: 'unforgettable experience',
    tilt: '2.2deg',
  },
  {
    src: '/photos/gallery/16.jpg',
    alt: 'A guest in a red saree beside the reflecting pool at the Taj Mahal',
    caption: 'east gate, first light',
    tilt: '-2deg',
  },
  {
    src: '/photos/gallery/01.jpg',
    alt: 'A group of guests in saris walking together at the monument',
    caption: 'all five of us',
    tilt: '1.5deg',
  },
];

export default function GuestMoments() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section ref={sectionRef} className="relative py-24 bg-marble-100 overflow-hidden">
      {/* The faint repeated wordmark that sits behind the posts. */}
      <div
        className="absolute inset-0 flex flex-col justify-center gap-2 pointer-events-none"
        aria-hidden
      >
        {[0, 1, 2, 3].map((i) => (
          <p key={i} className="moments-watermark" style={{ marginLeft: `${(i % 2) * -8}%` }}>
            TAJ MAHAL MOMENTS TAJ MAHAL MOMENTS
          </p>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow text-gold-600 mb-3 block">From our guests</span>
          <h2 className="h2-fluid font-serif font-semibold text-ink-900 mb-4 text-balance">
            Moments we sent home
          </h2>
          <p className="text-ink-500 lead">
            Every shoot goes out the same way — a private gallery, and a few of these to post
            before the flight home.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {MOMENTS.map((m, i) => (
            <motion.figure
              key={m.src}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              style={{ rotate: m.tilt }}
              className="moment-card"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-md">
                <Image
                  src={m.src}
                  alt={m.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <figcaption className="flex items-center justify-between gap-2 px-1 py-3">
                <span className="font-hand text-ink-900 text-xl sm:text-2xl leading-none">
                  {m.caption}
                </span>
                <Heart className="w-5 h-5 fill-[#F2564B] text-[#F2564B] flex-shrink-0" />
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 px-7 py-3.5 border border-ink-900 text-ink-900 text-sm font-medium rounded-sm hover:bg-ink-900 hover:text-white transition-colors"
          >
            See the full portfolio
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
