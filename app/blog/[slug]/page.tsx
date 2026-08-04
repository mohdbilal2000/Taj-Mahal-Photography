import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import {
  articleSchema,
  breadcrumbSchema,
  webPageSchema,
  graphSchema,
  jsonLd,
  SITE,
} from '@/lib/seo';
import { blogPostBySlug, blogPosts } from '@/lib/blog';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Taj Mahal Photography Blog`,
    description: post.excerpt,
    alternates: { canonical: `${SITE.url}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE.url}/blog/${post.slug}`,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow bg-white">
        {/* Hero */}
        <div className="bg-ink-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-gold-400 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <span className="bg-gold-500 text-ink-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              {post.category}
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-semibold mt-6 mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center text-sm text-gray-400 space-x-3">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="relative h-72 md:h-96 rounded-sm overflow-hidden shadow-xl">
            <Image src={post.image} alt={post.title} fill className="object-cover" referrerPolicy="no-referrer" priority />
          </div>
        </div>

        {/* Body */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <article className="prose prose-lg prose-slate max-w-none">
            {post.sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="font-serif text-2xl md:text-3xl text-ink-900 mt-10 mb-4">{section.heading}</h2>
                )}
                {section.paragraphs?.map((p, j) => <p key={j}>{p}</p>)}
                {section.list && (
                  <ul>
                    {section.list.map((item, k) => (
                      <li key={k}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="not-prose text-center mt-14 p-8 bg-marble-50 border border-marble-200 rounded-sm">
              <h3 className="font-serif text-2xl text-ink-900 mb-3">Ready to book your Taj Mahal photoshoot?</h3>
              <p className="text-gray-600 mb-6">
                Secure a government-licensed photographer and get availability confirmed on WhatsApp within 10 minutes.
              </p>
              <Link
                href="/book"
                className="inline-flex items-center px-8 py-4 bg-ink-900 text-white font-medium text-sm tracking-wide uppercase hover:bg-ink-800 transition-colors rounded-sm"
              >
                Check Availability
              </Link>
            </div>
          </article>

          {/* Related posts */}
          {related.length > 0 && (
            <div className="mt-20 pt-12 border-t border-marble-200">
              <h3 className="font-serif text-2xl text-ink-900 mb-8">More from the Blog</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group block bg-white rounded-sm border border-marble-200 overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-36 overflow-hidden">
                      <Image
                        src={r.image}
                        alt={r.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-serif text-sm font-semibold text-ink-900 group-hover:text-gold-600 transition-colors leading-snug">
                        {r.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <StickyWhatsApp />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            graphSchema([
              breadcrumbSchema([
                { name: 'Home', url: SITE.url },
                { name: 'Blog', url: `${SITE.url}/blog` },
                { name: post.title, url: `${SITE.url}/blog/${post.slug}` },
              ]),
              webPageSchema({
                url: `${SITE.url}/blog/${post.slug}`,
                name: post.title,
                description: post.excerpt,
                image: post.image,
                lastReviewed: post.date,
                isPartOf: `${SITE.url}/blog#blog`,
              }),
              articleSchema(post.title, post.excerpt, `${SITE.url}/blog/${post.slug}`, post.date, post.image),
            ]),
          ),
        }}
      />
    </div>
  );
}
