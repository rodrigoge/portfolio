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

            <nav className={styles.menu_navigation}>
                <ul className={styles.menu_navigation_list}>
                    <LanguageSelector />
                    <Link href={"/about"}>{t("aboutMe")}</Link>
                    <Link href={"/career"}>{t("career")}</Link>
                    <Link href={"/works"}>{t("works")}</Link>
                    <Link href={"/contact"}>{t("contact")}</Link>
                </ul>
            </nav>
        </header>
    )
}