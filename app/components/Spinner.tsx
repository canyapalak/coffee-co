import Image from "next/image";
import intenseIcon from "@/public/assets/images/intense-icon.png";
import { useEffect, useState } from "react";

export default function Spinner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return isVisible ? (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-white opacity-75 z-50">
      <Image
        src={intenseIcon}
        alt="Loading Spinner"
        className="w-16 h-16"
        id="spin-logo"
      />
    </div>
  ) : null;
}
