import type { NextPage } from 'next';
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
                  value={values.min}
                  onChange={(event) =>
                    handleChange({ key: 'min', value: Number(event.currentTarget.value) })
                  }
                />

                {errors.min && <p className="text-xs text-red-500">{errors.min}</p>}
              </div>

              <div className="flex w-full flex-col gap-1">
                <label htmlFor="max" className="w-fit font-medium dark:text-neutral-300">
                  Max:
                </label>

                <input
                  type="number"
                  className="h-10 w-full rounded border border-[#373A40] bg-[#25262b] px-2 text-sm text-neutral-400"
                  id="max"
                  value={values.max}
                  onChange={(event) =>
                    handleChange({ key: 'max', value: Number(event.currentTarget.value) })
                  }
                />

                {errors.max && <p className="text-xs text-red-500">{errors.max}</p>}
              </div>
            </div>

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

export default LandingPage;
