import type { AppType } from 'next/dist/shared/lib/utils';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';
import Footer from '@components/Footer';
import Navigation from '@components/Navigation';
import '@styles/globals.css';

const App: AppType = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />

      <meta name="author" content="stay" />
      <meta
        name="keywords"
        content="stay, random, stay random, CUID, collision resistant unique identifier, GUID, globally unique identifier,
        UUID, universally unique identifier, RNG, random number generator, RTP, random thing picker, RCP, random color picker"
      />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" key="og_type" />
      <meta property="og:site_name" content="Stay Random" key="site_name" />

      <meta name="url" content={`https://random.znagy.hu${useRouter().pathname}`} />
      <meta property="og:url" content={`https://random.znagy.hu${useRouter().pathname}`} />
      <meta property="twitter:url" content={`https://random.znagy.hu${useRouter().pathname}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="znagy.hu" />

      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="rating" content="general" />
    </Head>

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
