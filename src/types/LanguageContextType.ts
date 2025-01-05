import { LanguageTypeEnum } from "@/types/LanguageTypeEnum";

export type LanguageContextType = {
    language: LanguageTypeEnum;
    setLanguage: (lang: LanguageTypeEnum) => void;
}