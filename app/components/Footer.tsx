import Image from "next/image";
import logo from "@/public/assets/images/logo002.png";
import "tailwindcss/tailwind.css";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="px-24 flex align-middle mb-0 mt-auto top-auto w-screen bg-stone-700 py-10 sticky text-stone-50">
        <Image src={logo} alt="logo" className="h-6 w-24 mb-auto mt-auto" />
        <div className="flex justify-end ml-auto space-x-10 text-lg mb-auto mt-auto pr-3">
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
