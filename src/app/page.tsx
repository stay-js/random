import type { NextPage } from 'next';
import Link from 'next/link';
import { items } from '@constants/items';
import { Title } from '@components/Title';
import { createMetadata } from '@utils/createMetadata';

export const metadata = createMetadata({
  path: '',
  title: 'Home',
  description:
    'CUID, GUID, UUID, Random Number Generator, Random Thing Picker, Random Color Picker, etc.',
});

const Page: NextPage = () => (
  <main className="flex flex-col gap-8">
    <Title>
      Stay <Title.Highlight>Random</Title.Highlight>
    </Title>

    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map(({ title, shortTitle, description, path, id }) => (
        <div className="flex max-w-sm flex-col gap-4 rounded border-2 border-gray-500 p-6" key={id}>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg text-gray-200">{title}</h2>
            <p className="text-sm text-gray-400">{description}</p>
          </div>

          <Link
            href={path}
            className="block text-teal-500 underline decoration-dotted underline-offset-2"
          >
            Continue to {shortTitle}
          </Link>
        </div>
      ))}
    </div>
  </main>
);

export default Page;