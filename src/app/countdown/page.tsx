import type { NextPage } from 'next';
import { Title } from '~/components/title';
import { Countdown } from './countdown';
import { createItemMetadataByPath } from '~/utils/create-metadata';

export const metadata = createItemMetadataByPath('/countdown');

const Page: NextPage = () => (
  <main>
    <Title>
      Random <Title.Highlight>Countdown Timer</Title.Highlight>
    </Title>

    <Countdown />
  </main>
);

export default Page;
