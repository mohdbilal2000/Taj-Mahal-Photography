import GuideIndex, { guideIndexMetadata } from '@/components/guides/GuideIndex';

export const metadata = guideIndexMetadata('hi');

export default function Page() {
  return <GuideIndex lang="hi" />;
}
