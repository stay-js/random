'use client';

import type { z } from 'zod';
import type { SubmitHandler } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { minMaxSchema } from '@app/number/RandomNumberGenerator';

const DAY_IN_SECONDS = 24 * 60 * 60;

const countdownSchema = minMaxSchema.refine((data) => Number(data.max) < DAY_IN_SECONDS, {
  message: `Max value must be less than 24 hours or ${DAY_IN_SECONDS} seconds!`,
});

type CountdownSchema = z.infer<typeof countdownSchema>;

const defaultValues: CountdownSchema = {
  min: '0',
  max: '60',
};

const formatTime = (time: number | null): string => {
  if (!time) return '00:00:00';

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time / 60) % 60);
  const seconds = time % 60;

  return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${
    seconds < 10 ? '0' : ''
  }${seconds}`;
};

export const Countdown: React.FC = () => {
  const [time, setTime] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CountdownSchema>({ resolver: zodResolver(countdownSchema), defaultValues });

  useEffect(() => {
    if (!time || time < 1) return;

    const timer = setTimeout(() => setTime((value) => Number(value) - 1), 1000);

    return () => clearTimeout(timer);
  }, [time]);

  const onSubmit: SubmitHandler<CountdownSchema> = (data) => {
    setTime(
      Math.floor(Math.random() * (Number(data.max) - Number(data.min) + 1)) + Number(data.min),
    );
  };

  return (
    <section className="flex min-w-[20rem] flex-col gap-2">
      <div className="flex w-full flex-col items-center font-mono text-5xl font-bold text-teal-400">
        {formatTime(time)}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 text-sm">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex w-full flex-col gap-1">
            <label htmlFor="min" className="w-fit font-medium dark:text-neutral-300">
              Min:
            </label>

            <input
              type="number"
              className="h-10 w-full rounded border border-[#373A40] bg-[#25262b] px-2 text-sm text-neutral-400"
              {...register('min')}
            />
          </div>

          <div className="flex w-full flex-col gap-1">
            <label htmlFor="max" className="w-fit font-medium dark:text-neutral-300">
              Max:
            </label>

            <input
              type="number"
              className="h-10 w-full rounded border border-[#373A40] bg-[#25262b] px-2 text-sm text-neutral-400"
              {...register('max')}
            />
          </div>
        </div>

        {errors && (
          <ul className="flex flex-col gap-1">
            {Object.keys(errors).map((error) => (
              <li className="text-xs text-red-500" key={error}>
                {errors[error as keyof typeof errors]?.message}
              </li>
            ))}
          </ul>
        )}

        <button
          type="submit"
          className="h-10 w-full cursor-pointer rounded bg-teal-400 text-base text-white transition-colors hover:bg-gray-600"
        >
          Generate
        </button>
      </form>
    </section>
  );
};
