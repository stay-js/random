import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';
import { Footer } from '@components/Footer';
import { Navigation } from '@components/Navigation';

import '@styles/globals.css';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className="antialiased">
      <body className="overflow-x-hidden bg-neutral-800 text-white">
        <Analytics />

        <Toaster toastOptions={{ duration: 1000 }} />

        <div className="flex min-h-screen flex-col justify-between">
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
