import type { NextPage } from 'next';
import Head from 'next/head';
import guid from 'guid';
import IDPage from '../components/IDPage';

const LandingPage: NextPage = () => (
  <>
    <Head>
      <title>GUID - Stay Random</title>
      <meta property="og:title" content="GUID - Stay Random" key="title" />
      <meta name="twitter:title" content="GUID - Stay Random" />

      <meta
        name="description"
        content="A GUID (Globally Unique Identifier) is a 128-bit text string that represents an identification (ID). Organizations generate GUIDs when a unique reference number is needed to identify information on a computer or network. A GUID can be used to ID hardware, software, accounts, documents and other items. The term is also often used in software created by Microsoft."
      />
      <meta
        property="og:description"
        content="A GUID (Globally Unique Identifier) is a 128-bit text string that represents an identification (ID). Organizations generate GUIDs when a unique reference number is needed to identify information on a computer or network. A GUID can be used to ID hardware, software, accounts, documents and other items. The term is also often used in software created by Microsoft."
      />
      <meta
        name="twitter:description"
        content="A GUID (Globally Unique Identifier) is a 128-bit text string that represents an identification (ID). Organizations generate GUIDs when a unique reference number is needed to identify information on a computer or network. A GUID can be used to ID hardware, software, accounts, documents and other items. The term is also often used in software created by Microsoft."
      />
    </Head>

    <IDPage generator={guid.raw} name="GUID" />
  </>
);

export default LandingPage;
