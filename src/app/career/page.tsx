'use client'

import Header from "@/components/Header/Header";
import Item from "@/components/Item/Item";
import { useLanguage } from "@/hooks/useLanguage";
import styles from './styles.module.scss';

export default function Career() {
    const { t } = useLanguage()
    return (
        <div>
            <Header />
            <div className={styles.career_container}>
                <span className={styles.title}>
                    {t("career")}
                </span>
                <div className={styles.career_resume}>
                    <span>{t("careerResume")}</span>
                </div>
                <Item 
                    role="Software Developer"
                    enterprise="HST Card Technology"
                    link="https://hst.com.br/pt-br/"
                    workingTime={`2022 - ${t("currently")}`}
                    resume={(t("firstCareerResume"))}
                />
                <hr />
                <Item 
                    role="Software Engineer Jr."
                    enterprise="Tinnova Solutions"
                    link="https://tinnova.com.br/"
                    workingTime="2022"
                    resume={(t("secondCareerResume"))}
                />
                <hr />
                <Item 
                    role="Software Developer Jr."
                    enterprise="B2ML Sistemas"
                    link="https://www.b2ml.com.br/"
                    workingTime="2020 - 2022"
                    resume={(t("thirdCareerResume"))}
                />
            </div>
        </div>
    )
}