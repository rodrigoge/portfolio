import { translations } from "@/translations/translations";
import { LanguageTypeEnum } from "./LanguageTypeEnum";

export interface LanguageContextType {
  language: LanguageTypeEnum;
  setLanguage: (language: LanguageTypeEnum) => void;
  t: (key: keyof typeof translations["EN"]) => string;
}