import Link from 'next/link';

const Footer: React.FC = () => (
  <footer className="min-h-20 flex flex-col md:flex-row justify-between items-center p-6 text-white bg-neutral-900">
    <p>
      Made with &#10084;&#65039; by{' '}
      <Link href="https://znagy.hu/">
        <a target="_blank" className="font-bold link">
          stay
        </a>
      </Link>{' '}
      from <b>Hungary</b>.
    </p>

    <div className="flex gap-2 md:gap-4">
      <Link href="https://github.com/stay-js/random">
        <a target="_blank" className="font-bold link">
          GitHub
        </a>
      </Link>
      <Link href="https://vercel.com/">
        <a target="_blank" className="font-bold link">
          Vercel
        </a>
      </Link>
    </div>
  </footer>
);

export default Footer;
