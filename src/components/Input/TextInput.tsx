import type { Ref } from 'react';
import { forwardRef, useId } from 'react';

export const TextInput: React.FC<{
  label?: string;
  placeholder?: string;
  ref?: Ref<HTMLInputElement>;
}> = forwardRef(({ label, placeholder, ...props }, ref) => {
  const id = useId();

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="w-fit font-medium text-neutral-300">
          {label}
        </label>
      )}

      <input
        className="h-10 rounded border border-[#373A40] bg-[#25262b] px-2 text-sm text-neutral-400"
        type="text"
        id={id}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />
    </div>
  );
});

TextInput.displayName = 'TextInput';
