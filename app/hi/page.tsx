import LocaleLanding, { localeMetadata } from '@/components/LocaleLanding';
import { localeByCode } from '@/lib/i18n';

const locale = localeByCode('hi')!;

export const metadata = localeMetadata(locale);

export default function Page() {
  return <LocaleLanding locale={locale} />;
}
