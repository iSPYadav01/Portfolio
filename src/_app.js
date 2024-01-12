import Head from 'next/head';
import '../app/globals.css'; // Assuming your global styles are in this file

function MyApp({ components, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="S.Pratap Yadav" />
        <title>Portfolio</title>
      </Head>
      <components {...pageProps} />
    </>
  );
}

export default MyApp;
