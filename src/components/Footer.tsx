import Link from 'next/link';

const Footer: React.FC = () => (
  <footer className="min-h-20 flex flex-col items-center justify-between bg-neutral-900 p-6 text-white md:flex-row">
    <p>
      Made with &#10084;&#65039; by{' '}
      <Link href="https://znagy.hu/" target="_blank" className="link font-bold">
        stay
      </Link>{' '}
      from <b>Hungary</b>.
    </p>

    <div className="flex gap-2 md:gap-4">
      <Link href="https://github.com/stay-js/random" target="_blank" className="link font-bold">
        GitHub
      </Link>
      <Link href="https://nextjs.org/" target="_blank" className="link font-bold">
        Next.js
      </Link>
      <Link href="https://vercel.com/" target="_blank" className="link font-bold">
        Vercel
      </Link>
    </div>
  </footer>
);

export default Footer;
