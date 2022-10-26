import type { NextPage } from 'next';
import { useRef, useState, useEffect } from 'react';
import Layout from '@layouts/Layout';

export interface Props {
  min: string | undefined;
  max: string | undefined;
}

export interface InputEvent {
  key: string;
  value: number;
}

const formatTime = (time: number | null): string => {
  if (!time) return '00:00:00';

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time / 60) % 60);
  const seconds = time % 60;

  return ` ${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${
    seconds < 10 ? '0' : ''
  }${seconds}`;
};

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

  if (Number(values.max) >= 10800)
    errors.push('Max value must be less than 3 hours or 10800 seconds!');

  return errors;
};

const Countdown: NextPage = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [interval, setInterval] = useState<number | null>(null);
  const minRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!interval || interval < 1) return;

    const timer = setTimeout(() => setInterval(interval - 1), 1000);

    return () => clearTimeout(timer);
  }, [interval]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const values = {
      min: minRef.current?.value,
      max: maxRef.current?.value,
    };

    const newErrors = validate(values);
    setErrors(newErrors);

    if (newErrors.length === 0) {
      setInterval(
        Math.floor(Math.random() * (Number(values.max) - Number(values.min) + 1)) +
          Number(values.min),
      );
    }
  };

  return (
    <Layout path="/countdown" title="Countdown Timer - Stay Random" desc="">
      <main className="flex flex-col gap-12">
        <h1 className="text-center text-5xl font-extrabold text-gray-300 md:text-7xl">
          Random Countdown Timer
        </h1>

        <section className="flex min-w-[20rem] flex-col gap-2">
          <div className="flex flex-col items-center text-2xl font-bold">
            <span className="text-teal-400">{formatTime(interval)}</span>
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
                  defaultValue={60}
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
    </Layout>
  );
};

export default Countdown;
