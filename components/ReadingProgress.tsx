'use client';

import { useEffect, useState } from 'react';

/**
 * A hairline that fills as the article scrolls.
 *
 * Driven by scroll position rather than an animation library: it is one
 * number and one transform, so it stays smooth on the cheap Android phones
 * most of our traffic arrives on.
 */
export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent" aria-hidden="true">
      <div
        className="h-full bg-gold-500 origin-left"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
