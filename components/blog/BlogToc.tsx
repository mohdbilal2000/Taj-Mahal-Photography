'use client';

import { useEffect, useState } from 'react';

export type TocItem = { id: string; label: string };

/**
 * Contents for a long article.
 *
 * Desktop: a sticky rail down the left that marks the section you are in.
 * Phone: a collapsed card above the text, so the reader can see how long the
 * piece is without it pushing the first paragraph off the screen. Both lists
 * are real anchor links, so it works with scripting off.
 */
export default function BlogToc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? '');

  useEffect(() => {
    const targets = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!targets.length || typeof IntersectionObserver === 'undefined') return;

    // A section is "current" once its heading crosses the upper third of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          const top = visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
          setActive(top.target.id);
        }
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [items]);

  const list = (
    <ol className="space-y-1">
      {items.map((item, i) => {
        const on = item.id === active;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={on ? 'location' : undefined}
              className={`flex min-h-[2.5rem] items-baseline gap-3 rounded-md px-2 py-2 text-sm leading-snug transition-colors ${
                on ? 'bg-gold-400/15 text-ink-900 font-semibold' : 'text-ink-700 hover:text-ink-900'
              }`}
            >
              <span className={`font-serif italic tabular-nums ${on ? 'text-gold-700' : 'text-gold-600/70'}`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-pretty">{item.label}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );

  return (
    <>
      <nav aria-label="On this page" className="mb-10 lg:hidden">
        <details className="group rounded-xl border hairline bg-white">
          <summary className="flex min-h-[3rem] cursor-pointer list-none items-center justify-between gap-4 px-4 text-sm font-semibold text-ink-900">
            <span>
              In this guide <span className="font-normal text-ink-500">· {items.length} sections</span>
            </span>
            <span aria-hidden="true" className="text-gold-600 transition-transform duration-300 group-open:rotate-45">+</span>
          </summary>
          <div className="border-t hairline px-2 py-2">{list}</div>
        </details>
      </nav>

      <nav aria-label="Contents" className="sticky top-28 hidden lg:block">
        <p className="eyebrow mb-3 text-ink-400">In this guide</p>
        {list}
      </nav>
    </>
  );
}
