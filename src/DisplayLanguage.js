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
  return (
    <LanguageContext.Consumer>
      {(language) => {
        return <h1>{Strings[language].CHOSENLANGUAGE}</h1>;
      }}
    </LanguageContext.Consumer>
  );
}
