import type { NextPage } from 'next';
import Link from 'next/link';
import { Layout } from '@layouts/Layout';
import { items } from '@utils/items';

const Home: NextPage = () => (
  <Layout
    path="/"
    title="Home - Stay Random"
    desc="CUID, GUID, UUID, Random Number Generator, Random Thing Picker, Random Color Picker, etc."
  >
    <main className="flex flex-col gap-8">
      <h1 className="text-5xl font-extrabold text-gray-300 md:text-7xl">
        Stay <span className="text-teal-400">Random</span>
      </h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map(({ name, shortName, desc, path, id }) => (
          <div
            className="flex max-w-sm flex-col gap-4 rounded border-2 border-gray-500 p-6"
            key={id}
          >
            <div className="flex flex-col gap-1">
              <h2 className="text-lg text-gray-200">{name}</h2>
              <p className="text-sm text-gray-400">{desc}</p>
            </div>

            <Link
              href={path}
              className="block text-teal-500 underline decoration-dotted underline-offset-2"
            >
              Continue to {shortName}
            </Link>
          </div>
        ))}
      </div>
    </main>
  </Layout>
);

export default Home;
