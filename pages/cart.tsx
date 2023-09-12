import "tailwindcss/tailwind.css";
import Image from "next/image";
import { CartProducts, Product } from "@/app/types";

export default function CartPage({ cart }: CartProducts) {
  const isCartEmpty = cart ? cart.length === 0 : true;
  console.log("cartPage Cart", cart);

  return (
    <div className="flex flex-wrap gap-8 px-24 py-5 mb-20 text-lg">
      {isCartEmpty ? (
        <div>
          <p>Cart is empty</p>
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
