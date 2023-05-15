'use client';

import type { SubmitHandler } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// I know I could use z.coerce.number() but then an empty string would be converted to 0 and no error message would be shown.

export const minMaxSchema = z
  .object({
    min: z
      .string()
      .min(1, { message: 'Please specify a min value!' })
      .refine((data) => !isNaN(Number(data)), { message: 'Min value must be a number!' })
      .refine((data) => Number(data) >= 0, { message: 'Min value must be bigger than 0!' }),

    max: z
      .string()
      .min(1, { message: 'Please specify a max value!' })
      .refine((data) => !isNaN(Number(data)), { message: 'Max value must be a number!' })
      .refine((data) => Number(data) >= 0, { message: 'Max value must be bigger than 0!' }),
  })
  .refine((data) => Number(data.max) > Number(data.min), {
    message: 'Min value must be less than max value!',
  });

type MinMaxSchema = z.infer<typeof minMaxSchema>;

const defaultValues: MinMaxSchema = {
  min: '0',
  max: '10',
};

export const RandomNumberGenerator: React.FC = () => {
  const [number, setNumber] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MinMaxSchema>({ resolver: zodResolver(minMaxSchema), defaultValues });

  const onSubmit: SubmitHandler<MinMaxSchema> = (data) => {
    setNumber(
      Math.floor(Math.random() * (Number(data.max) - Number(data.min) + 1)) + Number(data.min),
    );
  };

  useEffect(() => setNumber(Math.floor(Math.random() * 11)), []);

  return (
    <section className="w-ful flex max-w-sm flex-col gap-2">
      <div className="text-2xl font-bold">
        Number: <span className="text-teal-400">{number}</span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 text-sm">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex w-full flex-col gap-1">
            <label htmlFor="min" className="w-fit font-medium dark:text-neutral-300">
              Min:
            </label>

            <input
              type="number"
              className="h-10 rounded border border-[#373A40] bg-[#25262b] px-2 text-sm text-neutral-400"
              {...register('min')}
            />
          </div>

          <div className="flex w-full flex-col gap-1">
            <label htmlFor="max" className="w-fit font-medium dark:text-neutral-300">
              Max:
            </label>

            <input
              type="number"
              className="h-10 rounded border border-[#373A40] bg-[#25262b] px-2 text-sm text-neutral-400"
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
          className="h-10 cursor-pointer rounded bg-teal-400 text-base text-white transition-colors hover:bg-gray-600"
        >
          Generate
        </button>
      </form>
    </section>
  );
};
