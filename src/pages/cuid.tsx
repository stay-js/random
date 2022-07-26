import type { NextPage } from 'next';
import Head from 'next/head';
import cuid from 'cuid';
import IDPage from '../components/IDPage';

const LandingPage: NextPage = () => (
  <>
    <Head>
      <title>CUID - Stay Random</title>
      <meta property="og:title" content="CUID - Stay Random" key="title" />
      <meta name="twitter:title" content="CUID - Stay Random" />

      <meta
        name="description"
        content="A CUID (Collision Resistant Unique Identifier) is a method of creating a unique identifier that was developed by Eric Elliott. The purpose is to create unique IDs for use in web applications to better support horizontal scaling and sequential lookup performance."
      />
      <meta
        property="og:description"
        content="A CUID (Collision Resistant Unique Identifier) is a method of creating a unique identifier that was developed by Eric Elliott. The purpose is to create unique IDs for use in web applications to better support horizontal scaling and sequential lookup performance."
      />
      <meta
        name="twitter:description"
        content="A CUID (Collision Resistant Unique Identifier) is a method of creating a unique identifier that was developed by Eric Elliott. The purpose is to create unique IDs for use in web applications to better support horizontal scaling and sequential lookup performance."
      />
    </Head>

    <IDPage generator={cuid} name="CUID" />
  </>
);

export default LandingPage;
