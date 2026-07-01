'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Star, Quote, ExternalLink, BadgeCheck } from 'lucide-react';
import type { Review, ReviewsData } from '@/lib/reviews';

/** Google "G" mark — inline SVG so the source badge needs no asset pipeline. */
function GoogleGlyph({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
    </svg>
  );
}

/** Star row with fractional fill (for aggregate ratings like 4.9). */
function Stars({ value, size = 'h-4 w-4' }: { value: number; size?: string }) {
  return (
    <div className="flex" role="img" aria-label={`${value} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span key={i} className="relative">
            <Star className={`${size} text-marble-300`} />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star className={`${size} text-gold-500 fill-current`} />
            </span>
          </span>
        );
      })}
    </div>
  );
}

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join('');
}

/** Deterministic gold-tinted avatar background so cards stay visually varied. */
const AVATAR_TINTS = [
  'from-gold-400 to-gold-600',
  'from-ink-800 to-ink-900',
  'from-gold-500 to-ink-800',
  'from-ink-900 to-gold-600',
];

function ReviewCard({ review, index }: { review: Review; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 220;
  const meta = review.relativeTime || review.country;

  return (
    <motion.figure
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: 'easeOut' }}
      className="group relative flex h-full flex-col rounded-2xl border border-marble-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-xl"
    >
      <Quote className="pointer-events-none absolute right-5 top-5 h-9 w-9 text-marble-100" />

      {/* Header: avatar + author */}
      <figcaption className="mb-4 flex items-center gap-3">
        <div
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br ${AVATAR_TINTS[index % AVATAR_TINTS.length]} text-sm font-semibold text-white shadow-inner`}
          aria-hidden="true"
        >
          {initials(review.name) || 'G'}
        </div>
        <div className="min-w-0">
          <p className="flex items-center gap-1 font-serif text-base font-semibold text-ink-900">
            <span className="truncate">{review.name}</span>
            <BadgeCheck className="h-4 w-4 shrink-0 text-gold-500" aria-label="Verified" />
          </p>
          {meta && <p className="truncate text-xs text-gray-500">{meta}</p>}
        </div>
      </figcaption>

      {/* Rating + Google source */}
      <div className="mb-3 flex items-center justify-between">
        <Stars value={review.rating} />
        <span className="flex items-center gap-1 text-[11px] font-medium text-gray-400">
          <GoogleGlyph className="h-3.5 w-3.5" /> Google
        </span>
      </div>

      {/* Body */}
      <blockquote
        className={`relative z-10 flex-grow text-sm leading-relaxed text-gray-700 ${
          !expanded && isLong ? 'line-clamp-5' : ''
        }`}
      >
        {review.text}
      </blockquote>

      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 self-start text-xs font-semibold text-gold-600 hover:text-gold-500"
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}

      <span className="mt-5 h-1 w-10 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-300 group-hover:w-16" />
    </motion.figure>
  );
}

export default function Testimonials({ data }: { data: ReviewsData }) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { reviews, rating, count, googleUrl } = data;

  const avgRating = rating ?? 5;
  const displayCount = count ?? reviews.length;

  return (
    <section ref={sectionRef} className="bg-marble-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-2 block text-sm font-bold uppercase tracking-widest text-gold-600">
            Client Stories
          </span>
          <h2 className="mb-4 font-serif text-4xl font-semibold text-ink-900">
            Trusted by International Visitors
          </h2>
          <p className="text-gray-600">
            Read what couples and families from around the world have to say about their experience.
          </p>
        </div>

        {/* Google rating summary bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto mb-12 flex max-w-xl flex-col items-center gap-4 rounded-2xl border border-marble-200 bg-white px-6 py-5 shadow-sm sm:flex-row sm:justify-center sm:gap-6"
        >
          <div className="flex items-center gap-3">
            <GoogleGlyph className="h-8 w-8" />
            <div className="text-left">
              <p className="text-sm font-semibold text-ink-900">Google Reviews</p>
              <p className="text-xs text-gray-500">Verified customer ratings</p>
            </div>
          </div>

          <span className="hidden h-10 w-px bg-marble-200 sm:block" />

          <div className="flex items-center gap-3">
            <span className="font-serif text-3xl font-bold text-ink-900">
              {avgRating.toFixed(1)}
            </span>
            <div>
              <Stars value={avgRating} size="h-5 w-5" />
              <p className="mt-0.5 text-xs text-gray-500">
                Based on {displayCount}+ reviews
              </p>
            </div>
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <ReviewCard key={`${review.name}-${index}`} review={review} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-900 px-6 py-3 text-sm font-medium text-ink-900 transition-colors hover:bg-ink-900 hover:text-white"
          >
            <GoogleGlyph className="h-4 w-4" />
            Read all reviews on Google
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
