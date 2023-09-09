import "tailwindcss/tailwind.css";
import "../app/globals.css";
import Image from "next/image";
import imgCompany from "@/public/assets/images/home003.jpg";
import beans01 from "@/public/assets/images/beans01.jpg";
import beans02 from "@/public/assets/images/beans02.jpg";
import beans03 from "@/public/assets/images/beans03.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-24 py-5">
      <div className="flex flex-row gap-10">
        <div className="flex flex-col gap-5 w-5/12">
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src={imgCompany}
              alt="Image"
              className="shadow-lg opacity-90 hover:opacity-100 duration-500 
              hover:scale-105 transition-[transform, shadow]"
            />
          </div>
          <Link href="/company" className="ml-auto mr-auto">
            <div
              className="border-[1px] border-neutral-400 rounded-3xl items-center bg-neutral-50 px-5 
            py-2 shadow-md hover:bg-red-100 transition-colors duration-300"
            >
              <p className="text-lg">Learn About the Company</p>
            </div>
          </Link>
        </div>

        <div className="flex flex-col gap-5 w-7/12 justify-between">
          <div className="relative px-2">
            <p
              className={`text-2xl 2xl:text-3xl font-bold slide-in active text-justify`}
            >
              The best quality coffees from across the globe, professional
              roasting and a remarkable tasting experience. Step into the world
              of Coffee-Co and join us on this flavorful journey.
            </p>
          </div>
          <div className="flex flex-col gap-5 ">
            <div className="flex flex-row gap-5 justify-around  ml-auto mr-auto align-bottom w-11/12">
              <div className="relative overflow-hidden rounded-xl w-1/3 ">
                <Image
                  src={beans01}
                  alt="Image"
                  className="shadow-lg opacity-90 hover:opacity-100 duration-500 
               hover:scale-105 transition-[transform, shadow]"
                />
              </div>
              <div className="relative overflow-hidden rounded-xl w-1/3 ">
                <Image
                  src={beans02}
                  alt="Image"
                  className="shadow-lg opacity-90 hover:opacity-100 duration-500 
                hover:scale-105 transition-[transform, shadow]"
                />
              </div>
              <div className="relative overflow-hidden rounded-xl w-1/3">
                <Image
                  src={beans03}
                  alt="Image"
                  className="shadow-lg opacity-90 hover:opacity-100 duration-500 
                hover:scale-105 transition-[transform, shadow]"
                />
              </div>
            </div>
            <Link href="/company" className="ml-auto mr-auto">
              <div
                className="border-[1px] border-neutral-400 rounded-3xl items-center bg-neutral-50 px-5 
              py-2 shadow-md hover:bg-red-100 transition-colors duration-300"
              >
                <p className="text-lg">Discover Our Coffee Beans</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
