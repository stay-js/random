import Head from 'next/head';

export const Meta: React.FC<{
  path: string;
  title: string;
  description: string;
}> = ({ path, title, description }) => (
  <Head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

    <link rel="icon" href="/favicon.ico" />

    <meta name="author" content="Zétény Nagy" />

    <meta
      name="keywords"
      content="random, stay random, cuid, collision resistant unique identifier, guid, globally unique identifier, uuid, universally unique identifier, rng, random number generator, rtp, random thing picker, rcg, random color generator, random countdown, random password generator, password, password generator, stay, znagy, znagy.hu"
    />

    <meta name="theme-color" content="#2dd4bf" />

    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Stay Random" />

    <meta name="twitter:card" content="summary" />

    <meta name="robots" content="index, follow" />
    <meta name="language" content="English" />
    <meta name="rating" content="general" />

    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />

    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />

    <meta name="url" content={`https://random.znagy.hu${path}`} />
    <meta property="og:url" content={`https://random.znagy.hu${path}`} />
    <meta property="twitter:url" content={`https://random.znagy.hu${path}`} />
  </Head>
);
