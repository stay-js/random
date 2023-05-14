import type { NextPage } from 'next';
import { Title } from '@components/Title';
import { Color } from './Color';
import { createItemMetadataByPath } from '@utils/createMetadata';

export const metadata = createItemMetadataByPath('/color');

const Page: NextPage = () => (
  <main className="flex flex-col gap-12">
    <Title>
      Random <Title.Highlight>Color Generator</Title.Highlight>
    </Title>

    <Color />
  </main>
);

export default Page;