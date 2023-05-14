'use client';

import { useState, useEffect } from 'react';
import { TbCopy, TbRefresh } from 'react-icons/tb';
import { copyToClipboard } from '@utils/copyToClipboard';

export const IDPage: React.FC<{
  name: string;
  generator: () => string;
}> = ({ generator, name }) => {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => setValue(generator()), [generator]);

  if (!value) return null;

  return (
    <section className="flex min-w-full flex-col gap-2 md:min-w-[55%]">
      <div
        className="max-w-full border px-4 py-2 text-xl font-bold"
        style={{ overflowWrap: 'anywhere' }}
      >
        {value}
      </div>

      <div className="flex items-center justify-between">
        <button
          type="button"
          className="flex items-center gap-1"
          onClick={() => setValue(generator())}
        >
          <TbRefresh size={18} /> Generate New {name}
        </button>

        <button
          type="button"
          className="flex items-center gap-1"
          onClick={() => copyToClipboard(value)}
        >
          <TbCopy size={18} />
          Copy
        </button>
      </div>
    </section>
  );
};
