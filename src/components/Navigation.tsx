import Link from 'next/link';
import { useEffect, useState } from 'react';
import items from '@utils/items';

const Navigation: React.FC = () => {
  const [width, setWidth] = useState<number | null>(null);
  const [isToggled, setIsToggled] = useState<boolean>(false);

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, [width]);

  return (
    <nav className="fixed top-0 z-10 flex h-16 w-full select-none place-content-between items-center bg-neutral-900 px-6 shadow-sm">
      <Link href="/">
        <a className="group text-xl font-bold transition-colors hover:text-teal-400">
          Stay{' '}
          <span className="text-teal-400 transition-colors group-hover:text-white">Random</span>
        </a>
      </Link>

      {!width || width < 1024 ? (
        <>
          <button type="button" className="h-6 w-6" onClick={() => setIsToggled(!isToggled)}>
            <span
              className={`${
                isToggled ? 'rotate-45' : '-translate-y-2'
              } absolute block h-[2px] w-6 bg-white transition-all duration-500`}
            />
            <span
              className={`${
                isToggled && 'opacity-0'
              } absolute block h-[2px] w-6 bg-white transition-all duration-500`}
            />
            <span
              className={`${
                isToggled ? '-rotate-45' : 'translate-y-2'
              } absolute block h-[2px] w-6 bg-white transition-all duration-500`}
            />
          </button>

          <ul
            className={`${
              isToggled ? 'right-0' : 'right-[-100%]'
            } fixed top-16 z-10 flex h-screen w-full select-none flex-col items-center gap-8 bg-neutral-800 pt-8 transition-all duration-500 ease-in-out`}
          >
            {items.map(({ id, path, name }) => (
              <li key={id}>
                <Link href={path}>
                  <a
                    className="transition-colors hover:text-teal-400"
                    onClick={() => setIsToggled(false)}
                  >
                    {name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <ul className="flex">
          {items.map(({ id, path, shortName }) => (
            <li key={id}>
              <Link href={path}>
                <a className="rounded-md px-3 py-2 transition-colors hover:bg-neutral-700">
                  {shortName}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
