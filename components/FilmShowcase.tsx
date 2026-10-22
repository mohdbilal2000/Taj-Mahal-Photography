'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

/**
 * Only fetches the file once the element is near the viewport. The two clips
 * are ~5MB together, which has no business being in the initial page load.
 */
function useLazyVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || load) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: '400px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [load]);

  return { ref, load };
}

function Clip({
  src,
  poster,
  label,
  className = '',
}: {
  src: string;
  poster: string;
  label: string;
  className?: string;
}) {
  const { ref, load } = useLazyVideo();

  return (
    <video
      ref={ref}
      src={load ? src : undefined}
      poster={poster}
      className={className}
      muted
      loop
      playsInline
      autoPlay
      preload="none"
      aria-label={label}
    />
  );
}

/**
 * The film section — the one dark room in the house.
 *
 * It was a 320vh sticky sequence where a clip grew to fill the screen. On a
 * desktop it was a nice trick; on a phone the reel landed on top of the title
 * and the whole thing read as a black screen with letterboxed video in it,
 * which is exactly what a visitor interprets as broken.
 *
 * Now it is an ordinary section that behaves at every width: the cinematic
 * edit in its own frame, the vertical reel beside it in the shape people
 * actually watch reels in, both drifting gently as the page moves. The motion
 * is decoration and the layout does not depend on it.
 */
export default function FilmShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const filmY = useTransform(scrollYProgress, [0, 1], ['24px', reduceMotion ? '24px' : '-24px']);
  const reelY = useTransform(scrollYProgress, [0, 1], ['56px', reduceMotion ? '56px' : '-56px']);

  return (
    <section ref={sectionRef} className="section grain relative overflow-hidden bg-ink-900">
      <div className="shell">
        <div className="section-head max-w-2xl">
          <span className="eyebrow text-gold-400">Film, not just stills</span>
          <h2 className="h2-fluid font-serif font-light leading-[1.05] text-white text-balance">
            You fly home with a <span className="italic text-gold-400">film of the morning</span>
          </h2>
          <p className="text-marble-300 text-pretty">
            A 30-second cinematic edit, and 3–5 reels cut for the way you post — delivered with
            your gallery inside 48 hours, sound on, ready to share.
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[1.55fr_1fr] lg:gap-8">
          {/* The cinematic edit. */}
          <motion.figure style={{ y: filmY }} className="relative">
            <div className="relative overflow-hidden rounded-sm border border-white/10 shadow-[var(--shadow-deep)]">
              <Clip
                src="/videos/cinematic.mp4"
                poster="/photos/gallery/05.jpg"
                label="A cinematic edit from a couple session at the Taj Mahal"
                className="aspect-video w-full object-cover"
              />
              <span className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-ink-900/70 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                <Play className="h-3 w-3 fill-white" />
                The cinematic edit
              </span>
            </div>
            <figcaption className="mt-3 text-sm text-marble-300">
              Included with every couple and pre-wedding session.
            </figcaption>
          </motion.figure>

          {/* The reel, in the shape it is watched in. */}
          <motion.figure
            style={{ y: reelY }}
            className="mx-auto w-full max-w-[16rem] sm:max-w-[18rem] lg:mx-0 lg:max-w-none"
          >
            <div className="relative overflow-hidden rounded-[22px] border-[5px] border-ink-800 bg-ink-900 shadow-[var(--shadow-deep)]">
              <Clip
                src="/videos/reel.mp4"
                poster="/photos/gallery/11.jpg"
                label="A vertical reel delivered after a shoot"
                className="aspect-[9/16] w-full object-cover"
              />
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-3 h-1 w-14 -translate-x-1/2 rounded-full bg-white/25"
              />
            </div>
            <figcaption className="mt-3 text-sm text-marble-300">
              One of the 3–5 reels, cropped for the feed.
            </figcaption>
          </motion.figure>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link href="#quick-book" className="btn btn-gold btn-lg group">
            <Play className="h-4 w-4 fill-ink-900" />
            Book the session
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <p className="text-sm text-marble-300">Video is included — never an upsell at the gate.</p>
        </div>
      </div>
    </section>
  );
}
