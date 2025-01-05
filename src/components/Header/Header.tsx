"use client"

import { useLanguage } from '@/hooks/useLanguage'
import Image from 'next/image'
import Link from 'next/link'
import { BsChatSquareDots } from 'react-icons/bs'
import { FiAtSign } from "react-icons/fi"
import { MdWorkOutline } from 'react-icons/md'
import { RiComputerLine } from 'react-icons/ri'
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
                    <Link href={"/about"}>
                        <span className={styles.text_menu}>
                            {t("aboutMe")}
                        </span>
                        <FiAtSign className={styles.icon} />
                    </Link>
                    <Link href={"/career"}>
                        <span className={styles.text_menu}>
                            {t("career")}
                        </span>
                        <MdWorkOutline className={styles.icon} />
                    </Link>
                    <Link href={"/works"}>
                        <span className={styles.text_menu}>
                            {t("works")}
                        </span>
                        <RiComputerLine className={styles.icon} />
                    </Link>
                    <Link href={"/contact"}>
                        <span className={styles.text_menu}>
                            {t("contact")}
                        </span>
                        <BsChatSquareDots className={styles.icon} />
                    </Link>
                </ul>
            </nav>
        </header>
    )
}