import "tailwindcss/tailwind.css";
import Image from "next/image";
import { Product } from "@/app/types";
import { CartContext } from "@/app/contexts/CartContext";
import { useContext } from "react";
import Link from "next/link";

export default function CartPage() {
  const { cart } = useContext(CartContext) || { cart: [] };
  const isCartEmpty = cart ? cart.length === 0 : true;
  console.log("cartPage Cart", cart);

  return (
    <div className="px-24 py-5 mb-20 text-lg">
      {isCartEmpty ? (
        <div className="flex flex-col gap-6 items-center ml-auto mr-auto mt-16  ">
          <p className="text-xl ">Your cart is empty.</p>
          <Link href="/shop" className="ml-auto mr-auto">
            <div
              className="border-[1px] border-neutral-400 rounded-3xl bg-neutral-50 px-5 
                py-2 shadow-md hover:bg-green-100 transition-colors duration-300  inline-block mt-3"
            >
              <p className="text-lg">Start Shopping</p>
            </div>
          </Link>
        </div>
      ) : (
        <div>
          {cart.map((cartProd: Product) => (
            <div
              key={cartProd.id}
              className="group flex flex-col flex-wrap bg-white ml-auto mr-auto text-center 
            rounded-xl shadow-xl items-center py-8 w-1/5 border-neutral-200 border-[1px] hover:scale-105 transition-transform duration-300"
            >
              <div className="relative overflow-hidden w-36 ml-auto mr-auto bg-white p-5 rounded-xl">
                <Image
                  src={cartProd.img}
                  alt="Product"
                  width={200}
                  height={280}
                  className=" transform-gpu w-24 h-36"
                />
              </div>
              <div className="">
                <p className="text-xl font-semibold">{cartProd.name}</p>
                <p>{cartProd.gr} gr</p>
                <p>{cartProd.price}€</p>
              </div>
            </div>
          ))}{" "}
        </div>
      )}
    </div>
  );
}
