import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import items from '../utils/items';

interface ItemProps {
  name: string;
  shortName: string;
  desc: string;
  path: string;
}

const Item: React.FC<ItemProps> = ({ name, shortName, desc, path }) => (
  <div className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded max-w-sm">
    <h2 className="text-lg text-gray-200">{name}</h2>
    <p className="text-sm text-gray-400">{desc}</p>
    <Link href={path}>
      <a className="mt-3 underline text-teal-500 decoration-dotted underline-offset-2">
        Continue to {shortName}
      </a>
    </Link>
  </div>
);

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

    <main
      className="container mx-auto my-20 flex flex-col items-center justify-center min-h-screen p-4"
      style={{
        minHeight: 'calc(100vh - 15rem)',
      }}
    >
      <h1 className="text-5xl md:text-7xl font-extrabold text-gray-300">
        Stay <span className="text-teal-400">Random</span>
      </h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {items.map(({ name, shortName, desc, path, id }) => (
          <Item key={id} name={name} shortName={shortName} desc={desc} path={path} />
        ))}
      </div>
    </main>
  </>
);

export default LandingPage;
