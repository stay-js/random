'use client';

import { useState, useEffect, useCallback } from 'react';
import { RefreshButton } from '@components/Button';

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

  useEffect(() => randomColor(), [randomColor]);

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

      <div className="h-48 rounded" style={{ backgroundColor: rgb }} />

      <RefreshButton onClick={randomColor}>Generate a random color</RefreshButton>
    </section>
  );
};
