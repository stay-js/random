import type { NextPage } from 'next';
import { Title } from '~/components/title';
import { RandomNumberGenerator } from './random-number-generator';
import { createItemMetadataByPath } from '~/utils/create-metadata';

export const metadata = createItemMetadataByPath('/number');

const Page: NextPage = () => (
  <main>
    <Title>
      Random <Title.Highlight>Number Generator</Title.Highlight>
    </Title>

    <RandomNumberGenerator />
  </main>
);

export default Page;
