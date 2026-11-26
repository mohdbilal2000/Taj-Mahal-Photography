import GuideIndex, { guideIndexMetadata } from '@/components/guides/GuideIndex';

export const metadata = guideIndexMetadata('es');

export default function Page() {
  return <GuideIndex lang="es" />;
}
