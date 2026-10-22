import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Price from '@/components/Price';
import QuickBook from '@/components/QuickBook';
import InrRateNote from '@/components/InrRateNote';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import { planById } from '@/lib/plans';
import { planImage } from '@/lib/images';
import type { LocaleContent, LocaleService } from '@/lib/i18n';
import { localeServices, serviceAlternates } from '@/lib/i18n-services';
import {
  SITE,
  jsonLd,
  graphSchema,
  breadcrumbSchema,
  faqSchema,
  speakableSpec,
  DEFAULT_PRICE_VALID_UNTIL,
} from '@/lib/seo';

export function localeServiceMetadata(locale: LocaleContent, service: LocaleService): Metadata {
  const url = `${SITE.url}/${locale.code}/${service.slug}`;

  return {
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE.url}/services/${service.planId}`,
        ...serviceAlternates(service.planId, SITE.url),
        'x-default': `${SITE.url}/services/${service.planId}`,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale.ogLocale,
      url,
      title: service.title,
      description: service.description,
      siteName: SITE.name,
    },
  };
}

/** One package, in one language, with the booking path on the page. */
export default function LocaleServicePage({
  locale,
  service,
}: {
  locale: LocaleContent;
  service: LocaleService;
}) {
  const plan = planById(service.planId);
  if (!plan) throw new Error(`Unknown planId "${service.planId}" in locale ${locale.code}`);

  const url = `${SITE.url}/${locale.code}/${service.slug}`;
  const image = plan.image ?? planImage(plan.id);
  const others = localeServices(locale.code).filter((s) => s.slug !== service.slug);
  const planNames = Object.fromEntries(
    Object.entries(locale.planLabels).map(([id, label]) => [id, label.name]),
  );

  return (
    <div lang={locale.hreflang} dir={locale.dir} className="min-h-screen bg-white">
      <header className="relative isolate flex min-h-[58svh] items-end">
        <Image
          src={image}
          alt={service.h1}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="scrim-hero absolute inset-0" />

        <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 pb-12 pt-28 text-white">
          <nav aria-label="Breadcrumb" className="mb-5 text-xs tracking-wide text-marble-300">
            <Link href={`/${locale.code}`} className="inline-block py-1 hover:text-gold-400">
              {locale.serviceBackLabel}
            </Link>
          </nav>

          <span className="eyebrow text-gold-400">{locale.eyebrow}</span>
          <h1 className="h1-fluid font-serif font-semibold mt-3 text-balance">{service.h1}</h1>

          <p className="mt-5 font-serif text-3xl font-semibold">
            <Price usd={plan.price} fromPrice={plan.fromPrice} hideCode />
            <span className="ml-2 align-middle text-sm font-sans font-normal text-marble-300">
              · {plan.duration}
            </span>
          </p>
        </div>
      </header>

      <section className="bg-marble-50 py-12 md:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p id="answer" className="lead border-l-2 border-gold-500 pl-5 text-ink-900 text-pretty">
            {service.answer}
          </p>
        </div>
      </section>

      {/* Booking, before the detail — a guest who already decided should not
          have to scroll past an essay to act. */}
      <section className="py-10 md:py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <QuickBook
            labels={{ ...locale.quickBook }}
            planNames={planNames}
            defaultPlanId={plan.id}
          />
        </div>
      </section>

      <section className="pb-14 md:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {service.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mb-5 leading-relaxed text-ink-700 text-pretty">
              {paragraph}
            </p>
          ))}

          <h2 className="h3-fluid font-serif font-semibold text-ink-900 mt-10 mb-5">
            {locale.serviceIncludesTitle}
          </h2>
          <ul className="space-y-3">
            {service.includes.map((item) => (
              <li key={item.slice(0, 40)} className="flex gap-3 text-ink-700 leading-relaxed">
                <span
                  aria-hidden="true"
                  className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                />
                <span className="text-pretty">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-ink-500">{locale.priceNote}</p>
          <div className="mt-2">
            <InrRateNote />
          </div>

          {service.faqs.length > 0 && (
            <>
              <h2 className="h3-fluid font-serif font-semibold text-ink-900 mt-12 mb-4">
                {locale.serviceFaqTitle}
              </h2>
              <div className="divide-y hairline">
                {service.faqs.map((faq) => (
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
            </>
          )}
        </div>
      </section>

      {others.length > 0 && (
        <section className="border-t hairline bg-marble-50 py-14 md:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="h3-fluid font-serif font-semibold text-ink-900 mb-8">
              {locale.serviceOtherTitle}
            </h2>
            <div className="reveal reveal-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((other) => {
                const otherPlan = planById(other.planId);
                const otherImage = otherPlan?.image ?? planImage(other.planId);

                return (
                  <Link
                    key={other.slug}
                    href={`/${locale.code}/${other.slug}`}
                    className="card-lift group flex flex-col overflow-hidden rounded-sm border hairline bg-white"
                  >
                    <div className="img-zoom relative aspect-[16/10]">
                      <Image
                        src={otherImage}
                        alt={other.h1}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-serif text-lg font-semibold text-ink-900 transition-colors group-hover:text-gold-600 text-pretty">
                        {other.h1}
                      </h3>
                      {otherPlan && (
                        <p className="mt-3 font-serif text-xl font-semibold text-ink-900">
                          <Price usd={otherPlan.price} fromPrice={otherPlan.fromPrice} hideCode />
                        </p>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <StickyWhatsApp />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(
            graphSchema([
              breadcrumbSchema([
                { name: SITE.name, url: SITE.url },
                { name: locale.endonym, url: `${SITE.url}/${locale.code}` },
                { name: service.h1, url },
              ]),
              {
                '@type': 'Service',
                '@id': `${url}#service`,
                name: service.h1,
                description: service.description,
                serviceType: 'Photography',
                inLanguage: locale.hreflang,
                url,
                provider: { '@id': `${SITE.url}/#business` },
                areaServed: { '@id': `${SITE.url}/#taj-mahal` },
                offers: {
                  '@type': 'Offer',
                  price: plan.price,
                  priceCurrency: 'USD',
                  availability: 'https://schema.org/InStock',
                  priceValidUntil: DEFAULT_PRICE_VALID_UNTIL,
                  url,
                },
              },
              {
                '@type': 'WebPage',
                '@id': `${url}#webpage`,
                url,
                name: service.title,
                description: service.description,
                inLanguage: locale.hreflang,
                isPartOf: { '@id': `${SITE.url}/#website` },
                speakable: speakableSpec(['#answer', 'h1']),
              },
              faqSchema(service.faqs),
            ]),
          ),
        }}
      />
    </div>
  );
}
