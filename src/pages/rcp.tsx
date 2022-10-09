import type { NextPage } from 'next';
import { useState, useEffect, useCallback } from 'react';
import { TbRefresh } from 'react-icons/tb';
import Layout from '@layouts/Layout';

const RandomColorPicker: NextPage = () => {
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
    <Layout
      path="/rcp"
      title="RCP - Stay Random"
      desc="Picks a random color and outputs HEX and RGB value."
    >
      <main className="flex flex-col gap-12">
        <h1 className="text-center text-5xl font-extrabold text-gray-300 md:text-7xl">
          Random Color Picker
        </h1>

        <section className="flex min-w-[20rem] flex-col gap-2">
          <div className="text-2xl font-bold">
            <p>
              HEX: <span style={{ color: rgb! }}>{hex}</span>
            </p>
            <p>
              RGB: <span style={{ color: rgb! }}>{rgb}</span>
            </p>
          </div>

          <div className="h-48 w-full rounded" style={{ backgroundColor: rgb! }} />

          <button type="button" className="flex items-center gap-1" onClick={randomColor}>
            <TbRefresh size={18} />
            Pick a random color
          </button>
        </section>
      </main>
    </Layout>
  );
};

export default RandomColorPicker;
