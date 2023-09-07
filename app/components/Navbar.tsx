import Image from "next/image";
import logo from "@/public/assets/images/logo001.png";
import "tailwindcss/tailwind.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="flex align-middle px-16 py-5">
        <Link href="/">
          <Image src={logo} alt="logo" className="h-10 w-40 mb-auto mt-auto" />
        </Link>
        <div className="flex justify-end ml-auto space-x-10 text-lg mb-auto mt-auto font-bold pr-3">
          <Link href="/" className="hover:text-stone-600">
            Home
          </Link>
          <Link href="/" className="hover:text-stone-600">
            Company
          </Link>
          <Link href="/" className="hover:text-stone-600">
            Shop
          </Link>
          <Link href="/" className="hover:text-stone-600">
            Cart
          </Link>
        </div>
      </div>
    </>
  );
}
