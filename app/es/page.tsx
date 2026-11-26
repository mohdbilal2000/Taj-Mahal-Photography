import LocaleLanding, { localeMetadata } from '@/components/LocaleLanding';
import { localeByCode } from '@/lib/i18n';
import EsGuidesStrip from '@/components/es/EsGuidesStrip';

const locale = localeByCode('es')!;

export const metadata = localeMetadata(locale);

export default function Page() {
  return <LocaleLanding locale={locale} after={<EsGuidesStrip />} />;
}
