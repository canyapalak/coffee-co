import "tailwindcss/tailwind.css";
import { products } from "@/public/assets/Products";
import intenseIcon from "@/public/assets/images/intense-icon.png";
import Image from "next/image";
import Link from "next/link";

export default function Shop() {
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
          className="group flex flex-col flex-wrap bg-white ml-auto mr-auto text-center 
            rounded-xl shadow-xl items-center py-8 w-1/5 border-neutral-200 border-[1px] hover:scale-105 transition-transform duration-300"
        >
          <div className="relative overflow-hidden w-36 ml-auto mr-auto bg-white p-5 rounded-xl">
            <Image
              src={prod.img}
              alt="Product"
              width={200}
              height={280}
              className=" transform-gpu w-24 h-36"
            />
          </div>
          <div className="">
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
