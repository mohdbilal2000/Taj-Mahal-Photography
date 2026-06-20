import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import BackToTop from '@/components/BackToTop';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import { blogPosts, getPost, type ArticleBlock } from '@/lib/blog';
import {
  breadcrumbSchema,
  faqSchema,
  webPageSchema,
  speakableSpec,
  graphSchema,
  jsonLd,
  SITE,
} from '@/lib/seo';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `${SITE.url}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

function renderBlock(block: ArticleBlock, i: number) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 key={i} className="font-serif text-2xl md:text-3xl text-ink-900 mt-12 mb-4">
          {block.text}
        </h2>
      );
    case 'h3':
      return (
        <h3 key={i} className="font-serif text-xl text-ink-900 mt-8 mb-3">
          {block.text}
        </h3>
      );
    case 'ul':
      return (
        <ul key={i} className="list-disc pl-6 space-y-2">
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol key={i} className="list-decimal pl-6 space-y-2">
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ol>
      );
    default:
      return (
        <p key={i} className="faq-answer">
          {block.text}
        </p>
      );
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${SITE.url}/blog/${post.slug}`;
  const formattedDate = new Date(post.datePublished).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleNode = {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    url,
    mainEntityOfPage: url,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    image: { '@type': 'ImageObject', url: post.image },
    articleSection: post.category,
    author: { '@id': `${SITE.url}/#photographer` },
    publisher: { '@id': `${SITE.url}/#business` },
    isPartOf: { '@id': `${SITE.url}/blog#blog` },
    inLanguage: 'en-US',
    speakable: speakableSpec(['.quick-answer', '.faq-answer']),
  };

  const graph = graphSchema([
    breadcrumbSchema([
      { name: 'Home', url: SITE.url },
      { name: 'Blog', url: `${SITE.url}/blog` },
      { name: post.title, url },
    ]),
    webPageSchema({
      url,
      name: post.title,
      description: post.excerpt,
      image: post.image,
      lastReviewed: post.dateModified,
      speakableSelectors: ['.quick-answer', '.faq-answer', 'h1', 'h2'],
    }),
    articleNode,
    ...(post.faqs && post.faqs.length
      ? [{ ...faqSchema(post.faqs), '@id': `${url}#faq`, speakable: speakableSpec(['.faq-answer']) }]
      : []),
  ]);

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow bg-white">
        {/* Hero image */}
        <div className="relative h-[40vh] md:h-[52vh] w-full">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-transparent" />
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
          <div className="bg-white rounded-sm border border-marble-200 p-6 md:p-10 shadow-sm">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-gray-500 hover:text-gold-600 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> All articles
            </Link>

            <span className="text-gold-600 text-xs font-bold uppercase tracking-widest">
              {post.category}
            </span>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900 mt-3 mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center text-sm text-gray-500 space-x-3 mb-8">
              <time dateTime={post.datePublished}>{formattedDate}</time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>

            {/* AEO Quick Answer — the passage AI engines preferentially extract */}
            <div className="quick-answer bg-marble-50 border-l-4 border-gold-500 p-5 mb-10">
              <p className="text-ink-900 font-medium leading-relaxed">{post.quickAnswer}</p>
            </div>

            <div className="prose prose-lg prose-slate max-w-none text-gray-600 space-y-6">
              {post.body.map(renderBlock)}
            </div>

            {/* FAQ */}
            {post.faqs && post.faqs.length > 0 && (
              <section className="mt-14 pt-10 border-t border-marble-200">
                <h2 className="font-serif text-2xl text-ink-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {post.faqs.map((faq) => (
                    <div key={faq.question}>
                      <h3 className="font-semibold text-ink-900 mb-2">{faq.question}</h3>
                      <p className="faq-answer text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* CTA */}
            <div className="mt-14 bg-ink-900 text-white rounded-sm p-8 text-center">
              <h2 className="font-serif text-2xl font-semibold mb-3">
                Want a licensed photographer at the Taj Mahal?
              </h2>
              <p className="text-gray-300 mb-6">
                Book an authorized photoshoot and skip the permit hassle entirely.
              </p>
              <Link
                href="/book"
                className="inline-flex items-center px-7 py-3 bg-white text-ink-900 font-medium text-sm tracking-wide uppercase hover:bg-marble-100 transition-colors rounded-sm"
              >
                Book Your Session
              </Link>
            </div>
          </div>
        </article>

        {/* Related */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="font-serif text-2xl text-ink-900 mb-8">Keep reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group bg-white rounded-sm border border-marble-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-ink-900 group-hover:text-gold-600 transition-colors leading-tight">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsApp />
      <BackToTop />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(graph) }} />
    </div>
  );
}
