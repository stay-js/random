import type { NextPage } from 'next';
import { Title } from '~/components/title';
import { GUID } from './guid';
import { createItemMetadataByPath } from '~/utils/create-metadata';

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
