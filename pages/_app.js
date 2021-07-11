import Head from "next/head";
import "../src/theme/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          DevSoutinho Gallery - Coletânea dos projetos feitos no canal
          DevSoutinho no YouTube
        </title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
