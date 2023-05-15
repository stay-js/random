'use client';

import { useState, useEffect } from 'react';
import { CopyButton, RefreshButton } from './Button';

export const IDPage: React.FC<{
  name: string;
  generator: () => string;
}> = ({ generator, name }) => {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => setValue(generator()), [generator]);

  if (!value) return null;

  return (
    <section className="flex w-full max-w-3xl flex-col gap-2">
      <div className="border px-4 py-2 text-xl font-bold" style={{ overflowWrap: 'anywhere' }}>
        {value}
      </div>

      <div className="flex items-center justify-between">
        <RefreshButton onClick={() => setValue(generator())}>Generate New {name}</RefreshButton>
        <CopyButton value={value} />
      </div>
    </section>
  );
};
