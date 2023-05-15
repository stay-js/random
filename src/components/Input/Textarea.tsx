import type { Ref } from 'react';
import { forwardRef, useId } from 'react';

export const Textarea: React.FC<{
  label?: string;
  placeholder?: string;
  rows: number;
  ref?: Ref<HTMLTextAreaElement>;
}> = forwardRef(({ label, placeholder, rows, ...props }, ref) => {
  const id = useId();

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="w-fit font-medium text-neutral-300">
          {label}
        </label>
      )}

      <textarea
        className="resize-none rounded border border-neutral-300 px-3 py-2 text-black dark:border-[#373A40] dark:bg-[#25262b] dark:text-white"
        id={id}
        rows={rows}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />
    </div>
  );
});

Textarea.displayName = 'Textarea';
