import { useLanguage } from '@/hooks/useLanguage'
import { ItemType } from '@/types/ItemType'
import Link from 'next/link'
import styles from './Item.module.scss'

export default function Item({
    role,
    enterprise,
    link,
    workingTime,
    resume
}: ItemType) {
    const {t} = useLanguage()
    return(
        <div className={styles.container}>
            <div className={styles.item_title}>
                <span className={styles.role}>{role}</span>
                {t("at")}
                <Link href={link} target='_blank'>
                    {enterprise}
                </Link>
                <span className={styles.working_time}>
                    {workingTime}
                </span>
            </div>
            <div className={styles.resume}>
                {resume}
            </div>
        </div>
    )
}