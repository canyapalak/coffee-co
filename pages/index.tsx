import Image from "next/image";
import logo from "@/public/assets/images/logo001.png";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <>
      <h1 className="text-green-600 text-2xl">Welcome Test Test</h1>
      <p className="text-2xl">
        Indulge in the bold and robust flavors of our Dark Horse blend sourced
        from the lush coffee plantations of Brazil. This exquisite coffee offers
        a rich, full-bodied taste with subtle hints of cocoa and nuts. It's
        perfect for those who crave a deep and satisfying coffee experience.
      </p>
      <Image alt="logo" src={logo} />
    </>
  );
}
