import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import confirm from "@/public/assets/images/confirm.png";
import { BsArrowLeft } from "react-icons/bs";
import Image from "next/image";
import { CartContext } from "@/app/contexts/CartContext";
import Spinner from "@/app/components/Spinner";
import { LanguageContext } from "@/app/contexts/LanguageContext";

export default function Checkout() {
  const { text } = useContext(LanguageContext);
  const [showCheckout, setShowCheckout] = useState<boolean>(true);
  const [fullName, setFullName] = useState<string>("");
  const [eMail, setEMail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [fullNameError, setFullNameError] = useState("");
  const [eMailError, setEMailError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const cartContext = useContext(CartContext);
  const clearCart = cartContext?.clearCart || (() => {});

  // INPUT VALIDATION
  const handleClick = () => {
    setFullNameError(fullName === "" ? text.fullNameRequired : "");
    setEMailError(eMail === "" ? text.eMailRequired : "");
    setAddressError(address === "" ? text.addressRequired : "");
    setPhoneNumberError(phoneNumber === "" ? text.numberRequired : "");

    if (
      fullName === "" ||
      eMail === "" ||
      address === "" ||
      phoneNumber === ""
    ) {
    } else {
      setShowCheckout(false);
      clearCart();
    }
  };

  const handleFullNameChange = (e: any) => {
    setFullName(e.target.value);
  };

  const handleEMailChange = (e: any) => {
    setEMail(e.target.value);
  };

  const handleAddressChange = (e: any) => {
    setAddress(e.target.value);
  };

  const handlePhoneNumberChange = (e: any) => {
    setPhoneNumber(e.target.value);
  };

  useEffect(() => {
    if (
      fullName !== "" &&
      eMail !== "" &&
      address !== "" &&
      phoneNumber !== ""
    ) {
      setShowCheckout(true);
    }
  }, [fullName, eMail, address, phoneNumber]);

  return (
    <div className="text-lg min-h-screen dark:text-orange-50">
      {showCheckout ? (
        <div className="flex flex-col gap-6 items-center mx-auto mt-10">
          <div className="text-xl">
            <p>{text.checkoutTitle}</p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relevant">
              <p className="ml-1">{text.fullName}</p>
              <input
                placeholder={text.fullName}
                className="w-72 md:w-96 h-9 px-2 border-[1px] border-neutral-400 rounded-md shadow-md dark:text-neutral-900"
                onChange={handleFullNameChange}
              ></input>
              {fullNameError && (
                <p className="text-sm text-red-500 dark:text-orange-400 absolute pl-1">
                  {fullNameError}
                </p>
              )}
            </div>
            <div className="relevant">
              <p className="ml-1">{text.eMail}</p>
              <input
                placeholder={text.eMail}
                className="w-72 md:w-96  h-9 px-2 border-[1px] border-neutral-400 rounded-md shadow-md dark:text-neutral-900"
                onChange={handleEMailChange}
              ></input>
              {eMailError && (
                <p className="text-sm text-red-500 dark:text-orange-400 absolute pl-1">
                  {eMailError}
                </p>
              )}
            </div>
            <div className="relevant">
              <p className="ml-1">{text.shippingAddress}</p>
              <input
                placeholder={text.shippingAddress}
                className="w-72 md:w-96  h-9 px-2 border-[1px] border-neutral-400 rounded-md shadow-md dark:text-neutral-900"
                onChange={handleAddressChange}
              ></input>
              {addressError && (
                <p className="text-sm text-red-500 dark:text-orange-400 absolute pl-1">
                  {addressError}
                </p>
              )}
            </div>
            <div className="relevant">
              <p className="ml-1">{text.phoneNumber}</p>
              <input
                placeholder={text.phoneNumber}
                className="w-72 md:w-96  h-9 px-2 border-[1px] border-neutral-400 rounded-md shadow-md dark:text-neutral-900"
                onChange={handlePhoneNumberChange}
              ></input>
              {phoneNumberError && (
                <p className="text-sm text-red-500 dark:text-orange-400 absolute pl-1">
                  {phoneNumberError}
                </p>
              )}
            </div>
          </div>
          <Link href="/checkout" className="ml-auto mr-auto mt-5">
            <div
              id="main-button"
              className="text-black border-[1px] border-neutral-700 rounded-xl items-center bg-neutral-50 dark:bg-neutral-300 px-10 
                py-2 shadow-md hover:bg-green-100 transition-colors duration-300 text-xl active:text-neutral-400"
              onClick={handleClick}
            >
              {text.placeOrderButton}
            </div>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col items-center mx-auto mt-10">
          <Spinner />
          <div>
            <Image src={confirm} alt="Confirmation" className="w-10 h-10" />
          </div>
          <div className="text-2xl mt-10 text-center ">
            <p>
              {text.textPart1} {""}
              <span id="name-text">{fullName}</span>. {text.textPart2}
            </p>
          </div>
          <div className="flex items-center justify-center mt-10 gap-2 dark:text-orange-50">
            <Link href="/shop" className="inline-block">
              <BsArrowLeft
                alt="Left Arrow"
                className="w-5 h-5 mb-1 inline-block"
              />
            </Link>
            <Link
              href="/"
              className="inline-block active:text-neutral-400 transition-colors duration-300"
            >
              <p className="inline-block text-lg">{text.backToHome}</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
