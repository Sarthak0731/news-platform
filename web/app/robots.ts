import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/category',
          '/news',
          '/api/sitemap',
        ],
        disallow: [
          '/admin',
          '/*.json',
          '/api',
        ],
        crawlDelay: 1,
      },
    ],
    sitemap: 'https://news-platform.com/sitemap.xml',
  };
}
