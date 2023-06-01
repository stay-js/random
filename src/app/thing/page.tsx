import type { NextPage } from 'next';
import { Title } from '~/components/title';
import { RandomThingPicker } from './random-thing-picker';
import { createItemMetadataByPath } from '~/utils/create-metadata';

export const metadata = createItemMetadataByPath('/thing');

const Page: NextPage = () => (
  <main>
    <Title>
      Random <Title.Highlight>Thing Picker</Title.Highlight>
    </Title>

    <RandomThingPicker />
  </main>
);

export default Page;
