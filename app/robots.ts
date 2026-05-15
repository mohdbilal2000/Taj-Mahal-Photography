import { MetadataRoute } from 'next';
import { SITE } from '@/lib/seo';

const AI_ALLOWED = [
  // Training crawlers
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'Google-Extended',
  'Google-NotebookLM',
  'Google-CloudVertexBot',
  'Googlebot',
  'Bingbot',
  'PerplexityBot',
  'Perplexity-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',
  'Applebot',
  'Applebot-Extended',
  'cohere-ai',
  'Cohere-AI',
  'MistralAI-User',
  'Meta-ExternalAgent',
  'Meta-ExternalFetcher',
  'FacebookBot',
  'Amazonbot',
  'AmazonBot',
  'YouBot',
  'DuckAssistBot',
  'DuckDuckBot',
  'Bytespider',
  'PetalBot',
  'Diffbot',
  'Timpibot',
  'NeevaBot',
  'Yandex',
  'YandexBot',
  'BaiduSpider',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/_next/'] },
      ...AI_ALLOWED.map((ua) => ({ userAgent: ua, allow: '/' })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.domain,
  };
}
