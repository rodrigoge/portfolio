import { useLanguage } from '@/hooks/useLanguage'
import Link from 'next/link'
import styles from './Footer.module.scss'

export default function Footer() {
    const {t} = useLanguage()
    return(
        <div className={styles.container}>
            <div className={styles.left_panel}>
                <span>rgestevao@gmail.com</span>
                <span>{t("madeWithLove")}</span>
            </div>
            <div className={styles.right_panel}>
                <Link href={"https://www.linkedin.com/in/rgestevao/"} target='_blank'>
                    LinkedIn
                </Link>
                <Link href={"https://github.com/rodrigoge"} target='_blank'>
                    Github
                </Link>
                <Link href={"https://www.instagram.com/rodrigoge_/"} target='_blank'>
                    Instagram
                </Link>
            </div>
        </div>
    )
}