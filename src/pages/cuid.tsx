import type { NextPage } from 'next';
import cuid from 'cuid';
import IDPage from '@layouts/IDPage';
import Layout from '@layouts/Layout';

const CUID: NextPage = () => (
  <Layout
    path="/cuid"
    title="CUID - Stay Random"
    desc="A CUID (Collision Resistant Unique Identifier) is a method of creating a unique identifier that was developed by Eric Elliott. The purpose is to create unique IDs for use in web applications to better support horizontal scaling and sequential lookup performance."
  >
    <IDPage generator={cuid} name="CUID" />
  </Layout>
);

export default CUID;
