import type { NextPage } from 'next';
import { Title } from '@components/Title';
import { CUID } from './CUID';
import { createItemMetadataByPath } from '@utils/createMetadata';

export const metadata = createItemMetadataByPath('/cuid');

const Page: NextPage = () => (
  <main className="flex flex-col gap-12">
    <Title>
      Random <Title.Highlight>CUID</Title.Highlight>
    </Title>

    <CUID />
  </main>
);

export default Page;
