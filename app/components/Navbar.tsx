import Image from "next/image";
import logo from "@/public/assets/images/logo001.png";
import "tailwindcss/tailwind.css";
import Link from "next/link";
import leaf from "@/public/assets/images/leaf2.png";
import cart from "@/public/assets/images/cart01.png";

export default function Navbar() {
  return (
    <>
      <div className="flex align-middle px-24 py-5 mb-10">
        <Link href="/">
          <Image src={logo} alt="logo" className="h-10 w-40 mb-auto mt-auto" />
        </Link>
        <div className="flex justify-end ml-auto space-x-10 text-lg mb-auto mt-auto font-bold pr-3">
          <Link href="/" className="hover:text-stone-600">
            Home
          </Link>
          <Link href="/company" className="hover:text-stone-600">
            Company
          </Link>
          <Link href="/policy" className="hover:text-stone-600 flex flex-row">
            3F
            <Image src={leaf} alt="Leaf" className="w-6 h-6" />
          </Link>
          <Link href="/shop" className="hover:text-stone-600">
            Shop
          </Link>
          <Link href="/" className="hover:text-stone-600">
            <Image src={cart} alt="Cart" className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </>
  );
}
