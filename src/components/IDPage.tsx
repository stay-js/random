import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
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
      <h1 className="text-center text-5xl font-extrabold text-gray-300 md:text-7xl">
        Random <span className="text-teal-400">{name}</span>
      </h1>

      <section className="my-12 min-w-[55%]">
        <p className="border px-4 py-2 text-xl font-bold">{value}</p>

        <div className="mt-2 flex items-center justify-between">
          <button
            type="button"
            className="flex items-center gap-1"
            onClick={() => setValue(generator())}
          >
            <TbRefresh size={18} /> Generate New {name}
          </button>

          <button
            type="button"
            className="flex items-center gap-1"
            onClick={() => copyToClipboard(value)}
          >
            <TbCopy size={18} />
            Copy
          </button>
        </div>
      </section>
    </main>
  );
};

export default IDPage;
