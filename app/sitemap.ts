import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';
import { siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return source.getLanguages().flatMap(({ pages }) =>
    pages.map((page) => ({
      url: `${siteUrl}${page.url}`,
      changeFrequency: 'weekly' as const,
      priority: page.slugs.length === 0 ? 1 : 0.7,
    })),
  );
}
