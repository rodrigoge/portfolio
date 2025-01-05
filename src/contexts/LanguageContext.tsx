"use client";

import { translations } from "@/translations/translations";
import { LanguageContextType } from "@/types/LanguageContextType";
import { LanguageTypeEnum } from "@/types/LanguageTypeEnum";
import React, { createContext, ReactNode, useEffect, useState } from "react";

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageTypeEnum>("EN");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") as LanguageTypeEnum;
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("language", language);
    }
  }, [language, hydrated]);

  const t = (key: keyof typeof translations["EN"]) => {
    return translations[language][key];
  };

  if (!hydrated) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
