import type { NextPage } from 'next';
import { Title } from '@components/Title';
import { Password } from './Password';
import { createItemMetadataByPath } from '@utils/createMetadata';

export const metadata = createItemMetadataByPath('/password');

const Page: NextPage = () => (
  <main>
    <Title>
      <Title.Highlight>Password</Title.Highlight> Generator
    </Title>

    <Password />
  </main>
);

export default Page;
