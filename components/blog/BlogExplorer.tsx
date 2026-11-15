'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useId, useMemo, useState } from 'react';

export type ExplorerPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  imageAlt: string;
  updated: string;
  readingMinutes: number;
};

function longDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

/**
 * Filter and search over every guide.
 *
 * Every card is in the HTML from the first byte — filtering only toggles the
 * `hidden` attribute — so crawlers, AI fetchers and anyone with scripting off
 * see the whole library.
 */
export default function BlogExplorer({
  posts,
  categories,
}: {
  posts: ExplorerPost[];
  categories: { name: string; count: number }[];
}) {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const searchId = useId();

  const q = query.trim().toLowerCase();
  const visible = useMemo(
    () =>
      new Set(
        posts
          .filter((p) => (category === 'All' || p.category === category) && (!q || `${p.title} ${p.excerpt}`.toLowerCase().includes(q)))
          .map((p) => p.slug),
      ),
    [posts, category, q],
  );

  return (
    <div>
      <div className="mb-8 flex flex-col gap-5">
        <div>
          <label htmlFor={searchId} className="sr-only">Search the guides</label>
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search: permit, sunrise, Mexico, what to wear…"
            className="w-full rounded-full border border-ink-900/15 bg-white px-5 py-3 text-base text-ink-900 outline-none focus:border-gold-600 focus:ring-2 focus:ring-gold-400/40 sm:max-w-md"
          />
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by topic">
          {[{ name: 'All', count: posts.length }, ...categories].map((c) => {
            const on = category === c.name;
            return (
              <button
                key={c.name}
                type="button"
                aria-pressed={on}
                onClick={() => setCategory(c.name)}
                className={`min-h-[2.75rem] rounded-full border px-4 text-sm font-semibold transition-colors ${
                  on ? 'border-ink-900 bg-ink-900 text-white' : 'border-ink-900/15 bg-white text-ink-700 hover:border-ink-900/40'
                }`}
              >
                {c.name} <span className={on ? 'text-white/70' : 'text-ink-400'}>{c.count}</span>
              </button>
            );
          })}
        </div>
        <p className="text-sm text-ink-500" aria-live="polite">
          {visible.size === 0 ? 'No guides match yet. Try fewer words.' : `Showing ${visible.size} of ${posts.length} guides`}
        </p>
      </div>

      <div className="collage-grid grid gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            hidden={!visible.has(post.slug)}
            className="collage-card group flex flex-col"
          >
            <div className="collage-media img-zoom relative aspect-[16/10]">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="scrim-card absolute inset-0" />
              <span className="absolute left-3 top-3 rounded-full bg-white/92 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-900 backdrop-blur">
                {post.category}
              </span>
            </div>
            <div className="collage-body flex flex-1 flex-col">
              <h2 className="font-serif text-lg font-semibold leading-snug text-ink-900 transition-colors group-hover:text-gold-600 text-pretty">
                {post.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700 line-clamp-3">{post.excerpt}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-ink-400">
                <time dateTime={post.updated}>{longDate(post.updated)}</time>
                <span aria-hidden="true">·</span>
                <span>{post.readingMinutes} min</span>
                <span className="ml-auto text-gold-600 opacity-0 transition-opacity group-hover:opacity-100">Read →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
