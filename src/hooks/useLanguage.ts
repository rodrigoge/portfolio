import { LanguageContext } from "@/contexts/LanguageContext";
import { LanguageContextType } from "@/types/LanguageContextType";
import { useContext } from "react";

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext)

    if(!context) {
        throw new Error("useLanguage must be used inside of LanguageProvider")
    }

    return context
}