import es from "./es.json";
import en from "./en.json";
import ca from "./ca.json";

export type Language = typeof es;

export type TypeLanguage = "es" | "en" | "ca";

export const languages = {
  es,
  en,
  ca,
};

export const getLanguage = () => {
  let language: TypeLanguage = "es";

  if (location.pathname.length === 3) {
    language = location.pathname.slice(1) as TypeLanguage;
    return languages[language];
  }

  if (location.pathname.length === 4) {
    language = location.pathname.slice(1, -1) as TypeLanguage;
    return languages[language];
  }

  const pathLanguage = location.pathname.slice(0, 4);

  switch (pathLanguage) {
    case "/en/":
    case "/es/":
    case "/ca/":
      language = pathLanguage.slice(1, -1) as TypeLanguage;
      break;
    default:
      break;
  }

  return languages[language];
};
