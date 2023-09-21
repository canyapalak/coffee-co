import "tailwindcss/tailwind.css";
import "../app/globals.css";
import Image from "next/image";
import imgCompany from "@/public/assets/images/home003.jpg";
import beans01 from "@/public/assets/images/beans01.jpg";
import beans02 from "@/public/assets/images/beans02.jpg";
import beans03 from "@/public/assets/images/beans03.jpg";
import leaf from "@/public/assets/images/leaf2.png";
import truck from "@/public/assets/images/truck01.png";
import Link from "next/link";
import { LanguageContext } from "@/app/contexts/LanguageContext";
import { useContext } from "react";

export default function Home() {
  const { text } = useContext(LanguageContext);

  return (
    <div>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-5 md:w-5/12">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={imgCompany}
                alt="Image"
                className="shadow-lg opacity-80 hover:opacity-100 duration-500 
                hover:scale-105 transition-[transform, shadow]"
              />
            </div>
            <Link href="/policy" className="ml-auto mr-auto">
              <div
                id="main-button"
                className="border-[1px] border-neutral-400 rounded-xl items-center bg-neutral-50 dark:bg-stone-300 px-5 
              py-2 shadow-md hover:bg-green-100 transition-colors duration-300 active:text-neutral-400"
              >
                <p className="text-lg">{text.companyButton}</p>
              </div>
            </Link>
          </div>

          <div className="flex flex-col gap-5 md:w-7/12 justify-between md:mt-0 mt-10">
            <div className="relative md:px-2 slide-in-top dark:text-orange-50">
              <p
                className={`text-2xl 2xl:text-3xl active text-center md:text-justify font-light`}
              >
                {text.slideText}
              </p>
            </div>
            <div className="relative md:px-2 slide-in-left dark:text-orange-50">
              <p
                className={`text-2xl 2xl:text-3xl active text-center md:text-justify font-light`}
              >
                {text.slideText}
              </p>
            </div>
            <div className="flex flex-col gap-5 ">
              <div
                className="flex flex-row gap-5 justify-around  ml-auto mr-auto align-bottom w-11/12"
                id="bean-boxes"
              >
                <Link href="/shop/3" className="w-1/3">
                  <div className="relative overflow-hidden rounded-xl">
                    <div className="group">
                      <Image
                        src={beans01}
                        alt="Image"
                        className="shadow-lg opacity-80 group-hover:opacity-100 group-hover:scale-105 duration-500 transition-[transform, shadow]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <p className="text-yellow-100 text-4xl">
                          {text.ethiopia}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="/shop/1" className="w-1/3">
                  <div className="relative overflow-hidden rounded-xl">
                    <div className="group">
                      <Image
                        src={beans02}
                        alt="Image"
                        className="shadow-lg opacity-80 group-hover:opacity-100 group-hover:scale-105 duration-500 transition-[transform, shadow]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <p className="text-yellow-100 text-4xl">
                          {text.brazil}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="/shop/5" className="w-1/3">
                  <div className="relative overflow-hidden rounded-xl">
                    <div className="group">
                      <Image
                        src={beans03}
                        alt="Image"
                        className="shadow-lg opacity-80 group-hover:opacity-100 group-hover:scale-105 duration-500 transition-[transform, shadow]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <p className="text-yellow-100 text-4xl">{text.peru}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <Link href="/shop" className="ml-auto mr-auto">
                <div
                  id="main-button"
                  className="border-[1px] border-neutral-400 rounded-xl items-center bg-neutral-50 dark:bg-stone-300 px-5 
                py-2 shadow-md hover:bg-green-100 transition-colors duration-300 active:text-neutral-400"
                >
                  <p className="text-lg">{text.beansButton}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center ml-auto mr-auto md:w-2/3 mb-5 ">
          <Image src={leaf} alt="Leaf" className="w-8 h-8 inline-block" />
          <p className="text-xl inline-block dark:text-orange-50">
            {text.policyText}
          </p>
          <Link href="/policy" className="ml-auto mr-auto">
            <div
              id="main-button"
              className="border-[1px] border-neutral-400 rounded-xl bg-neutral-50 dark:bg-stone-300 px-5 
                py-2 shadow-md hover:bg-green-100 transition-colors duration-300 inline-block mt-3 
                active:text-neutral-400"
            >
              <p className="text-lg">{text.policyButton}</p>
            </div>
          </Link>
        </div>
        <div className="text-center ml-auto mr-auto md:w-2/3 ">
          <Image src={truck} alt="Leaf" className="w-8 h-8 inline-block" />
          <p className="text-xl inline-block dark:text-orange-50">
            {text.shippingText}
          </p>
          <Link href="/shop" className="ml-auto mr-auto">
            <div
              id="main-button"
              className="border-[1px] border-neutral-400 rounded-xl bg-neutral-50 dark:bg-stone-300 px-5 
                py-2 shadow-md hover:bg-green-100 transition-colors duration-300  inline-block mt-3 
                active:text-neutral-400"
            >
              <p className="text-lg">{text.shoppingButton}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
