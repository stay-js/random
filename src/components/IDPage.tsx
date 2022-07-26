import { useState } from 'react';
import { IoRefreshSharp } from 'react-icons/io5';
import { TbCopy } from 'react-icons/tb';

const IDPage: React.FC<{ name: string; generator: () => string }> = ({ generator, name }) => {
  const [value, setValue] = useState<string>(generator());

  const copyToClipboard = (value: string) => {
    if (!process.browser) return;
    navigator.clipboard.writeText(value);
  };

  return (
    <main>
      <h1 className="text-5xl md:text-7xl font-extrabold text-gray-300">
        Random <span className="text-teal-400">{name}</span>
      </h1>

      <section className="my-12 min-w-[55%]">
        <div className="border px-4 py-2 gap-8 font-bold text-xl flex justify-between">
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
          className="flex items-center gap-1 mt-2"
          onClick={() => setValue(generator())}
        >
          <IoRefreshSharp size={18} /> Generate New {name}
        </button>
      </section>
    </main>
  );
};

export default IDPage;
