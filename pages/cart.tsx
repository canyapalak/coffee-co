import "tailwindcss/tailwind.css";
import Image from "next/image";
import { Language, Product } from "@/app/types";
import { CartContext } from "@/app/contexts/CartContext";
import { useContext, useState } from "react";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

export default function CartPage() {
  const [language, setLanguage] = useState<Language>("en");
  const cartContext = useContext(CartContext);
  const { cart } = useContext(CartContext) || { cart: [] };
  const addToCart = cartContext?.addToCart || (() => {});
  const removeFromCart = cartContext?.removeFromCart || (() => {});
  const deleteFromCart = cartContext?.deleteFromCart || (() => {});
  const isCartEmpty = cart ? cart.length === 0 : true;

  // CALCULATE SUBTOTAL
  const subtotal = cart.reduce((acc, cartProd) => {
    return acc + cartProd.qty * cartProd.price;
  }, 0);

  // DETERMINE SHIPPING FEE
  const shippingFee = subtotal < 100 ? 6 : 0;

  // CALCULATE TOTAL
  const total = subtotal + shippingFee;

  return (
    <div className="text-lg min-h-screen">
      {isCartEmpty ? (
        <div className="flex flex-col gap-6 items-center mx-auto mt-10">
          <p className="text-xl dark:text-orange-50">
            Your Shopping Cart is empty.
          </p>
          <Link href="/shop">
            <div
              id="main-button"
              className="border-[1px] border-neutral-400 rounded-xl bg-neutral-50 px-5 py-2 shadow-md 
            hover:bg-green-100 transition-colors duration-300 inline-block mt-3 text-lg mx-auto
            active:text-neutral-400 dark:bg-stone-300"
            >
              Start Shopping
            </div>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-8 ">
          <div className="flex flex-col mx-auto items-center mt-10">
            <p className="text-xl mb-5 dark:text-orange-50">
              Your Shopping Cart
            </p>
            <div
              className="bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-300 dark:to-stone-400 
              rounded-xl shadow-xl px-4 lg:px-14 py-4 border-stone-300 border-[1px]"
            >
              {cart.map((cartProd: Product, index: number) => (
                <div>
                  <div
                    key={index}
                    className="h-32 flex flex-row items-center gap-4 lg:gap-14"
                  >
                    <div className="flex flex-row gap-2 ">
                      <div
                        className="bg-white rounded-xl shadow-md px-3 text-xl cursor-pointer
                       active:text-neutral-400 transition-transform duration-200"
                        onClick={() => removeFromCart(cartProd)}
                      >
                        <p>-</p>
                      </div>
                      <p className="">{cartProd.qty}</p>
                      <div
                        className="bg-white rounded-xl shadow-md px-3 text-xl cursor-pointer
                       active:text-neutral-400 transition-transform duration-200"
                        onClick={() => addToCart(cartProd)}
                      >
                        <p>+</p>
                      </div>
                    </div>
                    <div id="cart-image" className="w-16 h-24">
                      <Image
                        src={cartProd.img}
                        alt="Product"
                        width={100}
                        height={150}
                        className="w-16 h-24"
                      />
                    </div>
                    <div className="mr-auto flex">
                      <p className="">{cartProd.name[language]}</p>
                    </div>
                    <div className="ml-auto">
                      <p className="">{cartProd.qty * cartProd.price}€</p>
                    </div>
                    <div
                      className="bg-red-300 rounded-xl shadow-md px-3 text-xl cursor-pointer
                     active:text-neutral-400 transition-transform duration-200 mb-1"
                      onClick={() => deleteFromCart(cartProd)}
                    >
                      <p>x</p>
                    </div>
                  </div>
                  <div>
                    <hr className="border-1 border-stone-400" />
                  </div>
                </div>
              ))}

              <div className="flex flex-col mx-auto items-center gap-8">
                <div className="flex flex-row gap-36 md:gap-96 mt-10">
                  <div className="flex flex-col text-left gap-3">
                    <p className="">Subtotal:</p>
                    <p className="">Shipping:</p>
                    <p className="text-2xl mt-6">Total:</p>
                  </div>
                  <div className="flex flex-col text-right gap-3">
                    <p>{subtotal}€</p>
                    {shippingFee === 0 ? (
                      <p id="lime-text">{shippingFee}€</p>
                    ) : (
                      <p>{shippingFee}€</p>
                    )}
                    <p className="mt-6">{total}€</p>
                  </div>
                </div>

                <Link href="/checkout" className="ml-auto mr-auto">
                  <div
                    id="main-button"
                    className="border-[1px] border-neutral-700 rounded-xl items-center bg-neutral-50 dark:bg-stone-300 px-10 
                py-2 shadow-md hover:bg-green-100 transition-colors duration-300 text-xl active:text-neutral-400 mb-6"
                  >
                    Checkout
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 dark:text-orange-50">
            <Link href="/shop" className="inline-block">
              <BsArrowLeft
                alt="Left Arrow"
                className="w-5 h-5 mb-1 inline-block"
              />
            </Link>
            <Link
              href="/shop"
              className="inline-block active:text-neutral-400 transition-colors duration-300"
            >
              <p className="inline-block text-lg">Continue Shopping</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
