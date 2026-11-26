import Image from 'next/image';
import Link from 'next/link';
import { postBySlug } from '@/lib/blog';

/** The guides a first-time visitor most needs — and a direct link to each, so no guide is only reachable through the blog index. */
const PICKS = [
  'taj-mahal-photography-permit',
  'taj-mahal-photographer-cost',
  'best-time-to-photograph-taj-mahal',
  'best-photo-spots-taj-mahal',
  'india-photography-trip-from-usa',
  'why-photographers-fail-it-is-not-the-gear',
] as const;

export default function LatestGuides() {
  const posts = PICKS.map((slug) => postBySlug(slug)).filter((p): p is NonNullable<typeof p> => Boolean(p));
  return (
    <section className="section bg-marble-100" aria-label="Guides">
      <div className="shell">
        <div className="section-head">
          <span className="collage-label eyebrow text-gold-700">Field notes</span>
          <h2 className="h2-fluid font-serif font-medium italic text-ink-900 text-balance">Read before you go</h2>
          <p className="max-w-2xl text-ink-700 text-pretty">
            Permit rules, costs, the best light and trip planning, from the photographer who is at the gate most mornings.
          </p>
        </div>
        <div className="reveal reveal-stagger collage-grid grid gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="collage-card group flex flex-col">
              <div className="collage-media img-zoom relative aspect-[16/10]">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="collage-body">
                <span className="eyebrow text-gold-700">{post.category}</span>
                <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-ink-900 transition-colors group-hover:text-gold-700 text-pretty">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center">
          <Link href="/blog" className="btn btn-outline">All guides</Link>
          <Link href="/plans" className="btn btn-gold ml-3">All plans &amp; prices</Link>
        </p>
      </div>
    </section>
  );
}
