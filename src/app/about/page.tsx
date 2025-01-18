'use client'

import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { useLanguage } from '@/hooks/useLanguage'
import Image from 'next/image'
import gridImage01 from '../../assets/GridImage01.webp'
import gridImage02 from '../../assets/GridImage02.webp'
import gridImage03 from '../../assets/GridImage03.webp'
import gridImage04 from '../../assets/GridImage04.webp'
import styles from './styles.module.scss'

export default function About() {
    const { t } = useLanguage()

    return(
        <div>
          <Header />
          <div className={styles.about_container}>
            <div className={styles.about_left_side}>
              <span className={styles.title}>
                {t("aboutMe")}
              </span>
              <br />
              <div className={styles.about_resume}>
                <span>{t("aboutMeResume")}</span>
              </div>
            </div>

            <div className={styles.about_right_side}>
              <div className={styles.left_grid_image}>
                <Image src={gridImage01} alt="About Me Image 1" loading="eager" priority/>
                <Image src={gridImage02} alt="About Me Image 2" loading="eager" priority/>
              </div>
              <div className={styles.right_grid_image}>
                <Image src={gridImage03} alt="About Me Image 3" loading="eager" priority/>
                <Image src={gridImage04} alt="About Me Image 4" loading="eager" priority/>
              </div>
            </div>
          </div>
          <Footer />
        </div>
    )
}