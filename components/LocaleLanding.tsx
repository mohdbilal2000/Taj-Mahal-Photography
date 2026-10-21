import Image from 'next/image';
import Link from 'next/link';
import Price from '@/components/Price';
import InrRateNote from '@/components/InrRateNote';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import { HERO_IMAGE, planImage } from '@/lib/images';
import { planById } from '@/lib/plans';
import { LOCALE_PLAN_IDS, localeAlternates, type LocaleContent } from '@/lib/i18n';
import {
  SITE,
  jsonLd,
  graphSchema,
  breadcrumbSchema,
  faqSchema,
  speakableSpec,
} from '@/lib/seo';
import type { Metadata } from 'next';

/** Metadata for one translated landing page. */
export function localeMetadata(locale: LocaleContent): Metadata {
  const url = `${SITE.url}/${locale.code}`;

  return {
    title: locale.title,
    description: locale.description,
    keywords: locale.keywords,
    alternates: {
      canonical: url,
      languages: {
        en: SITE.url,
        ...localeAlternates(SITE.url),
        'x-default': SITE.url,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale.ogLocale,
      url,
      title: locale.title,
      description: locale.description,
      siteName: SITE.name,
    },
  };
}

function whatsappHref(locale: LocaleContent) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(locale.whatsappMessage)}`;
}

/**
 * One translated landing page: the answer, the proof, the prices, the
 * questions, and a WhatsApp thread that opens in the visitor's language.
 * Deliberately shorter than the English home page — a visitor reading a
 * second language wants the facts, not the full tour.
 */
export default function LocaleLanding({ locale }: { locale: LocaleContent }) {
  const url = `${SITE.url}/${locale.code}`;
  const plans = LOCALE_PLAN_IDS.map(planById).filter(Boolean);
  const wa = whatsappHref(locale);

  return (
    <div lang={locale.hreflang} dir={locale.dir} className="min-h-screen bg-white">
      {/* Hero */}
      <header className="relative isolate flex min-h-[78svh] items-end">
        <Image
          src={HERO_IMAGE}
          alt={locale.headline}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="scrim-hero absolute inset-0" />

        <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 pb-14 pt-28 text-white">
          <span className="eyebrow text-gold-400">{locale.eyebrow}</span>
          <h1 className="h1-fluid font-serif font-semibold mt-3 text-balance">{locale.headline}</h1>
          <p className="lead mt-5 max-w-2xl text-marble-200 text-pretty">{locale.subline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={wa}
              className="rounded-sm bg-gold-500 px-6 py-3 font-semibold text-ink-900 transition-colors hover:bg-gold-400"
            >
              {locale.whatsappLabel}
            </a>
            <Link
              href="/book"
              className="rounded-sm border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              {locale.bookLabel}
            </Link>
          </div>
        </div>
      </header>

      {/* The answer, in their language. */}
      <section className="bg-marble-50 py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p
            id="answer"
            className="lead border-l-2 border-gold-500 pl-5 text-ink-900 text-pretty"
          >
            {locale.answer}
          </p>
        </div>
      </section>

      {/* Proof */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="h3-fluid font-serif font-semibold text-ink-900 mb-8">{locale.trustTitle}</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {locale.trust.map((item) => (
              <div key={item.title} className="rounded-sm border hairline bg-white p-6">
                <h3 className="font-serif text-lg font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y hairline bg-marble-50 py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="h3-fluid font-serif font-semibold text-ink-900 mb-8">{locale.stepsTitle}</h2>
          <ol className="grid gap-6 sm:grid-cols-3">
            {locale.steps.map((step, i) => (
              <li key={step.title} className="rounded-sm bg-white p-6 border hairline">
                <span className="font-serif text-3xl text-gold-500 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-serif text-lg font-semibold text-ink-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Prices — figures come from lib/plans.ts, never translated. */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="h3-fluid font-serif font-semibold text-ink-900 mb-2">
            {locale.packagesTitle}
          </h2>
          <p className="mb-8 max-w-2xl text-ink-700">{locale.packagesIntro}</p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => {
              const label = locale.planLabels[plan!.id];
              const image = plan!.image ?? planImage(plan!.id);

              return (
                <Link
                  key={plan!.id}
                  href={`/services/${plan!.id}`}
                  className="card-lift group flex flex-col overflow-hidden rounded-sm border hairline bg-white"
                >
                  {image && (
                    <div className="img-zoom relative aspect-[16/10]">
                      <Image
                        src={image}
                        alt={label?.name ?? plan!.name}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-serif text-lg font-semibold text-ink-900 transition-colors group-hover:text-gold-600 text-pretty">
                      {label?.name ?? plan!.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">
                      {label?.tagline ?? plan!.tagline}
                    </p>
                    <p className="mt-4 font-serif text-2xl font-semibold text-ink-900">
                      {plan!.fromPrice && (
                        <span className="mr-1 align-middle text-xs uppercase tracking-wide text-ink-400">
                          {locale.perPerson}
                        </span>
                      )}
                      <Price usd={plan!.price} hideCode />
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          <p className="mt-6 text-sm text-ink-500">{locale.priceNote}</p>
          <div className="mt-2">
            <InrRateNote />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t hairline bg-marble-50 py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="h3-fluid font-serif font-semibold text-ink-900 mb-6">{locale.faqTitle}</h2>
          <div className="divide-y hairline">
            {locale.faqs.map((faq) => (
              <details key={faq.question} className="group py-4">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-medium text-ink-900">
                  <span className="text-pretty">{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-gold-600 transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-ink-700 text-pretty">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-ink-900 py-16 text-white md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="h3-fluid font-serif font-semibold text-balance">{locale.ctaTitle}</h2>
          <p className="mt-4 text-marble-300 text-pretty">{locale.ctaBody}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={wa}
              className="rounded-sm bg-gold-500 px-6 py-3 font-semibold text-ink-900 transition-colors hover:bg-gold-400"
            >
              {locale.whatsappLabel}
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="rounded-sm border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              {SITE.phoneDisplay}
            </a>
          </div>
          <p className="mt-10 text-sm">
            <Link href="/" className="link-sweep inline-block py-1 text-marble-300">
              {locale.englishLabel} →
            </Link>
          </p>
        </div>
      </section>

      <StickyWhatsApp />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            graphSchema([
              breadcrumbSchema([
                { name: 'Home', url: SITE.url },
                { name: locale.endonym, url },
              ]),
              {
                '@type': 'WebPage',
                '@id': `${url}#webpage`,
                url,
                name: locale.title,
                description: locale.description,
                inLanguage: locale.hreflang,
                isPartOf: { '@id': `${SITE.url}/#website` },
                about: { '@id': `${SITE.url}/#business` },
                primaryImageOfPage: { '@type': 'ImageObject', url: `${SITE.url}${HERO_IMAGE}` },
                speakable: speakableSpec(['#answer', 'h1']),
              },
              faqSchema(locale.faqs),
            ]),
          ),
        }}
      />
    </div>
  );
}
