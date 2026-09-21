'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY, GALLERY_FILTERS, matchesFilter, planFor, type GalleryImage } from '@/lib/gallery';
import Price from './Price';

/**
 * A mosaic rather than a grid, and a shop rather than a wall.
 *
 * The old gallery was a single column of full-width photographs: identical
 * tiles, no hierarchy, and nothing telling a visitor what they were looking
 * at or how to buy it. Here the strongest frames take wider or taller tiles,
 * and every photograph carries the package that produced it — hovering, or
 * opening one, gives its location, its package and its price, so the way out
 * of the gallery is a booking rather than the back button.
 */
export default function PortfolioGallery() {
  const [filter, setFilter] = useState<string>('all');
  const [open, setOpen] = useState<number | null>(null);

  const shown = useMemo(() => GALLERY.filter((g) => matchesFilter(g, filter)), [filter]);

  const move = useCallback(
    (step: number) => setOpen((i) => (i === null ? null : (i + step + shown.length) % shown.length)),
    [shown.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') move(1);
      if (e.key === 'ArrowLeft') move(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, move]);

  const active = open === null ? null : shown[open];
  const activePlan = active ? planFor(active) : undefined;

  return (
    <>
      {/* Filter by what a guest would actually book, not by mood words. */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {GALLERY_FILTERS.map((f) => {
          const count = GALLERY.filter((g) => matchesFilter(g, f.id)).length;
          const on = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => {
                setFilter(f.id);
                setOpen(null);
              }}
              aria-pressed={on}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                on
                  ? 'bg-ink-900 text-white border-ink-900'
                  : 'bg-transparent text-ink-700 border-marble-300 hover:border-ink-900'
              }`}
            >
              {f.label}
              <span className={`ml-2 text-xs ${on ? 'text-white/50' : 'text-ink-400'}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-flow-row-dense grid-cols-2 lg:grid-cols-4 auto-rows-[150px] sm:auto-rows-[200px] gap-3 sm:gap-4">
        {shown.map((img, i) => {
          const plan = planFor(img);
          return (
            <motion.button
              key={img.src}
              type="button"
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: Math.min(i, 8) * 0.03 }}
              onClick={() => setOpen(i)}
              aria-label={`Open ${img.alt}`}
              className={`group relative overflow-hidden rounded-sm bg-marble-200 img-zoom text-left ${
                img.portrait ? 'row-span-2' : ''
              } ${img.feature ? 'col-span-2' : ''}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-0 scrim-card opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="text-white text-sm font-semibold leading-tight">{plan?.name}</p>
                <p className="text-white/70 text-xs mt-0.5 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {img.place}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink-900/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
          >
            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {[
              { dir: -1, Icon: ChevronLeft, side: 'left-2 sm:left-6', label: 'Previous photograph' },
              { dir: 1, Icon: ChevronRight, side: 'right-2 sm:right-6', label: 'Next photograph' },
            ].map(({ dir, Icon, side, label }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                onClick={(e) => {
                  e.stopPropagation();
                  move(dir);
                }}
                className={`absolute ${side} top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors`}
              >
                <Icon className="w-5 h-5" />
              </button>
            ))}

            <motion.figure
              key={active.src}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full"
            >
              <div className="relative w-full max-h-[70svh] aspect-[4/3] sm:aspect-auto sm:h-[70svh]">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              <figcaption className="mt-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <p className="text-white/60 text-xs flex items-center gap-1.5 mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {active.place}
                    <span className="text-white/30">·</span>
                    {open! + 1} of {shown.length}
                  </p>
                  <p className="text-white text-lg font-serif">{active.alt}</p>
                </div>

                {activePlan && (
                  <Link
                    href={`/book?plan=${activePlan.id}`}
                    className="group flex-shrink-0 inline-flex items-center gap-3 px-5 py-3 bg-gold-500 text-ink-900 rounded-sm font-semibold text-sm hover:bg-gold-400 transition-colors"
                  >
                    <span>
                      Book the {activePlan.name}
                      <span className="block text-xs font-normal opacity-70">
                        {activePlan.fromPrice ? 'from ' : ''}
                        <Price planId={activePlan.id} usd={activePlan.price} hideCode />
                      </span>
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                )}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
