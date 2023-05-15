'use client';

import { useState, useRef } from 'react';

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
        <div className="flex flex-col gap-1">
          <label htmlFor="values" className="w-fit font-medium dark:text-neutral-300">
            Separate values with a newline.
          </label>

          <textarea
            className="resize-none rounded border border-neutral-300 px-3 py-2 text-black dark:border-[#373A40] dark:bg-[#25262b] dark:text-white"
            id="values"
            rows={10}
            placeholder="Separate values with a newline."
            ref={ref}
          />
        </div>

        <button
          type="submit"
          className="h-10 cursor-pointer rounded bg-teal-400 text-base text-white transition-colors hover:bg-gray-600"
        >
          Pick
        </button>
      </form>
    </section>
  );
};
