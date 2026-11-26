import LocaleLanding, { localeMetadata } from '@/components/LocaleLanding';
import { localeByCode } from '@/lib/i18n';
import GuidesStrip from '@/components/guides/GuidesStrip';

const locale = localeByCode('hi')!;

export const metadata = localeMetadata(locale);

export default function Page() {
  return <LocaleLanding locale={locale} after={<GuidesStrip lang="hi" />} />;
}
