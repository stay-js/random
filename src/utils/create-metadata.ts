import type { Metadata } from 'next';
import { items } from '~/constants/items';

export const createMetadata = ({
  path,
  title,
  absoluteTitle,
  description,
}: {
  path: string;
  title: string;
  absoluteTitle?: string;
  description: string;
}): Metadata => ({
  metadataBase: new URL('https://random.znagy.hu'),

  authors: [{ name: 'Zétény Nagy', url: 'https://znagy.hu' }],
  creator: 'Zétény Nagy',

  keywords:
    'random, stay random, cuid, collision resistant unique identifier, guid, globally unique identifier, uuid, universally unique identifier, rng, random number generator, rtp, random thing picker, rcg, random color generator, random countdown, random password generator, password, password generator, stay, znagy, znagy.hu',

  themeColor: '#2dd4bf',

  title: absoluteTitle ?? `${title} - Stay Random`,
  description,

  applicationName: 'Stay Random',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    url: `https://znagy.hu${path}`,
    title: absoluteTitle ?? `${title} - Stay Random`,
    description,
    siteName: 'Stay Random',
    locale: 'en-US',
  },

  twitter: {
    card: 'summary',
    title: absoluteTitle ?? `${title} - Stay Random`,
    description,
  },

  icons: {
    icon: '/favicon.ico',
  },
});

export const createItemMetadataByPath = (path: string) => {
  const item = items.find((item) => item.path === path);
  if (!item) throw new Error(`Item with path ${path} not found!`);

  return createMetadata(item);
};
