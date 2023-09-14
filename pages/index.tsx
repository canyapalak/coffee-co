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

export default function Home() {
  return (
    <div className="px-24 py-5">
      <div className="flex flex-col gap-16">
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-5 w-5/12">
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
                className="border-[1px] border-neutral-400 rounded-xl items-center bg-neutral-50 px-5 
              py-2 shadow-md hover:bg-green-100 transition-colors duration-300 active:text-neutral-400"
              >
                <p className="text-lg">Learn About the Company</p>
              </div>
            </Link>
          </div>

          <div className="flex flex-col gap-5 w-7/12 justify-between">
            <div className="relative px-2">
              <p
                className={`text-2xl 2xl:text-3xl slide-in active text-justify font-light`}
              >
                The best quality coffees from across the globe, professional
                roasting and a remarkable tasting experience. Step into the
                world of Coffee-Co and join us on this flavorful journey.
              </p>
            </div>
            <div className="flex flex-col gap-5 ">
              <div className="flex flex-row gap-5 justify-around  ml-auto mr-auto align-bottom w-11/12">
                <Link href="/shop/3" className="w-1/3">
                  <div className="relative overflow-hidden rounded-xl">
                    <div className="group">
                      <Image
                        src={beans01}
                        alt="Image"
                        className="shadow-lg opacity-80 group-hover:opacity-100 group-hover:scale-105 duration-500 transition-[transform, shadow]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <p className="text-yellow-100 text-4xl">Ethiopia</p>
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
                        <p className="text-yellow-100 text-4xl">Brazil</p>
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
                        <p className="text-yellow-100 text-4xl">Peru</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <Link href="/shop" className="ml-auto mr-auto">
                <div
                  id="main-button"
                  className="border-[1px] border-neutral-400 rounded-xl items-center bg-neutral-50 px-5 
                py-2 shadow-md hover:bg-green-100 transition-colors duration-300 active:text-neutral-400"
                >
                  <p className="text-lg">Discover Our Coffee Beans</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center ml-auto mr-auto w-2/3 mb-5">
          <Image src={leaf} alt="Leaf" className="w-8 h-8 inline-block" />
          <p className="text-xl inline-block">
            Read our 3F Policy and see how passionate we are about delivering
            not just a cup of coffee but an entire experience that revolves
            around our three core values.
          </p>
          <Link href="/policy" className="ml-auto mr-auto">
            <div
              id="main-button"
              className="border-[1px] border-neutral-400 rounded-xl bg-neutral-50 px-5 
                py-2 shadow-md hover:bg-green-100 transition-colors duration-300 inline-block mt-3 active:text-neutral-400"
            >
              <p className="text-lg">Our Policy</p>
            </div>
          </Link>
        </div>
        <div className="text-center ml-auto mr-auto w-2/3 mb-24">
          <Image src={truck} alt="Leaf" className="w-8 h-8 inline-block" />
          <p className="text-xl inline-block">
            We deliver to any European destination and the best part is,
            shipping is free for your orders over 100€. Real coffee lovers stock
            up their coffee.
          </p>
          <Link href="/shop" className="ml-auto mr-auto">
            <div
              id="main-button"
              className="border-[1px] border-neutral-400 rounded-xl bg-neutral-50 px-5 
                py-2 shadow-md hover:bg-green-100 transition-colors duration-300  inline-block mt-3 active:text-neutral-400"
            >
              <p className="text-lg">Start Shopping</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
