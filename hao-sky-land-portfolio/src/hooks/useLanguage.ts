import { useState } from "react";
import type { Language } from "../types";
import { translations } from "../data/translations";

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("vi");
  const t = (key: keyof typeof translations.vi) => translations[language][key];
  const toggleLanguage = () => setLanguage((current) => current === "vi" ? "en" : "vi");
  return { language, setLanguage, toggleLanguage, t };
}