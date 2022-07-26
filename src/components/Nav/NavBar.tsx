import Link from 'next/link';
import items from '../../utils/items';

const NavBar: React.FC = () => (
  <nav className="fixed top-0 z-50 px-6 flex items-center w-full h-16 font-sans bg-neutral-900 shadow-sm select-none place-content-between">
    <Link href="/">
      <a className="group text-xl font-bold transition-colors hover:text-teal-400">
        Stay <span className="text-teal-400 group-hover:text-white transition-colors">Random</span>
      </a>
    </Link>

    <ul className="flex gap-1">
      {items.map(({ id, path, shortName }) => (
        <li key={id}>
          <Link href={path}>
            <a className="px-4 py-2 rounded-md hover:bg-neutral-700 transition-colors">
              {shortName}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavBar;
