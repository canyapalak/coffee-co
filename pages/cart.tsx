import "tailwindcss/tailwind.css";
import Image from "next/image";
import { Product } from "@/app/types";
import { CartContext } from "@/app/contexts/CartContext";
import { useContext } from "react";
import Link from "next/link";
import leftArrow from "@/public/assets/images/left-arrow.png";

export default function CartPage() {
  const cartContext = useContext(CartContext);
  const { cart } = useContext(CartContext) || { cart: [] };
  const addToCart = cartContext?.addToCart || (() => {});
  const removeFromCart = cartContext?.removeFromCart || (() => {});
  const deleteFromCart = cartContext?.deleteFromCart || (() => {});
  const isCartEmpty = cart ? cart.length === 0 : true;

  return (
    <div className="px-24 py-5 mb-20 text-lg">
      {isCartEmpty ? (
        <div className="flex flex-col gap-6 items-center mx-auto mt-10">
          <p className="text-xl">Your Shopping Cart is empty.</p>
          <Link href="/shop">
            <div
              className="border-[1px] border-neutral-400 rounded-3xl bg-neutral-50 px-5 py-2 shadow-md 
            hover:bg-green-100 transition-colors duration-300 inline-block mt-3 text-lg mx-auto"
            >
              Start Shopping
            </div>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col mx-auto items-center mt-10">
          <p className="text-xl mb-5">Your Shopping Cart</p>
          <div
            className="bg-gradient-to-br from-stone-50 to-stone-100 rounded-xl shadow-xl px-14 py-4
           border-stone-300 border-[1px] "
          >
            {cart.map((cartProd: Product, index: number) => (
              <div>
                <div
                  key={index}
                  className="h-32 flex flex-row items-center gap-20"
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
                  <div>
                    <Image
                      src={cartProd.img}
                      alt="Product"
                      width={100}
                      height={150}
                      className="w-16 h-24"
                    />
                  </div>
                  <div className="mr-auto">
                    <p className="">{cartProd.name}</p>
                  </div>
                  <div className="ml-auto">
                    <p className="">{cartProd.qty * cartProd.price}€</p>
                  </div>
                  <div
                    className="bg-red-300 rounded-xl shadow-md px-3 text-xl cursor-pointer
                     active:text-neutral-400 transition-transform duration-200"
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
          </div>
        </div>
      )}
      <div className="flex items-center justify-center mt-10 gap-2">
        <Link href="/shop" className="inline-block">
          <Image
            src={leftArrow}
            alt="Left Arrow"
            className="w-5 h-5 mb-1 inline-block"
          />
        </Link>
        <Link href="/shop" className="inline-block">
          <p className="inline-block text-lg">Continue Shopping</p>
        </Link>
      </div>
    </div>
  );
}
