import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { League_Spartan } from "next/font/google";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import "@/app/globals.css";

const spartan = League_Spartan({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <main className={`flex flex-col min-h-screen ${spartan.className}`}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
