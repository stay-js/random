'use client';

import { useState, useEffect, useCallback } from 'react';
import { TbRefresh } from 'react-icons/tb';

export const Color: React.FC = () => {
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

  if (!rgb || !hex) return null;

  return (
    <section className="flex min-w-[20rem] flex-col gap-2">
      <div className="text-2xl font-bold">
        <p>
          HEX: <span style={{ color: rgb }}>{hex}</span>
        </p>
        <p>
          RGB: <span style={{ color: rgb }}>{rgb}</span>
        </p>
      </div>

      <div className="h-48 w-full rounded" style={{ backgroundColor: rgb }} />

      <button type="button" className="flex items-center gap-1" onClick={randomColor}>
        <TbRefresh size={18} />
        Generate a random color
      </button>
    </section>
  );
};
