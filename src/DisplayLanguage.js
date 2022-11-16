import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
  en: {
    CHOSENLANGUAGE: "LANGUAGE: ENGLISH",
  },
  it: {
    CHOSENLANGUAGE: "LINGUA: ITALIANA",
  },
};

export function DisplayLanguage() {
  const language = useContext(LanguageContext);

  return <h1>{Strings[language].CHOSENLANGUAGE}</h1>;
}
