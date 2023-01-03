import type { NextPage } from 'next';
import { useRef, useState, useEffect } from 'react';
import { Meta } from '@components/Meta';
import { validateCountdown as validate } from '@utils/validate';

const formatTime = (time: number | null): string => {
  if (!time) return '00:00:00';

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time / 60) % 60);
  const seconds = time % 60;

  return ` ${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${
    seconds < 10 ? '0' : ''
  }${seconds}`;
};

const Page: NextPage = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [time, setTime] = useState<number | null>(null);
  const minRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!time || time < 1) return;

    const timer = setTimeout(() => setTime((value) => Number(value) - 1), 1000);

    return () => clearTimeout(timer);
  }, [time]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const values = {
      min: minRef.current?.value,
      max: maxRef.current?.value,
    };

    const newErrors = validate(values);
    setErrors(newErrors);

    if (newErrors.length === 0) {
      setTime(
        Math.floor(Math.random() * (Number(values.max) - Number(values.min) + 1)) +
          Number(values.min),
      );
    }
  };

  return (
    <>
      <Meta
        path="/countdown"
        title="Countdown Timer - Stay Random"
        desc="Generates a random interval and starts a countdown timer."
      />

      <main className="flex flex-col gap-12">
        <h1 className="text-center text-5xl font-extrabold text-gray-300 md:text-7xl">
          Random Countdown Timer
        </h1>

        <section className="flex min-w-[20rem] flex-col gap-2">
          <div className="flex w-full flex-col items-center font-mono text-5xl font-bold text-teal-400">
            {formatTime(time)}
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
    </>
  );
};

export default Page;
