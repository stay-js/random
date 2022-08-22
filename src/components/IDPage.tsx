import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { TbCopy, TbRefresh } from 'react-icons/tb';

const IDPage: React.FC<{ name: string; generator: () => string }> = ({ generator, name }) => {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    setValue(generator());
  }, [generator]);

  const copyToClipboard = (value: string | null) => {
    if (!process.browser || !value) return;
    navigator.clipboard.writeText(value);
    toast.success('Copied to clipboard!');
  };

  return (
    <main>
      <Toaster toastOptions={{ duration: 1000 }} />

      <h1 className="text-center text-5xl font-extrabold text-gray-300 md:text-7xl">
        Random <span className="text-teal-400">{name}</span>
      </h1>

      <section className="my-12 min-w-[55%]">
        <div className="flex justify-between gap-8 border px-4 py-2 text-xl font-bold">
          {value}
          <button
            type="button"
            className="flex items-center gap-1"
            onClick={() => copyToClipboard(value)}
          >
            <TbCopy size={18} />
            Copy
          </button>
        </div>
        <button
          type="button"
          className="mt-2 flex items-center gap-1"
          onClick={() => setValue(generator())}
        >
          <TbRefresh size={18} /> Generate New {name}
        </button>
      </section>
    </main>
  );
};

export default IDPage;
