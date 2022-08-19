import { Burger } from '@mantine/core';
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
    <nav className="fixed top-0 z-50 flex h-16 w-full select-none place-content-between items-center bg-neutral-900 px-6 font-sans shadow-sm">
      <Link href="/">
        <a className="group text-xl font-bold transition-colors hover:text-teal-400">
          Stay{' '}
          <span className="text-teal-400 transition-colors group-hover:text-white">Random</span>
        </a>
      </Link>

      {!width || width < 1024 ? (
        <>
          <Burger color="white" opened={isToggled} onClick={() => setIsToggled(!isToggled)} />

          <ul
            className={`${
              isToggled ? 'right-0' : 'right-[-100%]'
            } fixed top-16 z-50 flex h-screen w-full select-none flex-col items-center gap-8 bg-neutral-800 pt-8 transition-all duration-500 ease-in-out`}
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
