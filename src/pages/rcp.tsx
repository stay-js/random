import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { TbRefresh } from 'react-icons/tb';

const LandingPage: NextPage = () => {
  const [hex, setHex] = useState<string | null>(null);
  const [rgb, setRgb] = useState<string | null>(null);

  const randomColor = () => {
    const newHex = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setHex(newHex);

    const newRgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(newHex);
    if (!newRgb) return;

    setRgb(
      `rgb(${parseInt(newRgb[1], 16)}, ${parseInt(newRgb[2], 16)}, ${parseInt(newRgb[3], 16)})`,
    );
  };

  useEffect(() => {
    if (!hex) randomColor();
  }, [hex, randomColor]);

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
              HEX: <span style={{ color: hex! }}>{hex}</span>
            </p>
            <p>
              RGB: <span style={{ color: hex! }}>{rgb}</span>
            </p>
          </div>

          <div className="w-full h-48 rounded" style={{ backgroundColor: hex! }} />

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
