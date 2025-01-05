'use client'

import Header from "@/components/Header/Header";
import { useLanguage } from "@/hooks/useLanguage";
import Image from "next/image";
import heroImg from '../assets/Hero.png';
import styles from './page.module.scss';

export default function Home() {
  const { t } = useLanguage()

  return (
    <div>
      <Header />
      <div className={styles.home_container}>
          <div className={styles.hero_left_side}>
            <span>{t("homeWelcomeTitle")}</span>
            <h3>
              {t("homeNameTitle")}
            </h3>
            <span>{t("homeDescription")}</span>
            <span>{t("homeCompanyName")}</span>
            <span>
              {t("homeContent")}
            </span>
          </div>
          <div className={styles.hero_right_side}>
            <Image src={heroImg} alt="Hero Image"/>
          </div>
      </div>
    </div>
  )
}
