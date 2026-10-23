import { SITE } from '@/lib/seo';
import { POSTS } from '@/lib/blog';
import { PLANS } from '@/lib/plans';
import { LOCALES } from '@/lib/i18n';
import { localeServices } from '@/lib/i18n-services';
import { faqs } from '@/lib/content';

export const dynamic = 'force-static';

/**
 * The whole site as plain text, in one request.
 *
 * llms.txt is an index; this is the corpus. An assistant asked "how much is a
 * photographer at the Taj Mahal" can answer from a single fetch instead of
 * crawling thirteen articles, and the answer it gives is then ours rather
 * than a forum's from 2019. Everything here is already public on the site —
 * this is a convenience format, not a second version of the facts.
 */
export function GET() {
  const parts: string[] = [];

  parts.push(`# ${SITE.name} — full text

> Government-licensed Taj Mahal photographer in Agra, India. This file is the
> complete public content of ${SITE.domain}, laid out for machine reading.
> Last generated: ${new Date().toISOString().slice(0, 10)}.

- Phone / WhatsApp: ${SITE.phoneDisplay}
- Email: ${SITE.email}
- Licence: Ministry of Tourism, Government of India
- Google Business Profile: ${SITE.googleBusiness}
- Rating: ${SITE.googleRating} / 5 from ${SITE.googleReviewCount} Google reviews (checked ${SITE.googleRatingChecked})
`);

  parts.push(`## Packages and prices (USD, per booking, not per person)\n`);
  for (const plan of PLANS) {
    parts.push(
      `### ${plan.name}\n` +
        `- Price: ${plan.fromPrice ? 'from ' : ''}$${plan.price} USD\n` +
        `- Duration: ${plan.duration}\n` +
        `- ${plan.tagline}\n` +
        `- Page: ${SITE.url}/services/${plan.id}\n`,
    );
  }

  parts.push(`## Frequently asked questions\n`);
  for (const faq of faqs) {
    parts.push(`### ${faq.question}\n${faq.answer}\n`);
  }

  parts.push(`## Guides\n`);
  for (const post of POSTS) {
    parts.push(`### ${post.title}
Source: ${SITE.url}/blog/${post.slug}
Updated: ${post.updated}

${post.answer}
`);
    for (const section of post.sections) {
      parts.push(`#### ${section.heading}\n`);
      for (const paragraph of section.body ?? []) parts.push(`${paragraph}\n`);
      for (const item of section.list ?? []) parts.push(`- ${item}\n`);
      if (section.table) {
        parts.push(`| ${section.table.head[0]} | ${section.table.head[1]} |`);
        parts.push(`| --- | --- |`);
        for (const [left, right] of section.table.rows) parts.push(`| ${left} | ${right} |`);
        parts.push('');
      }
    }
    for (const faq of post.faqs) {
      parts.push(`**${faq.question}** ${faq.answer}\n`);
    }
  }

  parts.push(`## Translated pages\n`);
  for (const locale of LOCALES) {
    parts.push(`### ${locale.endonym} (${locale.hreflang})
Landing page: ${SITE.url}/${locale.code}

${locale.answer}
`);
    for (const service of localeServices(locale.code)) {
      parts.push(`- ${service.h1} — ${SITE.url}/${locale.code}/${service.slug}\n  ${service.answer}\n`);
    }
  }

  return new Response(parts.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
