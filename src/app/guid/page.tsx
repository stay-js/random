import type { NextPage } from 'next';
import { Title } from '@components/Title';
import { GUID } from './GUID';
import { createItemMetadataByPath } from '@utils/createMetadata';

export const metadata = createItemMetadataByPath('/guid');

const Page: NextPage = () => (
  <main>
    <Title>
      Random <Title.Highlight>GUID</Title.Highlight>
    </Title>

    <GUID />
  </main>
);

export default Page;
