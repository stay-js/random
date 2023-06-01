import type { NextPage } from 'next';
import { Title } from '~/components/title';
import { Color } from './color';
import { createItemMetadataByPath } from '~/utils/create-metadata';

export const metadata = createItemMetadataByPath('/color');

const Page: NextPage = () => (
  <main>
    <Title>
      Random <Title.Highlight>Color Generator</Title.Highlight>
    </Title>

    <Color />
  </main>
);

export default Page;
