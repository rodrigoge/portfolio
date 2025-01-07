"use client"

import { useLanguage } from '@/hooks/useLanguage'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../assets/logo.svg'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import styles from './Header.module.scss'

export default function Header() {
    const { t } = useLanguage();
    
    return(
        <header className={styles.header}>
            <Link href='/' className={styles.logo}>
                <Image src={logo} alt='Logotype' className={styles.logo_image}/>
            </Link>

            <nav className={styles.menu_navigation} >
                    <LanguageSelector />
                <ul className={styles.menu_navigation_list}>
                    <li>
                        <Link href={"/about"}>
                            <span className={styles.text_menu}>
                                {t("aboutMe")}
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/career"}>
                            <span className={styles.text_menu}>
                                {t("career")}
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/works"}>
                            <span className={styles.text_menu}>
                                {t("works")}
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/contact"}>
                            <span className={styles.text_menu}>
                                {t("contact")}
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}