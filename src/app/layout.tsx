import { Toaster } from 'react-hot-toast';
import { Footer } from '~/components/footer';
import { Navigation } from '~/components/navigation';

import '~/styles/globals.css';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className="antialiased">
      <body className="overflow-x-hidden bg-neutral-800 text-white">
        <Toaster toastOptions={{ duration: 1000 }} />

        <div className="grid min-h-screen grid-cols-1 grid-rows-[1fr_auto]">
          <div>
            <Navigation />
            {children}
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
