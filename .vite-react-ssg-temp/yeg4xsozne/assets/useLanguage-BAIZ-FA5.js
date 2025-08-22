import { useContext } from "react";
import { L as LanguageContext } from "../main.mjs";
const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
export {
  useLanguage as u
};
