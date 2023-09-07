import { Nunito } from "next/font/google";
import Head from "next/head";
import "tailwindcss/tailwind.css";

const nunito = Nunito({ weight: ["400"], subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <main
        className={`bg-gradient-to-br from-neutral-100 to-stone-100 px-16 py-5 min-h-screen ${nunito.className}`}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}
