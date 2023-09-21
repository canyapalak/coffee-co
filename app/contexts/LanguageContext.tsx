import { createContext, useEffect, useState } from "react";
import { translations } from "../utils/translations";
import { Language } from "../types";

export const LanguageContext = createContext<{
  text: Record<string, string>;
  language: "en" | "de";
  handleChangeLanguage: (language: "en" | "de") => void;
  flag: string;
  setFlag: React.Dispatch<React.SetStateAction<string>>;
}>({
  text: translations.en,
  language: "en",
  handleChangeLanguage: () => {},
  flag: "",
  setFlag: () => {},
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<Language>("en");
  const [text, setText] = useState(translations[language]);
  const [country, setCountry] = useState("United States");
  const [flag, setFlag] = useState("");

  const handleChangeLanguage = (language: string) => {
    switch (language) {
      case "en": {
        setLanguage("en");
        setText(translations.en);
        setFlag(
          "https://res.cloudinary.com/djlyhp6vr/image/upload/v1695206737/en01_bsfg9g.png"
        );
        break;
      }
      case "de":
        setLanguage("de");
        setText(translations.de);
        setFlag(
          "https://res.cloudinary.com/djlyhp6vr/image/upload/v1695206732/de01_h5qg1v.png"
        );
        break;

      default:
        break;
    }
  };

  const getBrowserLanguage = () => {
    switch (navigator.language) {
      case "en":
        setLanguage("en");
        setText(translations.en);
        setCountry("United States");
        setFlag(
          "https://res.cloudinary.com/djlyhp6vr/image/upload/v1695206737/en01_bsfg9g.png"
        );
        break;

      case "de":
        setLanguage("de");
        setText(translations.de);
        setCountry("Germany");
        setFlag(
          "https://res.cloudinary.com/djlyhp6vr/image/upload/v1695206732/de01_h5qg1v.png"
        );
        break;

      default:
        setLanguage("en");
        setText(translations.en);
        setFlag(
          "https://res.cloudinary.com/djlyhp6vr/image/upload/v1695206737/en01_bsfg9g.png"
        );
        break;
    }
  };

  useEffect(() => {
    getBrowserLanguage();
  }, []);

  const data = { text, language, handleChangeLanguage, flag, setFlag };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};
