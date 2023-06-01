import { forwardRef, useId } from 'react';

export const Textarea: React.FC<{
  label?: string;
  placeholder?: string;
  rows?: number;
  ref?: React.Ref<HTMLTextAreaElement>;
}> = forwardRef(({ label, placeholder, rows, ...props }, ref) => {
  const id = useId();

  return (
    <div className="flex w-full flex-col gap-1">
      {label && (
        <label htmlFor={id} className="w-fit font-medium text-neutral-300">
          {label}
        </label>
      )}

      <textarea
        className="resize-none rounded border border-[#373A40] bg-[#25262b] px-3 py-2 text-white"
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
