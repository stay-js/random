import type { NextPage } from 'next';
import { Title } from '~/components/title';
import { Password } from './password';
import { createItemMetadataByPath } from '~/utils/create-metadata';

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
