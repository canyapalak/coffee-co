import { createContext, useEffect, useState } from "react";
import { translations } from "../utils/translations.js";
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
        setCountry("United States");
        setFlag(
          "https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-usa2x.png"
        );
        break;
      }
      case "de":
        setLanguage("de");
        setText(translations.de);
        setCountry("Germany");
        setFlag(
          "https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-germany2x.png"
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
          "https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-usa2x.png"
        );
        break;

      case "de":
        setLanguage("de");
        setText(translations.de);
        setCountry("Germany");
        setFlag(
          "https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-germany2x.png"
        );
        break;

      default:
        setLanguage("en");
        setText(translations.en);
        setFlag(
          "https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-usa2x.png"
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
