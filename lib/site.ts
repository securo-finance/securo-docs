// Public origin of the docs site. Used for canonical URLs, the sitemap and robots.txt.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://docs.usesecuro.com'
).replace(/\/+$/, '');
