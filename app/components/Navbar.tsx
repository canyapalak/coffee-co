import Image from "next/image";
import logo from "@/public/assets/images/logo001.png";
import "tailwindcss/tailwind.css";
import Link from "next/link";
import leaf from "@/public/assets/images/leaf2.png";
import cartIcon from "@/public/assets/images/cart.png";

import { useContext, useState, useEffect, useRef } from "react";
import { CartContext } from "../contexts/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext) || { cart: [] };
  const isCartEmpty = cart ? cart.length === 0 : true;
  console.log("cart Navbar :>> ", cart);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        isMenuOpen
      ) {
        closeMenu();
      }
    };

    const closeMenu = () => {
      setIsMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("beforeunload", closeMenu);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("beforeunload", closeMenu);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="mb-24 text-xl">
        <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto py-2">
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
            className="inline-flex items-center p-2 w-12 h-12 justify-center text-sm text-lime-900 
            rounded-xl md:hidden focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:bg-neutral-50 
            focus:bg-opacity-40 mt-3"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <svg
              className={` w-5 h-5 ${isMenuOpen ? " text-lime-900" : ""}`}
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
            ref={menuRef}
            className={`my-auto w-full md:block md:w-auto ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-3 md:flex-row md:space-x-8 items-center">
              <div>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 md:border-0 md:p-0 hover:text-stone-600"
                >
                  Home
                </Link>
              </div>
              <div className="md:border-0 md:p-0 hover:text-stone-600">
                <hr className="border-1 border-lime-900 md:border-0" />
                <Link
                  href="/policy"
                  className=" py-2 pl-3 pr-4 hover:text-stone-600 flex flex-row "
                >
                  3F
                  <Image src={leaf} alt="Leaf" className="w-6 h-6" />
                </Link>
              </div>
              <div>
                <hr className="border-1 border-lime-900 md:border-0" />
                <Link
                  href="/shop"
                  className="block py-2 pl-3 pr-4 md:border-0 md:p-0 hover:text-stone-600"
                >
                  Shop
                </Link>
              </div>
              <div>
                <hr className="border-1 border-lime-900 md:border-0" />
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
