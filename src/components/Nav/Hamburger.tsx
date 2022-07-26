import { Burger } from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';
import items from '../../utils/items';

const Hamburger: React.FC = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  return (
    <>
      <nav className="fixed top-0 z-50 px-6 flex items-center w-full h-16 bg-neutral-900 shadow-sm select-none place-content-between">
        <Link href="/">
          <a className="group text-xl font-bold transition-colors hover:text-teal-400">
            Stay{' '}
            <span className="text-teal-400 group-hover:text-white transition-colors">Random</span>
          </a>
        </Link>

        <Burger color="white" opened={isToggled} onClick={() => setIsToggled(!isToggled)} />
      </nav>

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
  );
};

export default Hamburger;
