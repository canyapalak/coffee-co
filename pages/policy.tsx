import "tailwindcss/tailwind.css";
import fair from "@/public/assets/images/fair.png";
import friendly from "@/public/assets/images/friendly.png";
import fresh from "@/public/assets/images/fresh.png";
import Image from "next/image";
import { LanguageContext } from "@/app/contexts/LanguageContext";
import { useContext } from "react";

export default function Policy() {
  const { text } = useContext(LanguageContext);

  return (
    <div>
      <div
        className="flex flex-col bg-gradient-to-br from-stone-50 to-stone-100 
        dark:from-stone-300 dark:to-stone-400 rounded-xl shadow-xl px-8 md:px-14 py-10
           border-stone-300 border-[1px] text-justify gap-6 text-lg"
      >
        <div className="text-center">
          <p className="text-xl font-semibold mb-4">{text.titleText}</p>
          <p>{text.introText}</p>
          <br />
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-2/6">
            <Image src={fair} alt="Fair" className="mx-auto w-16 h-16 mb-4" />
            <p className="text-center mb-2">{text.fairTitle}</p>
            <p>{text.fairText}</p>
            <br />
          </div>
          <div className="md:w-2/6">
            <Image
              src={friendly}
              alt="Friendly"
              className="mx-auto w-16 h-16 mb-4"
            />
            <p className="text-center mb-2">{text.friendlyTitle}</p>
            <p>{text.friendlyText}</p>
            <br />
          </div>
          <div className="md:w-2/6">
            <Image src={fresh} alt="Fresh" className="mx-auto w-16 h-16 mb-4" />
            <p className="text-center mb-2">{text.freshTitle}</p>
            <p>{text.freshText}</p>
            <br />
          </div>
        </div>
        <div className="text-center">
          <p>{text.closingText}</p>
        </div>
      </div>
    </div>
  );
}
