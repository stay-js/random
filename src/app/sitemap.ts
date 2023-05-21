import type { MetadataRoute } from 'next';
import { items } from '@constants/items';

const sitemap = (): MetadataRoute.Sitemap => {
  return ['', ...items.map((item) => item.path)].map((route) => ({
    url: `https://random.znagy.hu${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));
};

export default sitemap;
