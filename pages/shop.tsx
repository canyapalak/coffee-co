import "tailwindcss/tailwind.css";
import { products } from "@/public/assets/Products";
import Image from "next/image";

export default function Shop() {
  return (
    <>
      <div className="flex flex-wrap gap-10 px-24 py-5 mb-20">
        {products.map((prod) => (
          <div
            key={prod.id}
            className="flex flex-col flex-wrap bg-white ml-auto mr-auto text-center 
            rounded-xl shadow-xl items-center py-10 w-1/5 gap-6"
          >
            <div className="relative overflow-hidden w-24 ml-auto mr-auto">
              <Image
                src={prod.img}
                alt="Product"
                width={200}
                height={280}
                className="shadow-lg opacity-90 hover:opacity-100 duration-500 
                hover:scale-105 transition-[transform, shadow]"
              />
            </div>
            <div className="">
              <p>{prod.name}</p>
              <p>{prod.int}</p>
              <p>{prod.gr}</p>
              <p>{prod.price} €</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
