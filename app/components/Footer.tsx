import Image from "next/image";
import logo from "@/public/assets/images/logo001.png";
import "tailwindcss/tailwind.css";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="flex align-middle bottom-0 w-screen bg-stone-200 px-32 py-10 ">
        <Image src={logo} alt="logo" className="h-6 w-24 mb-auto mt-auto" />
        <div className="flex justify-end ml-auto space-x-10 text-lg mb-auto mt-auto font-bold pr-3">
          <Link
            href="mailto:canyapalak@gmail.com"
            className="hover:text-stone-500  "
          >
            canyapalak@gmail.com
          </Link>
        </div>
      </div>
    </>
  );
}
