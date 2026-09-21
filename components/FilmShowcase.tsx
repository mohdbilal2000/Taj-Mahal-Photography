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
      { rootMargin: '400px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [load]);

  return { ref, load };
}

type ClipProps = {
  src: string;
  poster: string;
  className?: string;
  label: string;
};

function Clip({ src, poster, className = '', label }: ClipProps) {
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
 * The film section.
 *
 * Every package already sells reels, and the couple session sells a
 * thirty-second cinematic edit — but the site only ever showed stills, so the
 * video was a line item nobody could picture. Here the cinematic clip starts
 * as a card and takes over the whole screen as you scroll, and the reel rises
 * beside it in the shape people actually watch reels in.
 *
 * The scroll choreography is decoration, so it is the first thing dropped when
 * the visitor has asked for less motion: that path renders the same two clips
 * stacked and still.
 */
export default function FilmShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // The card grows to fill the frame, losing its corners as it goes.
  const scale = useTransform(scrollYProgress, [0, 0.42], [0.56, 1]);
  const radius = useTransform(scrollYProgress, [0, 0.42], [26, 0]);
  const introOpacity = useTransform(scrollYProgress, [0, 0.16], [1, 0]);
  const filmDim = useTransform(scrollYProgress, [0.42, 0.72], [0, 0.55]);
  // While the title card is up, the poster underneath it is bright — hold a
  // scrim over it until the title has gone.
  const introDim = useTransform(scrollYProgress, [0, 0.18], [0.62, 0]);
  const reelY = useTransform(scrollYProgress, [0.5, 0.85], ['60%', '0%']);
  const reelOpacity = useTransform(scrollYProgress, [0.5, 0.68], [0, 1]);
  const captionOpacity = useTransform(scrollYProgress, [0.58, 0.74], [0, 1]);

  if (reduceMotion) {
    return (
      <section className="bg-ink-900 py-24 grain">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <Header />
          <div className="grid md:grid-cols-[1.6fr_1fr] gap-8 mt-12 items-start">
            <Clip
              src="/videos/cinematic.mp4"
              poster="/photos/gallery/05.jpg"
              label="A cinematic edit from a couple session at the Taj Mahal"
              className="w-full rounded-sm"
            />
            <Clip
              src="/videos/reel.mp4"
              poster="/photos/gallery/11.jpg"
              label="A vertical reel delivered after a shoot"
              className="w-full rounded-sm"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative h-[320vh] bg-ink-900">
      <div className="sticky top-0 h-[100svh] overflow-hidden grain">
        {/* The cinematic edit, growing from a card to the whole screen. */}
        <motion.div
          style={{ scale, borderRadius: radius }}
          className="absolute inset-0 overflow-hidden will-change-transform"
        >
          <Clip
            src="/videos/cinematic.mp4"
            poster="/photos/gallery/05.jpg"
            label="A cinematic edit from a couple session at the Taj Mahal"
            className="w-full h-full object-cover"
          />
          <motion.div style={{ opacity: filmDim }} className="absolute inset-0 bg-ink-900" />
          <motion.div style={{ opacity: introDim }} className="absolute inset-0 bg-ink-900" />
        </motion.div>

        {/* Title card, gone by the time the film fills the frame. */}
        <motion.div
          style={{ opacity: introOpacity }}
          className="absolute inset-0 flex items-center justify-center px-6 pointer-events-none"
        >
          <div className="text-center max-w-2xl">
            <span className="eyebrow text-gold-400 mb-4 block">Film, not just stills</span>
            <h2 className="font-serif font-light text-white text-[clamp(2.25rem,1.4rem+3.2vw,4rem)] leading-[1.02] tracking-[-0.02em] text-balance">
              You fly home with a
              <span className="block italic text-gold-400">film of the morning</span>
            </h2>
          </div>
        </motion.div>

        {/* The reel, in the shape it is actually watched in. */}
        <div className="absolute inset-0 flex items-start md:items-end justify-center md:justify-end px-5 sm:px-8 lg:px-16 pt-20 md:pt-0 pb-8 md:pb-14 pointer-events-none">
          <motion.div
            style={{ y: reelY, opacity: reelOpacity }}
            className="h-[34svh] md:h-[56svh] max-h-[520px] will-change-transform"
          >
            <div className="relative h-full aspect-[9/16] rounded-[28px] border-[6px] border-ink-800 bg-ink-900 shadow-deep overflow-hidden">
              <Clip
                src="/videos/reel.mp4"
                poster="/photos/gallery/11.jpg"
                label="A vertical reel delivered after a shoot"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-white/25" />
            </div>
          </motion.div>
        </div>

        {/* What the film actually is, once it is filling the screen. */}
        <motion.div
          style={{ opacity: captionOpacity }}
          className="absolute inset-x-0 bottom-0 px-5 sm:px-8 lg:px-16 pb-24 md:pb-16"
        >
          <div className="max-w-md">
            <span className="eyebrow text-gold-400 mb-3 block">Included in your shoot</span>
            <p className="text-white text-xl sm:text-2xl font-serif leading-snug mb-3">
              A 30-second cinematic edit, and 3–5 reels cut for the way you post.
            </p>
            <p className="text-white/60 text-sm mb-6">
              Delivered with your gallery inside 48 hours — sound on, ready to share.
            </p>
            <Link
              href="#quick-book"
              className="group pointer-events-auto inline-flex items-center gap-2 px-6 py-3 bg-gold-500 text-ink-900 text-sm font-semibold rounded-sm hover:bg-gold-400 transition-colors"
            >
              <Play className="w-4 h-4 fill-ink-900" />
              Book the session
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <div className="max-w-2xl">
      <span className="eyebrow text-gold-400 mb-4 block">Film, not just stills</span>
      <h2 className="font-serif font-light text-white text-[clamp(2rem,1.4rem+2.4vw,3.25rem)] leading-[1.05] mb-4">
        You fly home with a <span className="italic text-gold-400">film of the morning</span>
      </h2>
      <p className="text-white/70">
        A 30-second cinematic edit, and 3–5 reels cut for the way you post — delivered with your
        gallery inside 48 hours.
      </p>
    </div>
  );
}
