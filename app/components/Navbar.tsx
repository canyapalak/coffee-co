import { useContext, useState, useEffect, useRef } from "react";
import { CartContext } from "../contexts/CartContext";
import { LanguageContext } from "../contexts/LanguageContext";
import "tailwindcss/tailwind.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/images/logo001.png";
import logo2 from "@/public/assets/images/logo002.png";
import leaf from "@/public/assets/images/leaf2.png";
import cartIcon from "@/public/assets/images/cart.png";
import cartIcon2 from "@/public/assets/images/cart2.png";
import enIcon from "@/public/assets/images/en01.png";
import deIcon from "@/public/assets/images/de01.png";
import { HiMoon, HiSun } from "react-icons/hi";

export default function Navbar() {
  const { text, language, handleChangeLanguage, flag } =
    useContext(LanguageContext);
  const { cart } = useContext(CartContext) || { cart: [] };
  const isCartEmpty = cart ? cart.length === 0 : true;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setisDark] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLanguageChange = (selectedLanguage: any) => {
    handleChangeLanguage(selectedLanguage);
    toggleDropdown(); // Close the dropdown after selecting a language
  };

  function handleModeClick() {
    setisDark(!isDark);
  }

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

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
          {isDark ? (
            <Link href="/">
              <Image
                src={logo2}
                alt="logo"
                className="h-10 w-40 mb-auto mt-auto"
              />
            </Link>
          ) : (
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                className="h-10 w-40 mb-auto mt-auto"
              />
            </Link>
          )}
          <div className="language-dropdown w-10 h-8">
            <div className="selected-language" onClick={toggleDropdown}>
              <img
                src={flag}
                alt={language}
                className="flag w-6 h-4 mb-2 cursor-pointer ml-[7.5px]"
              />
            </div>
            {isDropdownOpen && (
              <div className="dropdown-options border-[1px] rounded-lg border-neutral-400 bg-orange-50 p-1">
                <div
                  className={`option ${language === "en" ? "selected" : ""}`}
                  onClick={() => handleLanguageChange("en")}
                >
                  <img
                    src={
                      "https://res.cloudinary.com/djlyhp6vr/image/upload/v1695206737/en01_bsfg9g.png"
                    }
                    alt="en"
                    className="flag hover:bg-neutral-300 rounded-md p-1 cursor-pointer"
                  />
                </div>
                <div
                  className={`option ${language === "de" ? "selected" : ""}`}
                  onClick={() => handleLanguageChange("de")}
                >
                  <img
                    src="https://res.cloudinary.com/djlyhp6vr/image/upload/v1695206732/de01_h5qg1v.png"
                    alt="de"
                    className="flag hover:bg-neutral-300 rounded-md p-1 cursor-pointer"
                  />
                </div>
              </div>
            )}
          </div>

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-12 h-12 justify-center text-sm text-neutral-800 dark:text-neutral-50
            rounded-xl md:hidden focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:bg-neutral-50 
            focus:bg-opacity-40 mt-3"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <svg
              className={` w-5 h-5 ${
                isMenuOpen ? " text-neutral-800 dark:text-neutral-50" : ""
              }`}
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
            <ul className="flex flex-col p-4 md:p-0 mt-3 md:flex-row md:space-x-8 items-center dark:text-orange-50">
              <div>
                {isDark ? (
                  <HiSun
                    alt="Sun"
                    onClick={handleModeClick}
                    className="w-6 h-6 cursor-pointer mb-2 md:mb-1 dark:text-orange-50"
                  />
                ) : (
                  <HiMoon
                    alt="Moon"
                    onClick={handleModeClick}
                    className="w-6 h-6 cursor-pointer mb-2 md:mb-1 text-neutral-700"
                  />
                )}
              </div>
              <div>
                <hr className="border-1 border-lime-900 dark:border-lime-200 md:border-0" />
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 md:border-0 md:p-0 hover:text-stone-600 dark:hover:text-neutral-300"
                >
                  {text.home}
                </Link>
              </div>
              <div className="md:border-0 md:p-0 hover:text-stone-600 dark:hover:text-neutral-300">
                <hr className="border-1 border-lime-900 dark:border-lime-200 md:border-0" />
                <Link
                  href="/policy"
                  className=" py-2 pl-3 pr-4 hover:text-stone-600 dark:hover:text-neutral-300 flex flex-row "
                >
                  {text.threeF}
                  <Image src={leaf} alt="Leaf" className="w-6 h-6" />
                </Link>
              </div>
              <div>
                <hr className="border-1 border-lime-900 dark:border-lime-200 md:border-0" />
                <Link
                  href="/shop"
                  className="block py-2 pl-3 pr-4 md:border-0 md:p-0 hover:text-stone-600 dark:hover:text-neutral-300"
                >
                  {text.shop}
                </Link>
              </div>
              <div>
                <hr className="border-1 border-lime-900 dark:border-lime-200 md:border-0" />
                {isCartEmpty ? (
                  <Link
                    href="/cart"
                    className="block py-2 pl-3 pr-4 md:border-0 md:p-0 hover:text-stone-600 dark:hover:text-neutral-300"
                  >
                    {isDark ? (
                      <Image src={cartIcon2} alt="Cart" className="w-6 h-6" />
                    ) : (
                      <Image src={cartIcon} alt="Cart" className="w-6 h-6" />
                    )}
                  </Link>
                ) : (
                  <Link
                    href="/cart"
                    className="relative block py-2 pl-3 pr-4 md:border-0 md:p-0 hover:text-stone-600 dark:hover:text-neutral-300"
                  >
                    <div className="relative inline-block">
                      {isDark ? (
                        <Image src={cartIcon2} alt="Cart" className="w-6 h-6" />
                      ) : (
                        <Image src={cartIcon} alt="Cart" className="w-6 h-6" />
                      )}
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
