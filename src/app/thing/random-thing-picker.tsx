'use client';

import { useState, useRef } from 'react';
import { Textarea } from '~/components/input';
import { Button } from '~/components/button';

export const RandomThingPicker: React.FC = () => {
  const [value, setValue] = useState<string | null | undefined>(null);

  const ref = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const values = ref.current?.value.trim().split('\n');
    if (!values || values.length === 0) return;

    setValue(values[Math.floor(Math.random() * values.length)]);
  };

  return (
    <section className="flex w-full max-w-sm flex-col gap-2">
      <div className="text-2xl font-bold">
        Thing: <span className="text-teal-400">{value}</span>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-sm">
        <Textarea
          label="Separate values with a newline."
          placeholder="Separate values with a newline."
          rows={10}
          ref={ref}
        />

        <Button type="submit">Pick</Button>
      </form>
    </section>
  );
};
