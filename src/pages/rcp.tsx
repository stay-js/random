import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, useEffect, useCallback } from 'react';
import { TbRefresh } from 'react-icons/tb';

const LandingPage: NextPage = () => {
  const [rgb, setRgb] = useState<string | null>(null);
  const [hex, setHex] = useState<string | null>(null);

  const randomColor = useCallback(() => {
    const newRgb = {
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
    };

    setRgb(`rgb(${newRgb.r}, ${newRgb.g}, ${newRgb.b})`);
    setHex(`#${newRgb.r.toString(16)}${newRgb.g.toString(16)}${newRgb.b.toString(16)}`);
  }, []);

  useEffect(() => {
    randomColor();
  }, [randomColor]);

  return (
    <>
      <Head>
        <title>RCP - Stay Random</title>
        <meta property="og:title" content="RCP - Stay Random" key="title" />
        <meta name="twitter:title" content="RCP- Stay Random" />

        <meta name="description" content="Picks a random color and outputs HEX and RGB value." />
        <meta
          property="og:description"
          content="Picks a random color and outputs HEX and RGB value."
        />
        <meta
          name="twitter:description"
          content="Picks a random color and outputs HEX and RGB value."
        />
      </Head>

      <main>
        <h1 className="text-center text-5xl font-extrabold text-gray-300 md:text-7xl">
          Random Color Picker
        </h1>

        <section className="my-12 min-w-[20rem]">
          <div className="mb-4 text-2xl font-bold">
            <p>
              HEX: <span style={{ color: rgb! }}>{hex}</span>
            </p>
            <p>
              RGB: <span style={{ color: rgb! }}>{rgb}</span>
            </p>
          </div>

          <div className="h-48 w-full rounded" style={{ backgroundColor: rgb! }} />

          <button type="button" className="mt-4 flex items-center gap-1" onClick={randomColor}>
            <TbRefresh size={18} />
            Pick a random color
          </button>
        </section>
      </main>
    </>
  );
};

export default LandingPage;
