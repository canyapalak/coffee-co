import Image from "next/image";
import logo from "@/public/assets/images/logo002.png";
import "tailwindcss/tailwind.css";
import {
  TbWorld,
  TbMail,
  TbBrandGithubFilled,
  TbBrandLinkedin,
} from "react-icons/tb";

export default function Footer() {
  return (
    <div
      className="px-12 md:px-24 flex flex-col gap-8 md:gap-0 md:flex-row align-middle items-center 
      mb-0 mt-auto top-auto w-full
       bg-stone-700 py-10 sticky text-stone-50"
    >
      <div className="flex-col">
        <Image src={logo} alt="logo" className="h-6 w-24 mb-1" />
        <p className="mx-auto md:pl-1">Fake shop app</p>
      </div>

      <div className="flex mx-auto text-lg pr-3 gap-8">
        <div>
          <a target="_blank" href="https://canyapalak.vercel.app/">
            <TbWorld className="cursor-pointer w-7 h-7" id="footer-icon" />
          </a>
        </div>
        <div>
          <a target="_blank" href="mailto:canyapalak@gmail.com">
            <TbMail className="cursor-pointer w-7 h-7" id="footer-icon" />
          </a>
        </div>
        <div>
          <a target="_blank" href="https://github.com/canyapalak">
            <TbBrandGithubFilled
              className="cursor-pointer w-7 h-7"
              id="footer-icon"
            />
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/can-yapalak-a1359b76/"
          >
            <TbBrandLinkedin
              className="cursor-pointer w-7 h-7"
              id="footer-icon"
            />
          </a>
        </div>
      </div>
      <div>
        <p className="italic">powered by</p>
        <a
          target="_blank"
          href="https://leonardo.ai/"
          className="text text-purple-300 hover:text-neutral-50"
        >
          leonardo.ai
        </a>
      </div>
    </div>
  );
}
