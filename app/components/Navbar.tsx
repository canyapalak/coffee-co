import Image from "next/image";
import logo from "@/public/assets/images/logo001.png";
import "tailwindcss/tailwind.css";
import Link from "next/link";
import leaf from "@/public/assets/images/leaf2.png";
import cartIcon from "@/public/assets/images/cart.png";

import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext) || { cart: [] };
  const isCartEmpty = cart ? cart.length === 0 : true;
  console.log("cart Navbar :>> ", cart);

  return (
    <>
      <div className="flex align-middle px-24 py-5 mb-10">
        <Link href="/">
          <Image src={logo} alt="logo" className="h-10 w-40 mb-auto mt-auto" />
        </Link>
        <div className="flex justify-end ml-auto space-x-10 text-xl mb-auto mt-auto pr-3">
          <Link href="/" className="hover:text-stone-600">
            Home
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
              <Image src={cartIcon} alt="Cart" className="w-6 h-6" />
            </Link>
          ) : (
            <Link href="/cart" className="relative">
              <div className="relative inline-block">
                <Image src={cartIcon} alt="Cart" className="w-6 h-6" />
                <div
                  id="cart-circle"
                  className="absolute top-3 right-2 text-black w-4 h-4 
                rounded-full flex items-center justify-center text-xs"
                >
                  {cart.length}
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
