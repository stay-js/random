'use client';

import type { z } from 'zod';
import type { SubmitHandler } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { minMaxSchema } from '~/app/number/random-number-generator';
import { Input } from '~/components/input';
import { Button } from '~/components/button';

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
    <section className="flex w-full max-w-sm flex-col gap-2">
      <div className="text-center font-mono text-5xl font-bold text-teal-400">
        {formatTime(time)}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 text-sm">
        <div className="flex flex-col gap-4 sm:flex-row">
          <Input label="Min:" {...register('min')} />
          <Input label="Max:" {...register('max')} />
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

        <Button type="submit">Generate</Button>
      </form>
    </section>
  );
};
