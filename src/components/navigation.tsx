'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { items } from '~/constants/items';
import { cn } from '~/utils/cn';

const Item: React.FC<{
  path: string;
  children: React.ReactNode;
  onClick: () => void;
}> = ({ path, children, onClick }) => {
  const pathname = usePathname();

  return (
    <li>
      <Link
        className={cn(
          'relative flex font-bold text-white transition-colors after:absolute after:-bottom-4 after:h-px after:w-full after:bg-neutral-600 lg:static lg:block lg:rounded-md lg:px-3 lg:py-2 lg:font-medium lg:after:hidden lg:hover:bg-neutral-800',
          path !== pathname && 'lg:text-neutral-400',
        )}
        onClick={onClick}
        href={path}
      >
        {children}
      </Link>
    </li>
  );
};

export const Navigation: React.FC = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const handleClose = () => {
    setIsToggled(false);
    document.body.style.overflowY = 'scroll';
  };

  const handleToggle = () => {
    setIsToggled((value) => {
      value
        ? (document.body.style.overflowY = 'scroll')
        : (document.body.style.overflowY = 'hidden');

      return !value;
    });
  };

  return (
    <nav className="sticky top-0 z-10 flex h-16 select-none items-center justify-between bg-neutral-900 px-6 shadow">
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
          className={cn(
            'absolute block h-0.5 w-6 bg-current transition-all duration-300',
            isToggled ? 'rotate-45' : '-translate-y-2',
          )}
        />
        <span
          className={cn(
            'absolute block h-0.5 w-4 bg-current transition-all duration-300',
            isToggled && 'opacity-0',
          )}
        />
        <span
          className={cn(
            'absolute block h-0.5 bg-current transition-all duration-300',
            isToggled ? 'w-6 -rotate-45' : 'w-2 translate-y-2',
          )}
        />
      </button>

      <div
        className={cn(
          'fixed left-0 top-16 h-[calc(100vh-4rem)] w-full overflow-y-auto bg-neutral-900 px-6 pb-20 pt-4 lg:static lg:flex lg:h-fit lg:w-fit lg:p-0',
          !isToggled && 'hidden',
        )}
      >
        <ul className="content flex flex-col gap-8 lg:w-fit lg:flex-row lg:gap-0">
          <Item path="/" onClick={handleClose}>
            Home
          </Item>

          {items.map(({ path, title, shortTitle }) => (
            <Item key={`nav-${path}`} path={path} onClick={handleClose}>
              <span className="lg:hidden">{title}</span>
              <span className="hidden lg:block">{shortTitle}</span>
            </Item>
          ))}
        </ul>
      </div>
    </nav>
  );
};
