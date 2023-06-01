import type { NextPage } from 'next';
import { Title } from '~/components/title';
import { UUID } from './uuid';
import { createItemMetadataByPath } from '~/utils/create-metadata';

export const metadata = createItemMetadataByPath('/uuid');

const Page: NextPage = () => (
  <main>
    <Title>
      Random <Title.Highlight>UUID</Title.Highlight>
    </Title>

    <UUID />
  </main>
);

export default Page;
