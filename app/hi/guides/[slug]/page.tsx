import GuideArticle, { guideMetadata, guideStaticParams } from '@/components/guides/GuideArticle';

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => guideStaticParams('hi');
export async function generateMetadata({ params }: Params) {
  return guideMetadata('hi', (await params).slug);
}

export default async function Page({ params }: Params) {
  return <GuideArticle lang="hi" slug={(await params).slug} />;
}
