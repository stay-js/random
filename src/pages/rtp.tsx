import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, useRef } from 'react';

export interface InputEvent {
  key: string;
  value: string[];
}

const LandingPage: NextPage = () => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const values = ref.current?.value.split('\n');
    if (!values || values.length === 0) return;

    setValue(values[Math.floor(Math.random() * values.length)]);
  };

  return (
    <>
      <Head>
        <title>RTP - Stay Random</title>
        <meta property="og:title" content="RTP - Stay Random" key="title" />
        <meta name="twitter:title" content="RTP- Stay Random" />

        <meta
          name="description"
          content="Randomly picks a value from a list of specified values."
        />
        <meta
          property="og:description"
          content="Randomly picks a value from a list of specified values."
        />
        <meta
          name="twitter:description"
          content="Randomly picks a value from a list of specified values."
        />
      </Head>

      <main>
        <h1 className="text-center text-5xl font-extrabold text-gray-300 md:text-7xl">
          Random Thing Picker
        </h1>

        <section className="my-12 min-w-[20rem]">
          <div className="mb-4 text-2xl font-bold">
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
    </>
  );
};

export default LandingPage;
