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
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-300 text-center">
          Random Color Picker
        </h1>

        <section className="my-12 min-w-[20rem]">
          <div className="text-2xl mb-4 font-bold">
            <p>
              HEX: <span style={{ color: rgb! }}>{hex}</span>
            </p>
            <p>
              RGB: <span style={{ color: rgb! }}>{rgb}</span>
            </p>
          </div>

          <div className="w-full h-48 rounded" style={{ backgroundColor: rgb! }} />

          <button type="button" className="flex items-center gap-1 mt-4" onClick={randomColor}>
            <TbRefresh size={18} />
            Pick a random color
          </button>
        </section>
      </main>
    </>
  );
};

export default LandingPage;
