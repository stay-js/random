import type { NextPage } from 'next';
import { Title } from '@components/Title';
import { RandomThingPicker } from './RandomThingPicker';
import { createItemMetadataByPath } from '@utils/createMetadata';

export const metadata = createItemMetadataByPath('/thing');

const Page: NextPage = () => (
  <main className="flex flex-col gap-12">
    <Title>
      Random <Title.Highlight>Thing Picker</Title.Highlight>
    </Title>

    <RandomThingPicker />
  </main>
);

export default Page;
