import Head from 'next/head';
import '../theme/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DevSoutinho Gallery - Coletânea dos projetos feitos no canal DevSoutinho no YouTube</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
