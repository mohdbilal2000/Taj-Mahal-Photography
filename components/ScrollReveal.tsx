'use client';

import { useEffect } from 'react';

/**
 * Reveals anything marked `.reveal` as it scrolls into view.
 *
 * The flag goes on <html> and not on the elements, so the markup ships
 * visible: if scripts never run, nothing is hidden. Only once this mounts
 * does the CSS start from opacity 0, and the observer puts each element
 * back. One observer for the whole document, re-scanned on route change.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    root.dataset.reveal = 'on';

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
          }
        }
      },
      // Fire a little before the element arrives, so it is already settling
      // by the time it is properly on screen.
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    );

    const scan = () => {
      for (const el of document.querySelectorAll('.reveal:not(.is-in)')) {
        // Anything already on screen at load should not animate in late.
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.9) el.classList.add('is-in');
        else observer.observe(el);
      }
    };

    scan();
    const mutations = new MutationObserver(scan);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
      delete root.dataset.reveal;
    };
  }, []);

  return null;
}
