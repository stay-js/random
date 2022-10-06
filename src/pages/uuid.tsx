import type { NextPage } from 'next';
import Head from 'next/head';
import { v4 } from 'uuid';
import IDPage from '@components/IDPage';

const UUID: NextPage = () => (
  <>
    <Head>
      <title>UUID - Stay Random</title>
      <meta property="og:title" content="UUID - Stay Random" key="title" />
      <meta name="twitter:title" content="UUID - Stay Random" />

      <meta
        name="description"
        content="A UUID (Universally Unique Identifier) is a 128-bit label used for information in computer systems. The term globally unique identifier (GUID) is also used. When generated according to the standard methods, UUIDs are, for practical purposes, unique. Their uniqueness does not depend on a central registration authority or coordination between the parties generating them, unlike most other numbering schemes."
      />
      <meta
        property="og:description"
        content="A UUID (Universally Unique Identifier) is a 128-bit label used for information in computer systems. The term globally unique identifier (GUID) is also used. When generated according to the standard methods, UUIDs are, for practical purposes, unique. Their uniqueness does not depend on a central registration authority or coordination between the parties generating them, unlike most other numbering schemes."
      />
      <meta
        name="twitter:description"
        content="A UUID (Universally Unique Identifier) is a 128-bit label used for information in computer systems. The term globally unique identifier (GUID) is also used. When generated according to the standard methods, UUIDs are, for practical purposes, unique. Their uniqueness does not depend on a central registration authority or coordination between the parties generating them, unlike most other numbering schemes."
      />
    </Head>

    <IDPage generator={v4} name="UUID" />
  </>
);

export default UUID;
