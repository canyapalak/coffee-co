import "tailwindcss/tailwind.css";
import { products } from "@/public/assets/Products";
import intenseIcon from "@/public/assets/images/intense-icon.png";
import Image from "next/image";
import Link from "next/link";

export default function Shop({}) {
  function showIntensity(intensity: number) {
    return Array.from({ length: intensity }, (_, index) => (
      <Image
        key={index}
        src={intenseIcon}
        alt="Intensity"
        width={16}
        height={16}
        className="inline-block"
      />
    ));
  }
  return (
    <div className="flex flex-wrap gap-8 px-24 py-5 mb-20 text-lg">
      {products.map((prod) => (
        <Link
          href={`/shop/${prod.id}`}
          key={prod.id}
          className="group flex flex-col flex-wrap bg-gradient-to-br from-stone-300 to-stone-100 ml-auto mr-auto text-center 
            rounded-xl shadow-xl items-center py-5 w-1/5 border-stone-300 border-[1px] hover:scale-105 transition-transform duration-300"
        >
          <div className="relative overflow-hidden ml-auto mr-auto p-3 rounded-xl">
            <Image
              src={prod.img}
              alt="Product"
              width={200}
              height={250}
              className=" transform-gpu w-28 h-48"
            />
          </div>
          <div className="mb-3">
            <p className="text-xl font-semibold">{prod.name}</p>
            <p>{showIntensity(prod.int)}</p>
            <p>{prod.gr} gr</p>
            <p>{prod.price}€</p>
            <p className="text-xs text-green-600 ">IN STOCK</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
