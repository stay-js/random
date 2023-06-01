import type { NextPage } from 'next';
import { Title } from '~/components/title';
import { CUID } from './cuid';
import { createItemMetadataByPath } from '~/utils/create-metadata';

export const metadata = createItemMetadataByPath('/cuid');

const Page: NextPage = () => (
  <main>
    <Title>
      Random <Title.Highlight>CUID</Title.Highlight>
    </Title>

    <CUID />
  </main>
);

export default Page;
