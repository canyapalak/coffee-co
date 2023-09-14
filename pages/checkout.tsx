import Link from "next/link";
import "tailwindcss/tailwind.css";

export default function Checkout() {
  return (
    <div className="px-24 py-5 mb-20 text-lg">
      <div className="flex flex-col gap-6 items-center mx-auto mt-10">
        <div className="text-xl">
          <p>Place your order</p>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <p className="ml-1">Full Name</p>
            <input
              placeholder="Full Name"
              className="w-96 h-9 px-2 border-[1px] border-neutral-400 rounded-md shadow-md"
            ></input>
          </div>
          <div>
            <p className="ml-1">E-Mail</p>
            <input
              placeholder="E-Mail"
              className="w-96 h-9 px-2 border-[1px] border-neutral-400 rounded-md shadow-md"
            ></input>
          </div>
          <div>
            <p className="ml-1">Shipping Address</p>
            <input
              placeholder="Shipping Address"
              className="w-96 h-9 px-2 border-[1px] border-neutral-400 rounded-md shadow-md"
            ></input>
          </div>
          <div>
            <p className="ml-1">Phone Number</p>
            <input
              placeholder="Phone Number"
              className="w-96 h-9 px-2 border-[1px] border-neutral-400 rounded-md shadow-md"
            ></input>
          </div>
        </div>
        <Link href="/checkout" className="ml-auto mr-auto mt-5">
          <div
            id="main-button"
            className="border-[1px] border-neutral-700 rounded-xl items-center bg-neutral-50 px-10 
                py-2 shadow-md hover:bg-green-100 transition-colors duration-300 text-xl active:text-neutral-400"
          >
            Place Order
          </div>
        </Link>
      </div>
    </div>
  );
}
