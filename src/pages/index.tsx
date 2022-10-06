import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import items from '@utils/items';

const LandingPage: NextPage = () => (
  <>
    <Head>
      <title>Stay Random</title>
      <meta property="og:title" content="Stay Random" key="title" />
      <meta name="twitter:title" content="Stay Random" />

      <meta
        name="description"
        content="CUID, GUID, UUID, Random Number Generator, Random Thing Picker, Random Color Picker, etc."
      />
      <meta
        property="og:description"
        content="CUID, GUID, UUID, Random Number Generator, Random Thing Picker, Random Color Picker, etc."
      />
      <meta
        name="twitter:description"
        content="CUID, GUID, UUID, Random Number Generator, Random Thing Picker, Random Color Picker, etc."
      />
    </Head>

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

            <Link href={path}>
              <a className="block text-teal-500 underline decoration-dotted underline-offset-2">
                Continue to {shortName}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </main>
  </>
);

export default LandingPage;
