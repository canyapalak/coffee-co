import "tailwindcss/tailwind.css";
import "@/app/globals.css";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { CartProvider } from "@/app/contexts/CartContext";
import { League_Spartan } from "next/font/google";
import Head from "next/head";
import { LanguageProvider } from "@/app/contexts/LanguageContext";

const spartan = League_Spartan({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>coffee-co</title>
      </Head>
      <main className={`flex flex-col min-h-screen ${spartan.className}`}>
        <CartProvider>
          <LanguageProvider>
            <div className="md:px-24 px-10 pt-5 pb-20" id="app-bg">
              <Navbar {...pageProps} />
              <Component {...pageProps} />
            </div>
          </LanguageProvider>
        </CartProvider>
        <Footer />
      </main>
    </>
  );
}
