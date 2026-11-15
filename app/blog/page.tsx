import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import MobileActionBar from '@/components/MobileActionBar';
import BlogExplorer from '@/components/blog/BlogExplorer';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { POSTS, postBySlug } from '@/lib/blog';
import {
  breadcrumbSchema,
  webPageSchema,
  graphSchema,
  jsonLd,
  SITE,
  LAST_UPDATED,
} from '@/lib/seo';

export const metadata: Metadata = {
  title: { absolute: 'Taj Mahal Photography Guides: Permits, Timing, Costs & Trip Planning' },
  description:
    'Field notes from a government-licensed Taj Mahal photographer in Agra: permit rules, light by month, costs, what to wear, plus photo locations worldwide and how to plan a photography trip to India.',
  alternates: { canonical: `${SITE.url}/blog` },
  openGraph: {
    title: 'Taj Mahal Photography Blog',
    description:
      'Permit rules, timing, outfits, locations, trip planning and the craft of photographing places you love.',
    url: `${SITE.url}/blog`,
  },
};

/** The three questions nearly everyone arrives with. */
const START_HERE = [
  { slug: 'taj-mahal-photography-permit', caption: 'rules first' },
  { slug: 'taj-mahal-photographer-cost', caption: 'what it costs' },
  { slug: 'best-time-to-photograph-taj-mahal', caption: 'when to go' },
] as const;

const CATEGORY_ORDER = [
  'Rules & permits',
  'Planning',
  'Locations',
  'Technique',
  'India from abroad',
  'World locations',
  'Photographer mindset',
  'Collaborations',
];

export default function BlogPage() {
  const startPosts = START_HERE.map((s) => ({ ...s, post: postBySlug(s.slug)! })).filter((s) => s.post);
  const categories = CATEGORY_ORDER.map((name) => ({
    name,
    count: POSTS.filter((p) => p.category === name).length,
  })).filter((c) => c.count > 0);
  const explorerPosts = POSTS.map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    image: p.image,
    imageAlt: p.imageAlt,
    updated: p.updated,
    readingMinutes: p.readingMinutes,
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Header onLight />

      <main className="flex-grow bg-marble-50">
        <div className="bg-marble-100 pt-28 md:pt-32">
          <div className="shell pb-14 md:pb-20">
            <span className="collage-label eyebrow text-gold-700">Field notes from Agra</span>
            <h1 className="h1-fluid mt-5 max-w-3xl font-serif font-medium italic text-ink-900 text-balance">
              Guides for photographing the places you love
            </h1>
            <p className="lead mt-6 max-w-2xl text-ink-700 text-pretty">
              Permits, light, costs and outfits from the photographer who stands at the Taj Mahal
              gate most mornings. Plus where to shoot in your own country, how to plan India, and why
              attachment beats equipment.
            </p>
          </div>
        </div>

        {/* Start here — the three questions almost everyone arrives with. */}
        <section className="shell -mt-8 md:-mt-12" aria-label="Start here">
          <div className="reveal reveal-stagger collage-grid grid gap-6 sm:grid-cols-3 sm:gap-7">
            {startPosts.map(({ post, caption }) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="collage-card taped group relative flex flex-col">
                <div className="collage-media img-zoom relative aspect-[4/3]">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    priority
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="collage-body">
                  <p className="collage-caption text-2xl text-gold-700">{caption}</p>
                  <h2 className="mt-2 font-serif text-lg font-semibold leading-snug text-ink-900 transition-colors group-hover:text-gold-700 text-pretty">
                    {post.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="shell section" aria-label="All guides">
          <BlogExplorer posts={explorerPosts} categories={categories} />
        </section>

        {/* Short answers, lifted from each article — the snippet surface. */}
        <section className="border-t hairline bg-white py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="h3-fluid font-serif font-semibold text-ink-900 mb-3">Quick answers</h2>
            <p className="mb-10 text-ink-700">One paragraph each. The full reasoning is in the guide behind it.</p>

            <div className="divide-y hairline">
              {POSTS.map((post) => (
                <div key={post.slug} className="reveal py-6">
                  <h3 className="font-serif text-lg font-semibold text-ink-900 text-pretty">{post.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-700 text-pretty">{post.answer}</p>
                  <Link href={`/blog/${post.slug}`} className="link-sweep mt-3 inline-block py-1 text-sm font-semibold text-gold-700">
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
                  author: { '@id': post.byline ? `${SITE.url}/#business` : `${SITE.url}/#photographer` },
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
