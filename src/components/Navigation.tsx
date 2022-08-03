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
    <nav className="fixed top-0 z-50 px-6 flex items-center w-full h-16 font-sans bg-neutral-900 shadow-sm select-none place-content-between">
      <Link href="/">
        <a className="group text-xl font-bold transition-colors hover:text-teal-400">
          Stay{' '}
          <span className="text-teal-400 group-hover:text-white transition-colors">Random</span>
        </a>
      </Link>

      {!width || width < 1024 ? (
        <>
          <Burger color="white" opened={isToggled} onClick={() => setIsToggled(!isToggled)} />

          <ul
            className={`${
              isToggled ? 'right-0' : 'right-[-100%]'
            } flex flex-col fixed gap-8 pt-8 w-full top-16 h-screen z-50 items-center bg-neutral-800 transition-all duration-500 ease-in-out select-none`}
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
                <a className="px-3 py-2 rounded-md hover:bg-neutral-700 transition-colors">
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
