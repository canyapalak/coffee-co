import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { Quicksand } from "next/font/google";
import Head from "next/head";
import "tailwindcss/tailwind.css";

const nunito = Quicksand({ weight: ["500"], subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <main
        className={`bg-gradient-to-br from-neutral-100 via-green-50 to-neutral-100 min-h-screen ${nunito.className}`}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
