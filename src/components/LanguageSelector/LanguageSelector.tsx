"use client"
import { Language } from "@/types/Language"
import Image from "next/image"
import { useState } from "react"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import brFlag from '../../assets/flags/brazil.svg'
import usaFlag from '../../assets/flags/usa.svg'
import styles from './LanguageSelector.module.scss'

const languages: Language[] = [
    {
        label: "EN",
        flag: usaFlag
    },
    {
        label: "BR",
        flag: brFlag
    },
]

export default function LanguageSelector() {
    const [selected, setSelected] = useState<Language>(languages[1])
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const handleSelect = (language: Language) => {
        setSelected(language)
        setIsOpen(false)
    }

    return(
        <div className={styles.language_selector}>
            <div 
                className={styles.language_selected}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <span className={styles.icon}>
                    <Image src={selected.flag} alt={selected.label}/>
                </span>
                <span className={styles.text}>
                    {selected.label}
                </span>
                <MdOutlineKeyboardArrowDown />
            </div>

            {isOpen && (
                <ul className={styles.dropdown}>
                    {languages.map((language) => (
                        <li 
                            key={language.label} 
                            className={styles.language} 
                            onClick={() => handleSelect(language)}
                        >
                            <span className={styles.icon}>
                                <Image src={language.flag} alt={language.label}/>
                            </span>
                            <span className={styles.text}>
                                {language.label}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}