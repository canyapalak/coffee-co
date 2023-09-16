import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import confirm from "@/public/assets/images/confirm.png";
import leftArrow from "@/public/assets/images/left-arrow.png";
import Image from "next/image";
import { CartContext } from "@/app/contexts/CartContext";

export default function Checkout() {
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
  const deleteFromCart = cartContext?.deleteFromCart || (() => {});
  const { cart } = useContext(CartContext) || { cart: [] };

  const clearCart = () => {
    cart.forEach((product) => deleteFromCart(product));
  };

  const handleClick = () => {
    setFullNameError(fullName === "" ? "Full name is required" : "");
    setEMailError(eMail === "" ? "Email is required" : "");
    setAddressError(address === "" ? "Address is required" : "");
    setPhoneNumberError(phoneNumber === "" ? "Phone number is required" : "");

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
    <div className="text-lg">
      {showCheckout ? (
        <div className="flex flex-col gap-6 items-center mx-auto mt-10">
          <div className="text-xl">
            <p>Place your order</p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relevant">
              <p className="ml-1">Full Name</p>
              <input
                placeholder="Full Name"
                className="w-96 h-9 px-2 border-[1px] border-neutral-400 rounded-md shadow-md "
                onChange={handleFullNameChange}
              ></input>
              {fullNameError && (
                <p className="text-sm text-red-500 absolute pl-1">
                  {fullNameError}
                </p>
              )}
            </div>
            <div className="relevant">
              <p className="ml-1">E-Mail</p>
              <input
                placeholder="E-Mail"
                className="w-96 h-9 px-2 border-[1px] border-neutral-400 rounded-md shadow-md"
                onChange={handleEMailChange}
              ></input>
              {eMailError && (
                <p className="text-sm text-red-500 absolute pl-1">
                  {eMailError}
                </p>
              )}
            </div>
            <div className="relevant">
              <p className="ml-1">Shipping Address</p>
              <input
                placeholder="Shipping Address"
                className="w-96 h-9 px-2 border-[1px] border-neutral-400 rounded-md shadow-md"
                onChange={handleAddressChange}
              ></input>
              {addressError && (
                <p className="text-sm text-red-500 absolute pl-1">
                  {addressError}
                </p>
              )}
            </div>
            <div className="relevant">
              <p className="ml-1">Phone Number</p>
              <input
                placeholder="Phone Number"
                className="w-96 h-9 px-2 border-[1px] border-neutral-400 rounded-md shadow-md"
                onChange={handlePhoneNumberChange}
              ></input>
              {phoneNumberError && (
                <p className="text-sm text-red-500 absolute pl-1">
                  {phoneNumberError}
                </p>
              )}
            </div>
          </div>
          <Link href="/checkout" className="ml-auto mr-auto mt-5">
            <div
              id="main-button"
              className="border-[1px] border-neutral-700 rounded-xl items-center bg-neutral-50 px-10 
                py-2 shadow-md hover:bg-green-100 transition-colors duration-300 text-xl active:text-neutral-400"
              onClick={handleClick}
            >
              Place Order
            </div>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col items-center mx-auto mt-10">
          <div>
            <Image src={confirm} alt="Confirmation" className="w-10 h-10" />
          </div>
          <div className="text-2xl mt-10">
            <p>
              Your order has been received, {""}
              <span id="lime-text">{fullName}</span>. Thank you for your
              purchase.
            </p>
          </div>
          <div className="flex items-center justify-center mt-10 gap-2">
            <Link href="/shop" className="inline-block">
              <Image
                src={leftArrow}
                alt="Left Arrow"
                className="w-5 h-5 mb-1 inline-block"
              />
            </Link>
            <Link
              href="/"
              className="inline-block active:text-neutral-400 transition-colors duration-300"
            >
              <p className="inline-block text-lg">Back to Home Page</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
