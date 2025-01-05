import Image from 'next/image'
import Link from 'next/link'
import logo from '../../assets/logo.svg'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import styles from './Header.module.scss'

export default function Header() {
    return(
        <header className={styles.header}>
            <Link href='/' className={styles.logo}>
                <Image src={logo} alt='Logotype' className={styles.logo_image}/>
            </Link>

            <nav className={styles.menu_navigation}>
                <ul className={styles.menu_navigation_list}>
                    <LanguageSelector />
                    <Link href={"/about"}>About Me</Link>
                    <Link href={"/career"}>Career</Link>
                    <Link href={"/works"}>Works</Link>
                    <Link href={"/contact"}>Contact</Link>
                </ul>
            </nav>
        </header>
    )
}