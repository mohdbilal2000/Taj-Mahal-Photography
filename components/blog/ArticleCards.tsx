import Image from 'next/image';
import Link from 'next/link';
import Price from '@/components/Price';
import { SITE } from '@/lib/seo';
import type { BlogPost } from '@/lib/blog';
import { imageForPlan, type Plan } from '@/lib/plans';
import type { Source } from '@/lib/blog-sources';

/**
 * The cards that sit between and after the paragraphs.
 *
 * A long article needs places to stop. Each of these is a pause that also
 * does a job: offer the package that fits what the reader is learning,
 * point to the next thing worth reading, show where the facts came from, and
 * introduce the studio once the reader has already got what they came for.
 */

const waLink = (text: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

/** Mid-article: the package that matches the topic, as a small print. */
export function PlanPause({ plan, postTitle }: { plan: Plan; postTitle: string }) {
  return (
    <aside aria-label="A package that fits this guide" className="my-12">
      <div className="collage-card taped relative mx-auto max-w-xl sm:grid sm:max-w-none sm:grid-cols-[minmax(0,12rem)_1fr] sm:gap-5" style={{ ['--tilt' as string]: '-0.8deg' }}>
        <div className="collage-media relative aspect-[4/3] sm:aspect-auto sm:min-h-[10rem]">
          <Image src={imageForPlan(plan)} alt={plan.name} fill sizes="(min-width: 640px) 12rem, 90vw" className="object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="collage-body flex flex-col justify-center">
          <p className="collage-caption text-2xl text-gold-700">pause for a second…</p>
          <h3 className="mt-2 font-serif text-xl font-semibold leading-snug text-ink-900 text-balance">{plan.name}</h3>
          <p className="mt-1 text-sm text-ink-700 text-pretty">{plan.tagline}</p>
          <p className="mt-3 font-serif text-2xl font-semibold text-ink-900">
            <Price usd={plan.price} fromPrice={plan.fromPrice} hideCode />
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              className="btn btn-whatsapp btn-sm"
              href={waLink(`Hi, I was reading "${postTitle}" and I am interested in the ${plan.name}. My dates are:`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ask on WhatsApp
            </a>
            <Link className="btn btn-outline btn-sm" href={`/services/${plan.id}`}>See what is included</Link>
          </div>
        </div>
      </div>
    </aside>
  );
}

/** Mid-article: keep them reading, with a related guide as a taped print. */
export function ReadNextPause({ post }: { post: BlogPost }) {
  return (
    <aside aria-label="Related guide" className="my-12">
      <Link
        href={`/blog/${post.slug}`}
        className="collage-card group relative mx-auto block max-w-xl sm:grid sm:max-w-none sm:grid-cols-[1fr_minmax(0,12rem)] sm:gap-5"
        style={{ ['--tilt' as string]: '0.9deg' }}
      >
        <div className="collage-body order-2 flex flex-col justify-center sm:order-1">
          <p className="collage-caption text-2xl text-gold-700">while you’re here…</p>
          <span className="eyebrow mt-2 text-ink-400">{post.category}</span>
          <h3 className="mt-1 font-serif text-xl font-semibold leading-snug text-ink-900 text-balance transition-colors group-hover:text-gold-700">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-ink-700 text-pretty line-clamp-2">{post.excerpt}</p>
          <p className="mt-3 text-sm font-semibold text-gold-700">
            Read it next <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </p>
        </div>
        <div className="collage-media img-zoom relative order-1 aspect-[4/3] sm:order-2 sm:aspect-auto sm:min-h-[9rem]">
          <Image src={post.image} alt={post.imageAlt} fill sizes="(min-width: 640px) 12rem, 90vw" className="object-cover" referrerPolicy="no-referrer" />
        </div>
      </Link>
    </aside>
  );
}


function host(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

/** End of article: where the facts came from. Two or three, not twenty. */
export function SourcesCard({ sources }: { sources: Source[] }) {
  if (!sources.length) return null;
  return (
    <section aria-label="Sources" className="rounded-2xl border hairline bg-white p-6 sm:p-8">
      <p className="eyebrow text-gold-700">Where this comes from</p>
      <h2 className="mt-2 font-serif text-2xl font-semibold text-ink-900">Sources worth bookmarking</h2>
      <p className="mt-2 text-sm text-ink-700">
        Rules, fees and timings change. These are the official pages to check before you travel.
      </p>
      <ol className="mt-5 divide-y hairline">
        {sources.map((s, i) => (
          <li key={s.url}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[3.5rem] items-start gap-4 py-4"
            >
              <span className="font-serif text-xl italic text-gold-600">{String(i + 1).padStart(2, '0')}</span>
              <span className="min-w-0 flex-1">
                <span className="block font-semibold text-ink-900 transition-colors group-hover:text-gold-700 text-pretty">{s.label}</span>
                {s.note && <span className="mt-0.5 block text-sm text-ink-700 text-pretty">{s.note}</span>}
                <span className="mt-1 block truncate text-xs text-ink-400">{host(s.url)} ↗</span>
              </span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

/** End of article: the studio, introduced last. */
export function StudioCard({ pitch }: { pitch: NonNullable<BlogPost['pitch']> }) {
  return (
    <aside aria-label="About the studio" className="collage-card taped relative flex h-full flex-col" style={{ ['--tilt' as string]: '-0.6deg' }}>
      <div className="collage-body flex flex-1 flex-col">
        <p className="collage-caption text-2xl text-gold-700">from the studio</p>
        <h2 className="mt-2 font-serif text-xl font-semibold leading-snug text-ink-900 text-balance">{pitch.heading}</h2>
        {pitch.body.map((p) => (
          <p key={p.slice(0, 40)} className="mt-3 text-sm leading-relaxed text-ink-700 text-pretty">{p}</p>
        ))}
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          <a className="btn btn-whatsapp btn-sm" href={waLink(pitch.whatsappText)} target="_blank" rel="noopener noreferrer">
            Message us on WhatsApp
          </a>
          <Link className="btn btn-outline btn-sm" href="/services">Packages and prices</Link>
        </div>
      </div>
    </aside>
  );
}

/**
 * The sister company. A visible, honest cross-link: it is a related business
 * under the same ownership, and the card says so. Shown only on guides where
 * a reader planning more than the photographs would find it useful.
 */
export function SisterCard() {
  return (
    <aside aria-label="Our sister company" className="collage-card relative flex h-full flex-col" style={{ ['--tilt' as string]: '0.7deg' }}>
      <div className="collage-body flex flex-1 flex-col">
        <p className="collage-caption text-2xl text-gold-700">planning more than photos?</p>
        <h2 className="mt-2 font-serif text-xl font-semibold leading-snug text-ink-900 text-balance">Guide India Tours</h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-700 text-pretty">
          Our sister company, based in Agra, has run private tours with government-licensed guides
          since 2004: from same-day Delhi to Agra trips to multi-day Golden Triangle itineraries.
          Pair a Taj Mahal sunrise shoot with a trip that is arranged end to end.
        </p>
        <div className="mt-auto pt-5">
          <a className="btn btn-outline btn-sm" href="https://www.guideindiatours.com" target="_blank" rel="noopener">
            Visit GuideIndiaTours.com <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </aside>
  );
}

/** Who wrote it — one line of provenance rather than a biography. */
export function AuthorCard({ byline }: { byline?: string }) {
  return (
    <section aria-label="About the author" className="flex flex-wrap items-center gap-x-6 gap-y-2 rounded-xl border hairline bg-marble-50 px-5 py-4 text-sm text-ink-700">
      {byline ? (
        <p className="text-pretty">
          <span className="font-semibold text-ink-900">{byline}.</span> Compiled from the official sources
          listed above. We photograph in Agra; for places elsewhere we point you to the authority that
          sets the rules.
        </p>
      ) : (
        <p className="text-pretty">
          <Link href="/team/danish-iqbal" className="link-sweep font-semibold text-ink-900">Danish Iqbal</Link>
          {' '}is the Ministry of Tourism licensed photographer behind these guides, and photographs at the Taj Mahal most mornings.
        </p>
      )}
    </section>
  );
}
