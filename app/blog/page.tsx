import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import MobileActionBar from '@/components/MobileActionBar';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { POSTS, type BlogPost } from '@/lib/blog';
import {
  breadcrumbSchema,
  webPageSchema,
  graphSchema,
  jsonLd,
  SITE,
  LAST_UPDATED,
} from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Taj Mahal Photography Blog | Permits, Timing, Outfits & Locations',
  description:
    'Practical guides from a government-licensed Taj Mahal photographer in Agra: permit rules, the best light by month, what to wear against white marble, camera settings and a Delhi day-trip plan.',
  alternates: { canonical: `${SITE.url}/blog` },
  openGraph: {
    title: 'Taj Mahal Photography Blog',
    description:
      'Permit rules, timing, outfits, locations and camera settings — written by the photographer who shoots there daily.',
    url: `${SITE.url}/blog`,
  },
};

const CATEGORIES = ['Rules & permits', 'Planning', 'Locations', 'Technique'] as const;

function longDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

/** Cards share one shape so the grid reads as a set, not a pile. */
function PostCard({ post, priority }: { post: BlogPost; priority?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="card-lift group flex flex-col overflow-hidden rounded-sm border hairline bg-white"
    >
      <div className="img-zoom relative aspect-[16/10]">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="scrim-card absolute inset-0" />
        <span className="absolute left-3 top-3 rounded-full bg-white/92 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-900 backdrop-blur">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h2 className="font-serif text-lg font-semibold leading-snug text-ink-900 transition-colors group-hover:text-gold-600 text-pretty">
          {post.title}
        </h2>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center gap-2 text-xs text-ink-400">
          <time dateTime={post.updated}>{longDate(post.updated)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readingMinutes} min</span>
          <span className="ml-auto text-gold-600 opacity-0 transition-opacity group-hover:opacity-100">
            Read →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const [featured, ...rest] = POSTS;

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />

      <main className="flex-grow bg-marble-50">
        <div className="bg-ink-900 text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
            <span className="eyebrow text-gold-400">Field notes from Agra</span>
            <h1 className="h1-fluid font-serif font-semibold mt-3 mb-5 text-balance">
              Taj Mahal Photography Guides
            </h1>
            <p className="lead mx-auto max-w-2xl text-marble-300 text-pretty">
              Permits, light, outfits and locations — answered by the photographer who stands at
              the gate at 5:30 every morning, not by a travel blog that has never been.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {CATEGORIES.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-white/20 px-3 py-1 text-xs tracking-wide text-marble-300"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Featured — one article gets the wide treatment. */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-12">
          <Link
            href={`/blog/${featured.slug}`}
            className="card-lift group grid overflow-hidden rounded-sm border hairline bg-white md:grid-cols-2"
          >
            <div className="img-zoom relative aspect-[16/10] md:aspect-auto md:min-h-[320px]">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-10">
              <span className="eyebrow text-gold-700">Most asked · {featured.category}</span>
              <h2 className="h3-fluid font-serif font-semibold text-ink-900 mt-3 text-balance transition-colors group-hover:text-gold-600">
                {featured.title}
              </h2>
              <p className="mt-4 leading-relaxed text-ink-700 text-pretty">{featured.excerpt}</p>
              <p className="mt-6 text-sm font-semibold text-gold-700">
                Read the guide
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </p>
            </div>
          </Link>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        {/* Short answers, lifted from each article — the snippet surface. */}
        <section className="border-t hairline bg-white py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="h3-fluid font-serif font-semibold text-ink-900 mb-3">
              Quick answers
            </h2>
            <p className="mb-10 text-ink-700">
              One paragraph each. The full reasoning is in the guide behind it.
            </p>

            <div className="divide-y hairline">
              {POSTS.map((post) => (
                <div key={post.slug} className="py-6">
                  <h3 className="font-serif text-lg font-semibold text-ink-900 text-pretty">
                    {post.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink-700 text-pretty">{post.answer}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="link-sweep mt-3 inline-block py-1 text-sm font-semibold text-gold-700"
                  >
                    Full guide →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyWhatsApp />
      <MobileActionBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            graphSchema([
              breadcrumbSchema([
                { name: 'Home', url: SITE.url },
                { name: 'Blog', url: `${SITE.url}/blog` },
              ]),
              webPageSchema({
                url: `${SITE.url}/blog`,
                name: 'Taj Mahal Photography Blog',
                description:
                  'Permit rules, timing, outfits, locations and camera settings from a government-licensed Taj Mahal photographer.',
                image: SITE.image,
                lastReviewed: LAST_UPDATED,
              }),
              {
                '@type': 'Blog',
                '@id': `${SITE.url}/blog#blog`,
                name: 'Taj Mahal Photography Blog',
                description:
                  'Practical guides to photographing the Taj Mahal and Agra, written by a licensed local photographer.',
                url: `${SITE.url}/blog`,
                inLanguage: 'en',
                publisher: { '@id': `${SITE.url}/#business` },
                blogPost: POSTS.map((post) => ({
                  '@type': 'BlogPosting',
                  '@id': `${SITE.url}/blog/${post.slug}#article`,
                  headline: post.title,
                  description: post.excerpt,
                  url: `${SITE.url}/blog/${post.slug}`,
                  datePublished: post.published,
                  dateModified: post.updated,
                  image: `${SITE.url}${post.image}`,
                  author: { '@id': `${SITE.url}/#photographer` },
                  publisher: { '@id': `${SITE.url}/#business` },
                })),
              },
              {
                '@type': 'ItemList',
                '@id': `${SITE.url}/blog#list`,
                name: 'Taj Mahal photography guides',
                numberOfItems: POSTS.length,
                itemListElement: POSTS.map((post, i) => ({
                  '@type': 'ListItem',
                  position: i + 1,
                  url: `${SITE.url}/blog/${post.slug}`,
                  name: post.title,
                })),
              },
            ]),
          ),
        }}
      />
    </div>
  );
}
