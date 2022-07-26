import { useEffect, useState } from 'react';
import Hamburger from './Hamburger';
import NavBar from './NavBar';

const Nav: React.FC = () => {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, [width]);

  if (!width || width < 1024) return <Hamburger />;

  return <NavBar />;
};

export default Nav;
