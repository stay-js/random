import type { NextPage } from 'next';
import { Textarea } from '@mantine/core';
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
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-300 text-center">
          Random Thing Picker
        </h1>

        <section className="my-12 min-w-[20rem]">
          <div className="text-2xl mb-4 font-bold">
            Thing: <span className="text-teal-400">{value}</span>
          </div>

          <form onSubmit={handleSubmit}>
            <Textarea
              className="mb-4"
              label="Separate values with a newline."
              id="values"
              placeholder="Separate values with a newline."
              ref={ref}
              minRows={5}
              maxRows={10}
              autosize
            />

            <input
              className="w-full text-white transition-colors bg-teal-400 rounded cursor-pointer h-9 hover:bg-gray-600"
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
