import Link from 'next/link';

const Anchor: React.FC<{ children: React.ReactNode; href: string }> = ({ children, href }) => (
  <Link
    className="bg-gradient-to-r from-teal-400 to-teal-700 bg-[length:0%_2px] bg-left-bottom bg-no-repeat font-bold transition-all duration-200 hover:bg-[length:100%_2px]"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </Link>
);

export const Footer: React.FC = () => (
  <footer className="flex flex-col items-center justify-between bg-neutral-900 p-6 text-white md:flex-row">
    <p>
      Made with &#10084;&#65039; by <Anchor href="https://znagy.hu/">stay</Anchor> from{' '}
      <b>Hungary</b>.
    </p>

    <div className="flex gap-2 md:gap-4">
      <Anchor href="https://github.com/stay-js/random">GitHub</Anchor>
      <Anchor href="https://nextjs.org/">Next.js</Anchor>
      <Anchor href="https://vercel.com/">Vercel</Anchor>
    </div>
  </footer>
);
