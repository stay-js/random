import { useState } from 'react';
import Link from 'next/link';
import disableScroll from 'disable-scroll';
import { items } from '@utils/items';

export const Navigation: React.FC = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const handleClose = () => {
    setIsToggled(false);
    disableScroll.off();
  };

  const handleToggle = () => {
    setIsToggled((value) => {
      if (value) disableScroll.off();
      else disableScroll.on();

      return !value;
    });
  };

  return (
    <nav className="fixed top-0 z-10 flex h-16 w-full select-none items-center justify-between bg-neutral-900 px-6 shadow">
      <Link href="/" className="group text-xl font-bold transition-colors hover:text-teal-400">
        Stay <span className="text-teal-400 transition-colors group-hover:text-white">Random</span>
      </Link>

      <button
        className="h-6 w-6 lg:hidden"
        title="Toggle Hamburger"
        type="button"
        onClick={handleToggle}
      >
        <span
          className={`${
            isToggled ? 'rotate-45' : '-translate-y-2'
          } absolute block h-0.5 w-6 bg-current transition-all duration-500`}
        />
        <span
          className={`${
            isToggled && 'opacity-0'
          } absolute block h-0.5 w-4 bg-current transition-all duration-500`}
        />
        <span
          className={`${
            isToggled ? 'w-6 -rotate-45' : 'w-2 translate-y-2'
          } absolute block h-0.5 bg-current transition-all duration-500`}
        />
      </button>

      <div
        className={`${
          isToggled ? 'left-0' : 'left-full'
        } fixed top-16 z-10 h-screen w-full bg-neutral-900 py-4 transition-all duration-500 ease-in-out lg:static lg:flex lg:h-16 lg:w-fit lg:items-center lg:bg-transparent lg:p-0 lg:transition-none`}
      >
        <ul className="flex flex-col gap-8 px-6 lg:w-fit lg:flex-row lg:gap-0 lg:p-0">
          <li>
            <Link
              className="relative flex font-bold text-white transition-colors after:absolute after:-bottom-4 after:h-px after:w-full after:bg-neutral-600 lg:static lg:block lg:rounded-md lg:px-3 lg:py-2 lg:font-normal lg:after:hidden lg:hover:bg-neutral-800"
              onClick={handleClose}
              href="/"
            >
              Home
            </Link>
          </li>
          {items.map(({ id, path, name, shortName }) => (
            <li key={id}>
              <Link
                className="relative flex font-bold text-white transition-colors after:absolute after:-bottom-4 after:h-px after:w-full after:bg-neutral-600 lg:static lg:block lg:rounded-md lg:px-3 lg:py-2 lg:font-normal lg:after:hidden lg:hover:bg-neutral-800"
                onClick={handleClose}
                href={path}
              >
                <span className="lg:hidden">{name}</span>
                <span className="hidden lg:block">{shortName}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
