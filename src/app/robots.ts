import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: '*',
      allow: '/',
    },
  ],
  host: 'https://random.znagy.hu',
  sitemap: 'https://random.znagy.hu/sitemap.xml',
});

export default robots;
