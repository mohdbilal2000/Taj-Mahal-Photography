import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import MobileActionBar from '@/components/MobileActionBar';
import Price from '@/components/Price';
import InrRateNote from '@/components/InrRateNote';
import QuickBook from '@/components/QuickBook';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import packagesData from '@/lib/packages.json';
import { PLANS, planById, DEPOSIT_NOTE, imageForPlan } from '@/lib/plans';
import { DELIVERY, SITE, LAST_UPDATED, breadcrumbSchema, webPageSchema, graphSchema, jsonLd } from '@/lib/seo';
import { fillRates } from '@/lib/rates';

export const metadata: Metadata = {
  title: { absolute: fillRates('Plans & Prices: Taj Mahal Photography Packages from {usd:min}') },
  description:
    fillRates('Every Taj Mahal photography plan in one place: solo from {usd:solo-photoshoot}, sunrise {usd:sunrise}, romantic couple {usd:romantic-couple-shoot}, pre-wedding, guide + photo tours and same-day luxury tours, with what is included and how to choose.'),
  alternates: { canonical: `${SITE.url}/plans` },
  openGraph: {
    title: 'Plans & Prices | Taj Mahal Photography',
    description: 'Compare every package, see what is included, and book on WhatsApp in a minute.',
    url: `${SITE.url}/plans`,
  },
};

const GROUPS = [
  {
    id: 'photography',
    title: 'Photography sessions',
    blurb: 'A licensed photographer with you throughout, permit included. Inside the Taj Mahal a guide is not permitted alongside a photographer, so these are photography-only.',
    ids: ['solo-photoshoot', 'sunrise', 'romantic-couple-shoot', 'pre-wedding'],
  },
  {
    id: 'guide-photo',
    title: 'Guide + Photo tours',
    blurb: 'A licensed local guide for Agra Fort and the other monuments, plus a photographer for the pictures.',
    ids: ['guided-photo-tour-small', 'guided-photo-tour-large'],
  },
  {
    id: 'guide-car',
    title: 'Guide + car',
    blurb: 'A private car and a licensed guide for the day. No photographer, so you shoot on your own camera.',
    ids: ['transport-guide'],
  },
  {
    id: 'full-days',
    title: 'Full days in Agra',
    blurb: 'More time, more locations and more frames: the Taj Mahal, Agra Fort and the back-side sunset.',
    ids: ['taj-agra-fort', 'full-day'],
  },
  {
    id: 'luxury',
    title: 'Same-day luxury from Delhi',
    blurb: 'Leave Delhi before dawn and be back by evening. Vehicle, guide, photographer, tickets and a golf cart are all included.',
    ids: ['sunrise-luxury-innova', 'sunrise-luxury-urbania'],
  },
] as const;

const packageById = (id: string) => packagesData.packages.find((p) => p.id === id);

export default function PlansPage() {
  const all = GROUPS.flatMap((g) => g.ids).map((id) => planById(id)!).filter(Boolean);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onLight />

      <main className="flex-grow bg-marble-50">
        <div className="bg-marble-100 pt-28 md:pt-32">
          <div className="shell pb-14 md:pb-20">
            <span className="collage-label eyebrow text-gold-700">Plans &amp; prices</span>
            <h1 className="h1-fluid mt-5 max-w-3xl font-serif font-medium italic text-ink-900 text-balance">
              Pick the plan that fits your day
            </h1>
            <p className="lead mt-6 max-w-2xl text-ink-700 text-pretty">
              From a one-hour solo portrait to a same-day luxury tour from Delhi. Every plan includes the official
              permit where photography is involved, and {DELIVERY.phrase} delivery of your edited photos.
            </p>
            <nav aria-label="Jump to a group of plans" className="mt-8 flex flex-wrap gap-2">
              {GROUPS.map((g) => (
                <a
                  key={g.id}
                  href={`#${g.id}`}
                  className="inline-flex min-h-[2.75rem] items-center rounded-full border border-ink-900/15 bg-white px-4 text-sm font-semibold text-ink-700 transition-colors hover:border-ink-900/40"
                >
                  {g.title}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {GROUPS.map((group) => (
          <section key={group.id} id={group.id} className="shell section scroll-mt-28">
            <div className="section-head max-w-2xl">
              <h2 className="h3-fluid font-serif font-semibold text-ink-900 text-balance">{group.title}</h2>
              <p className="text-ink-700 text-pretty">{group.blurb}</p>
            </div>

            <div className="reveal reveal-stagger collage-grid grid gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
              {group.ids.map((id) => {
                const plan = planById(id)!;
                const details = packageById(id)?.includes.slice(0, 3) ?? [plan.tagline];
                return (
                  <article key={id} className="collage-card flex flex-col">
                    <Link href={`/services/${id}`} className="collage-media img-zoom relative block aspect-[4/3]">
                      <Image
                        src={imageForPlan(plan)}
                        alt={plan.name}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                      {plan.badge && (
                        <span className="absolute left-3 top-3 rounded-full bg-white/92 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-900 backdrop-blur">
                          {plan.badge}
                        </span>
                      )}
                    </Link>
                    <div className="collage-body flex flex-1 flex-col">
                      <h3 className="font-serif text-xl font-semibold leading-snug text-ink-900 text-pretty">{plan.name}</h3>
                      <p className="mt-1 text-sm text-ink-500">{plan.duration}</p>
                      <p className="mt-3 font-serif text-3xl font-semibold text-ink-900">
                        <Price usd={plan.price} fromPrice={plan.fromPrice} hideCode />
                      </p>
                      <ul className="mt-4 flex-1 space-y-1.5 text-sm text-ink-700">
                        {details.map((d) => (
                          <li key={d} className="flex gap-2">
                            <span aria-hidden="true" className="mt-0.5 text-gold-600">✓</span>
                            <span className="text-pretty">{d}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex flex-wrap gap-2">
                        <Link className="btn btn-gold btn-sm" href={`/services/${id}`}>See details</Link>
                        <a
                          className="btn btn-whatsapp btn-sm"
                          href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hi, I would like to book the ${plan.name}. My dates are:`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ask on WhatsApp
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}

        {/* Side by side, for the reader who wants to compare before choosing. */}
        <section className="border-t hairline bg-white section" aria-label="Compare plans">
          <div className="shell">
            <div className="section-head max-w-2xl">
              <h2 className="h3-fluid font-serif font-semibold text-ink-900">Compare every plan</h2>
              <p className="text-ink-700">Price, time and what you get, on one screen.</p>
            </div>
            <div className="overflow-hidden rounded-2xl border hairline">
              <table className="block w-full text-left text-sm sm:table">
                <thead className="hidden bg-marble-100 sm:table-header-group">
                  <tr>
                    <th scope="col" className="px-5 py-3 font-semibold text-ink-900">Plan</th>
                    <th scope="col" className="px-5 py-3 font-semibold text-ink-900">Price</th>
                    <th scope="col" className="px-5 py-3 font-semibold text-ink-900">Time</th>
                    <th scope="col" className="px-5 py-3 font-semibold text-ink-900">What you get</th>
                  </tr>
                </thead>
                <tbody className="block sm:table-row-group">
                  {all.map((plan) => (
                    <tr key={plan.id} className="block border-t hairline first:border-t-0 sm:table-row sm:first:border-t">
                      <td className="block px-5 pb-1 pt-4 font-semibold text-ink-900 sm:table-cell sm:py-4 sm:align-top">
                        <Link href={`/services/${plan.id}`} className="link-sweep">{plan.name}</Link>
                      </td>
                      <td className="block px-5 text-ink-900 sm:table-cell sm:py-4 sm:align-top">
                        <Price usd={plan.price} fromPrice={false} hideCode />
                        {plan.fromPrice && <span className="ml-1 text-ink-500">and up</span>}
                      </td>
                      <td className="block px-5 text-ink-700 sm:table-cell sm:py-4 sm:align-top">{plan.duration}</td>
                      <td className="block px-5 pb-4 text-ink-700 sm:table-cell sm:py-4 sm:align-top">{plan.tagline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 text-sm text-ink-700">
              <InrRateNote />
            </div>
          </div>
        </section>

        <section className="shell section" aria-label="How booking works">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="h3-fluid font-serif font-semibold text-ink-900">Good to know before you book</h2>
              <ul className="mt-6 space-y-1 rounded-2xl border hairline bg-white p-3 sm:p-4">
                {[DEPOSIT_NOTE, ...packagesData.terms.filter((t) => !t.includes('advance'))].map((t) => (
                  <li key={t.slice(0, 30)} className="flex gap-3 rounded-lg px-2 py-2.5 leading-relaxed text-ink-700">
                    <span aria-hidden="true" className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400/25 text-[11px] font-bold text-gold-700">✓</span>
                    <span className="text-pretty">{t}</span>
                  </li>
                ))}
                <li className="flex gap-3 rounded-lg px-2 py-2.5 leading-relaxed text-ink-700">
                  <span aria-hidden="true" className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400/25 text-[11px] font-bold text-gold-700">✓</span>
                  <span className="text-pretty">{packagesData.tickets}</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="h3-fluid font-serif font-semibold text-ink-900">Not sure which one?</h2>
              <p className="mt-3 mb-6 text-ink-700">Choose a plan and a date. We reply on WhatsApp within minutes with a time and a fixed price.</p>
              <QuickBook />
            </div>
          </div>
        </section>
      </main>

      <Footer cta />
      <StickyWhatsApp />
      <MobileActionBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            graphSchema([
              breadcrumbSchema([
                { name: 'Home', url: SITE.url },
                { name: 'Plans & prices', url: `${SITE.url}/plans` },
              ]),
              webPageSchema({
                url: `${SITE.url}/plans`,
                name: 'Plans & Prices | Taj Mahal Photography',
                description: 'Every Taj Mahal photography plan, with prices, what is included and how to choose.',
                image: SITE.image,
                lastReviewed: LAST_UPDATED,
              }),
            ]),
          ),
        }}
      />
    </div>
  );
}
