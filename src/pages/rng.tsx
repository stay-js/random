import type { NextPage } from 'next';
import Head from 'next/head';
import { useRef, useState } from 'react';

export interface Props {
  min: string | undefined;
  max: string | undefined;
}

export interface InputEvent {
  key: string;
  value: number;
}

const validate = (values: Props): string[] => {
  const errors: string[] = [];

  if (values.min === '' || values.min === undefined) errors.push('Please specify a min value!');
  if (values.max === '' || values.max === undefined) errors.push('Please specify a max value!');

  if (isNaN(Number(values.min))) errors.push('Min value must be a number!');
  if (isNaN(Number(values.max))) errors.push('Max value must be a number!');

  if (
    values.min === '' ||
    values.min === undefined ||
    values.max === '' ||
    values.max === undefined ||
    isNaN(Number(values.min)) ||
    isNaN(Number(values.max))
  )
    return errors;

  if (Number(values.min) >= Number(values.max))
    errors.push('Max value must be greater than min value!');

  return errors;
};

const RandomNumberGenerator: NextPage = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [number, setNumber] = useState<number | null>(null);
  const minRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const values = {
      min: minRef.current?.value,
      max: maxRef.current?.value,
    };

    const newErrors = validate(values);
    setErrors(newErrors);

    if (newErrors.length === 0) {
      setNumber(
        Math.floor(Math.random() * (Number(values.max) - Number(values.min) + 1)) +
          Number(values.min),
      );
    }
  };

  return (
    <>
      <Head>
        <title>RNG - Stay Random</title>
        <meta property="og:title" content="RNG - Stay Random" key="title" />
        <meta name="twitter:title" content="RNG- Stay Random" />

        <meta
          name="description"
          content="Generates a random number between a specified min and max value."
        />
        <meta
          property="og:description"
          content="Generates a random number between a specified min and max value."
        />
        <meta
          name="twitter:description"
          content="Generates a random number between a specified min and max value."
        />
      </Head>

      <main className="flex flex-col gap-12">
        <h1 className="text-center text-5xl font-extrabold text-gray-300 md:text-7xl">
          Random Number Generator
        </h1>

        <section className="flex flex-col gap-2">
          <div className="text-2xl font-bold">
            Number: <span className="text-teal-400">{number}</span>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-sm">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex w-full flex-col gap-1">
                <label htmlFor="min" className="w-fit font-medium dark:text-neutral-300">
                  Min:
                </label>

                <input
                  type="number"
                  className="h-10 w-full rounded border border-[#373A40] bg-[#25262b] px-2 text-sm text-neutral-400"
                  id="min"
                  defaultValue={0}
                  ref={minRef}
                />
              </div>

              <div className="flex w-full flex-col gap-1">
                <label htmlFor="max" className="w-fit font-medium dark:text-neutral-300">
                  Max:
                </label>

                <input
                  type="number"
                  className="h-10 w-full rounded border border-[#373A40] bg-[#25262b] px-2 text-sm text-neutral-400"
                  id="max"
                  defaultValue={10}
                  ref={maxRef}
                />
              </div>
            </div>

            {errors.length > 0 && (
              <div className="flex flex-col gap-2">
                {errors.map((error) => (
                  <p className="text-xs text-red-500" key={error}>
                    {error}
                  </p>
                ))}
              </div>
            )}

            <input
              className="h-10 w-full cursor-pointer rounded bg-teal-400 text-base text-white transition-colors hover:bg-gray-600"
              type="submit"
              value="Generate"
            />
          </form>
        </section>
      </main>
    </>
  );
};

export default RandomNumberGenerator;
