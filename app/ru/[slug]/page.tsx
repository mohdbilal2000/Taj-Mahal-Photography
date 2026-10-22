import LocaleServicePage, { localeServiceMetadata } from '@/components/LocaleServicePage';
import { localeByCode } from '@/lib/i18n';
import { localeServices, localeServiceBySlug } from '@/lib/i18n-services';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const LOCALE_CODE = 'ru' as const;
const locale = localeByCode(LOCALE_CODE)!;

type Params = { params: Promise<{ slug: string }> };

// Only the slugs this language actually has; anything else is a 404 rather
// than a thin page.
export const dynamicParams = false;

export function generateStaticParams() {
  return localeServices(LOCALE_CODE).map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = localeServiceBySlug(LOCALE_CODE, slug);
  return service ? localeServiceMetadata(locale, service) : {};
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const service = localeServiceBySlug(LOCALE_CODE, slug);
  if (!service) notFound();

  return <LocaleServicePage locale={locale} service={service} />;
}
