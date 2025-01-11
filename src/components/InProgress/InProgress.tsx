'use client'

import { useLanguage } from "@/hooks/useLanguage";
import Image from "next/image";
import inProgressImg from '../../assets/InProgress.webp';
import styles from './InProgress.module.scss';

export default function InProgress() {
    const { t } = useLanguage()

    return (
        <div className={styles.container}>
            <span className={styles.title}>
            {t("inProgress")}
            </span>
            <Image 
                src={inProgressImg} 
                alt='In progress image' 
                className={styles.in_progress_img}
                loading="eager" priority
            />
        </div>
    )
}