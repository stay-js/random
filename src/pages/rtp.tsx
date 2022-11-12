import type { NextPage } from 'next';
import { useState, useRef } from 'react';
import Layout from '@layouts/Layout';

const RandomThingPicker: NextPage = () => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const values = ref.current?.value.split('\n');
    if (!values || values.length === 0) return;

    setValue(values[Math.floor(Math.random() * values.length)]);
  };

  return (
    <Layout
      path="/rtp"
      title="RTP - Stay Random"
      desc="Randomly picks a value from a list of specified values."
    >
      <main className="flex flex-col gap-12">
        <h1 className="text-center text-5xl font-extrabold text-gray-300 md:text-7xl">
          Random Thing Picker
        </h1>

        <section className="flex min-w-[20rem] flex-col gap-2">
          <div className="text-2xl font-bold">
            Thing: <span className="text-teal-400">{value}</span>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-sm">
            <div className="flex flex-col gap-1">
              <label htmlFor="values" className="w-fit font-medium dark:text-neutral-300">
                Separate values with a newline.
              </label>

              <textarea
                className="w-full resize-none rounded border border-neutral-300 px-3 py-2 text-black dark:border-[#373A40] dark:bg-[#25262b] dark:text-white"
                id="values"
                rows={6}
                placeholder="Separate values with a newline."
                ref={ref}
              />
            </div>

            <input
              className="h-10 w-full cursor-pointer rounded bg-teal-400 text-base text-white transition-colors hover:bg-gray-600"
              type="submit"
              value="Pick"
            />
          </form>
        </section>
      </main>
    </Layout>
  );
};

export default RandomThingPicker;
