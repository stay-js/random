import type { NextPage } from 'next';
import { Title } from '@components/Title';
import { UUID } from './UUID';
import { createItemMetadataByPath } from '@utils/createMetadata';

export const metadata = createItemMetadataByPath('/uuid');

const Page: NextPage = () => (
  <main className="flex flex-col gap-12">
    <Title>
      Random <Title.Highlight>UUID</Title.Highlight>
    </Title>

    <UUID />
  </main>
);

export default Page;