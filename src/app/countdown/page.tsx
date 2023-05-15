import type { NextPage } from 'next';
import { Title } from '@components/Title';
import { Countdown } from './Countdown';
import { createItemMetadataByPath } from '@utils/createMetadata';

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
