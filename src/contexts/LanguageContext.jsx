"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { AVAILABLE_LANGUAGES } from "@/constants/languages";
import { LOCALES } from "@/locales";

const STORAGE_KEY = "silenceai-language";

const dictionaries = LOCALES;

const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
  t: (key, fallback) => fallback ?? key,
});

const getValueFromDictionary = (dictionary, key) => {
  return key.split(".").reduce((acc, segment) => {
    if (acc && typeof acc === "object" && segment in acc) {
      return acc[segment];
    }
    return undefined;
  }, dictionary);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState("en");
  const availableCodes = useMemo(
    () => new Set(AVAILABLE_LANGUAGES.map((lang) => lang.code)),
    []
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && availableCodes.has(stored)) {
      setLanguageState(stored);
      return;
    }

    const browserLang = (navigator.language || "en").split("-")[0].toLowerCase();
    const detected = availableCodes.has(browserLang) ? browserLang : "en";
    setLanguageState(detected);
    window.localStorage.setItem(STORAGE_KEY, detected);
  }, [availableCodes]);

  const setLanguage = (newLanguage) => {
    if (!availableCodes.has(newLanguage)) return;
    setLanguageState(newLanguage);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, newLanguage);
    }
  };

  const value = useMemo(() => {
    const translate = (key, fallback) => {
      const localized = getValueFromDictionary(dictionaries[language] || {}, key);
      if (localized !== undefined) {
        return localized;
      }

      const defaultEnglish = getValueFromDictionary(dictionaries.en || {}, key);
      if (defaultEnglish !== undefined) {
        return defaultEnglish;
      }

      return fallback ?? key;
    };

    return {
      language,
      setLanguage,
      t: translate,
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export { AVAILABLE_LANGUAGES };
