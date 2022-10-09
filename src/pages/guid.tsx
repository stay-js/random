import type { NextPage } from 'next';
import guid from 'guid';
import IDPage from '@layouts/IDPage';
import Layout from '@layouts/Layout';

const GUID: NextPage = () => (
  <Layout
    path="/guid"
    title="GUID - Stay Random"
    desc="A GUID (Globally Unique Identifier) is a 128-bit text string that represents an identification (ID). Organizations generate GUIDs when a unique reference number is needed to identify information on a computer or network. A GUID can be used to ID hardware, software, accounts, documents and other items. The term is also often used in software created by Microsoft."
  >
    <IDPage generator={guid.raw} name="GUID" />
  </Layout>
);

export default GUID;
