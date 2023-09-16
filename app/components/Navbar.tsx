import Image from "next/image";
import logo from "@/public/assets/images/logo001.png";
import "tailwindcss/tailwind.css";
import Link from "next/link";
import leaf from "@/public/assets/images/leaf2.png";
import cartIcon from "@/public/assets/images/cart.png";

import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext) || { cart: [] };
  const isCartEmpty = cart ? cart.length === 0 : true;
  console.log("cart Navbar :>> ", cart);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="mb-10 text-xl">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              className="h-10 w-40 mb-auto mt-auto"
            />
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-12 h-12 justify-center text-sm text-neutral-600 
            rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-neutral-400 "
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <svg
              className={`mt-2 w-5 h-5 ${isMenuOpen ? "text-neutral-700" : ""}`}
              aria-hidden="true"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`my-auto w-full md:block md:w-auto ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-3 md:flex-row md:space-x-8">
              <div>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 md:border-0 md:p-0 hover:text-stone-600"
                >
                  Home
                </Link>
              </div>
              <div className="block py-2 pl-3 pr-4 md:border-0 md:p-0 hover:text-stone-600">
                <Link
                  href="/policy"
                  className="hover:text-stone-600 flex flex-row "
                >
                  3F
                  <Image src={leaf} alt="Leaf" className="w-6 h-6" />
                </Link>
              </div>
              <div>
                <Link
                  href="/shop"
                  className="block py-2 pl-3 pr-4 md:border-0 md:p-0 hover:text-stone-600"
                >
                  Shop
                </Link>
              </div>
              <div>
                {isCartEmpty ? (
                  <Link
                    href="/cart"
                    className="block py-2 pl-3 pr-4 md:border-0 md:p-0 hover:text-stone-600"
                  >
                    <Image src={cartIcon} alt="Cart" className="w-6 h-6" />
                  </Link>
                ) : (
                  <Link
                    href="/cart"
                    className="relative block py-2 pl-3 pr-4 md:border-0 md:p-0 hover:text-stone-600"
                  >
                    <div className="relative inline-block">
                      <Image src={cartIcon} alt="Cart" className="w-6 h-6" />
                      <div
                        id="cart-circle"
                        className="absolute top-3 right-2 text-black w-4 h-4 rounded-full flex items-center justify-center text-xs"
                      >
                        {cart.length}
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
