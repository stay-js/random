import { useState, useEffect } from 'react';
import { TbCopy, TbRefresh } from 'react-icons/tb';
import copyToClipboard from '@utils/copyToClipboard';

const IDPage: React.FC<{ name: string; generator: () => string }> = ({ generator, name }) => {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    setValue(generator());
  }, [generator]);

  return (
    <main className="flex flex-col gap-12">
      <h1 className="text-center text-5xl font-extrabold text-gray-300 md:text-7xl">
        Random <span className="text-teal-400">{name}</span>
      </h1>

      <section className="flex min-w-[75%] flex-col gap-2 md:min-w-[55%]">
        <p
          className="max-w-full border px-4 py-2 text-xl font-bold"
          style={{ overflowWrap: 'anywhere' }}
        >
          {value}
        </p>

        <div className="flex items-center justify-between">
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
