import Image from 'next/image'
import Link from 'next/link'
import logo from '../../assets/logo.svg'
import styles from './Header.module.scss'

export default function Header() {
    return(
        <header className={styles.header}>
            <Link href='/' className={styles.logo}>
                <Image src={logo} alt='Logotype' className={styles.logo_image}/>
            </Link>

            <nav>
                <ul>
                    <select name="language-selector-select" id="language-selector-select">
                        <option value="portuguese" lang='pt/br' defaultValue={''}>
                            BR
                        </option>
                        <option value="english" lang='eng'>EN</option>
                    </select>

                    <Link href={"/about"}>About Me</Link>
                    <Link href={"/career"}>Career</Link>
                    <Link href={"/works"}>Works</Link>
                    <Link href={"/contact"}>Contact</Link>
                </ul>
            </nav>
        </header>
    )
}