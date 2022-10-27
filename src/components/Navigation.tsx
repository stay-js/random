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
    setIsToggled(!isToggled);

    if (isToggled) disableScroll.off();
    else disableScroll.on();
  };

  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="fixed top-0 z-10 flex h-16 w-full select-none place-content-between items-center bg-neutral-900 px-6 shadow-sm">
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
              isToggled ? 'right-0' : 'right-[-100%]'
            } fixed top-16 z-10 flex h-screen w-full select-none flex-col items-center gap-8 bg-neutral-800 pt-8 transition-all duration-500 ease-in-out`}
          >
            {items.map(({ id, path, name }) => (
              <li key={id}>
                <Link
                  href={path}
                  className="transition-colors hover:text-teal-400"
                  onClick={handleClose}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <ul className="flex">
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
