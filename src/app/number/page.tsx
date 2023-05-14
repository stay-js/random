import type { NextPage } from 'next';
import { Title } from '@components/Title';
import { RandomNumberGenerator } from './RandomNumberGenerator';
import { createItemMetadataByPath } from '@utils/createMetadata';

export const metadata = createItemMetadataByPath('/number');

const Page: NextPage = () => (
  <main className="flex flex-col gap-12">
    <Title>
      Random <Title.Highlight>Number Generator</Title.Highlight>
    </Title>

    <RandomNumberGenerator />
  </main>
);

export default Page;
