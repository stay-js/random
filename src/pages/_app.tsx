import type { AppType } from 'next/dist/shared/lib/utils';
import { Toaster } from 'react-hot-toast';
import { Footer } from '@components/Footer';
import { Navigation } from '@components/Navigation';

import '@styles/globals.css';

const App: AppType = ({ Component, pageProps }) => (
  <>
    <Toaster toastOptions={{ duration: 1000 }} />

    <div className="flex min-h-screen flex-col justify-between">
      <div>
        <Navigation />
        <Component {...pageProps} />
      </div>

      <Footer />
    </div>
  </>
);

export default App;
