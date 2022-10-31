import disableScroll from 'disable-scroll';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import items from '@utils/items';

const Navigation: React.FC = () => {
  const [width, setWidth] = useState<number | null>(null);
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

  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="fixed top-0 z-10 flex h-16 w-full select-none items-center justify-between bg-neutral-900 px-6 shadow">
      <Link href="/" className="group text-xl font-bold transition-colors hover:text-teal-400">
        Stay <span className="text-teal-400 transition-colors group-hover:text-white">Random</span>
      </Link>

      {!width || width < 1024 ? (
        <>
          <button type="button" className="h-6 w-6" onClick={handleToggle}>
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
              isToggled ? 'left-0' : 'left-[-100%]'
            } fixed top-16 z-10 flex h-screen w-full flex-col gap-8 bg-neutral-900 p-8 transition-all duration-500 ease-in-out`}
          >
            <li>
              <Link
                className="relative flex font-bold after:absolute after:-bottom-4 after:h-[1px] after:w-full after:bg-neutral-600"
                onClick={handleClose}
                href="/"
              >
                Home
              </Link>
            </li>

            {items.map(({ id, path, name }) => (
              <li key={id}>
                <Link
                  className="relative flex font-bold after:absolute after:-bottom-4 after:h-[1px] after:w-full after:bg-neutral-600"
                  onClick={handleClose}
                  href={path}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <ul className="flex">
          <li>
            <Link href="/" className="rounded-md px-3 py-2 transition-colors hover:bg-neutral-700">
              Home
            </Link>
          </li>

          {items.map(({ id, path, shortName }) => (
            <li key={id}>
              <Link
                href={path}
                className="rounded-md px-3 py-2 transition-colors hover:bg-neutral-700"
              >
                {shortName}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
