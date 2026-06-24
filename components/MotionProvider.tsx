'use client';

import { MotionConfig } from 'motion/react';

/**
 * Makes every motion/react animation on the site honour the user's
 * `prefers-reduced-motion` setting. CSS keyframe/transition animations are
 * handled in globals.css; this covers the JS-driven framer animations
 * (hero parallax, scroll reveals, etc.).
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
