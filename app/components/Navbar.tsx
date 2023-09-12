import Image from "next/image";
import logo from "@/public/assets/images/logo001.png";
import "tailwindcss/tailwind.css";
import Link from "next/link";
import leaf from "@/public/assets/images/leaf2.png";
import cartEmpty from "@/public/assets/images/cart01.png";
import cartFull from "@/public/assets/images/cart02.png";
import { CartProducts } from "../types";

export default function Navbar({ cart }: CartProducts) {
  const isCartEmpty = cart ? cart.length === 0 : true;

  return (
    <>
      <div className="flex align-middle px-24 py-5 mb-10">
        <Link href="/">
          <Image src={logo} alt="logo" className="h-10 w-40 mb-auto mt-auto" />
        </Link>
        <div className="flex justify-end ml-auto space-x-10 text-lg mb-auto mt-auto pr-3">
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
          {isCartEmpty ? (
            <Link href="/cart">
              <Image src={cartEmpty} alt="Cart" className="w-6 h-6" />
            </Link>
          ) : (
            <Link href="/cart">
              <Image src={cartFull} alt="Cart" className="w-6 h-6" />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
