import type { NextPage } from 'next';
import { NumberInput } from '@mantine/core';
import Head from 'next/head';
import { useState } from 'react';

export interface Props {
  min: number;
  max: number;
}

export interface Errors {
  min?: string;
  max?: string;
}

export interface InputEvent {
  key: string;
  value: number;
}

const validate = (values: Props): Errors => {
  const errors: Errors = {};

  if (values.min === null || values.min === undefined) errors.min = 'Please specify a min value!';
  if (values.max === null || values.max === undefined) errors.max = 'Please specify a max value!';

  if (isNaN(values.min)) errors.min = 'Min value must be a number!';
  if (isNaN(values.max)) errors.max = 'Max value must be a number!';

  if (values.min >= values.max) {
    errors.max = 'Max value must be greater than min value!';
    errors.min = 'Min value must be less than max value!';
  }

  return errors;
};

const LandingPage: NextPage = () => {
  const [errors, setErrors] = useState<Errors>({});
  const [values, setValues] = useState<Props>({ min: 1, max: 10 });
  const [number, setNumber] = useState<number | null>(null);

  const handleChange = ({ key, value }: InputEvent) => setValues({ ...values, [key]: value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validate(values);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setNumber(Math.floor(Math.random() * (values.max - values.min + 1)) + values.min);
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

      <main>
        <h1 className="text-center text-5xl font-extrabold text-gray-300 md:text-7xl">
          Random Number Generator
        </h1>

        <section className="my-12">
          <div className="mb-4 text-2xl font-bold">
            Number: <span className="text-teal-400">{number}</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <NumberInput
                className="mb-4"
                label="Min:"
                id="minasd"
                value={values.min}
                onChange={(event) => handleChange({ key: 'min', value: event! })}
                error={errors.min}
              />

              <NumberInput
                className="mb-4"
                label="Max:"
                id="max"
                value={values.max}
                onChange={(event) => handleChange({ key: 'max', value: event! })}
                error={errors.max}
              />
            </div>

            <input
              className="h-9 w-full cursor-pointer rounded bg-teal-400 text-white transition-colors hover:bg-gray-600"
              type="submit"
              value="Generate"
            />
          </form>
        </section>
      </main>
    </>
  );
};

export default LandingPage;
