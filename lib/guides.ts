import { ES_GUIDES, type LocaleGuide } from './blog-es';
import { HI_GUIDES } from './blog-hi';
import type { GuideLang } from './guide-ui';
import { fillRatesDeep } from './rates';

export type { LocaleGuide };

/** The translated guides, by language. They are kept out of POSTS so the English blog, its feeds and its related-reading stay English. */
export const GUIDES: Record<GuideLang, LocaleGuide[]> = { es: fillRatesDeep(ES_GUIDES), hi: fillRatesDeep(HI_GUIDES) };

export const guideBySlug = (lang: GuideLang, slug: string) => GUIDES[lang].find((g) => g.slug === slug);

/** Every translation of an English article, for hreflang. */
export function translationsOf(enSlug: string): { lang: GuideLang; slug: string }[] {
  return (Object.keys(GUIDES) as GuideLang[]).flatMap((lang) =>
    GUIDES[lang].filter((g) => g.enSlug === enSlug).map((g) => ({ lang, slug: g.slug })),
  );
}
