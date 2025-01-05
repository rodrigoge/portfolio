"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { LanguageTypeEnum } from "@/types/LanguageTypeEnum";
import Image from "next/image";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import brFlag from "../../assets/flags/brazil.svg";
import usaFlag from "../../assets/flags/usa.svg";
import styles from "./LanguageSelector.module.scss";

const languages: { label: LanguageTypeEnum; flag: string }[] = [
  {
    label: "EN",
    flag: usaFlag,
  },
  {
    label: "BR",
    flag: brFlag,
  },
];

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (selectedLanguage: LanguageTypeEnum) => {
    setLanguage(selectedLanguage); 
    setIsOpen(false);
  };

  const selected = languages.find((lang) => lang.label === language);

  return (
    <div className={styles.language_selector}>
      <div
        className={styles.language_selected}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={styles.icon}>
          {selected && <Image src={selected.flag} alt={selected.label} />}
        </span>
        <span className={styles.text}>{selected?.label}</span>
        <MdOutlineKeyboardArrowDown />
      </div>

      {isOpen && (
        <ul className={styles.dropdown}>
          {languages.map((lang) => (
            <li
              key={lang.label}
              className={styles.language}
              onClick={() => handleSelect(lang.label)}
            >
              <span className={styles.icon}>
                <Image src={lang.flag} alt={lang.label} />
              </span>
              <span className={styles.text}>{lang.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
