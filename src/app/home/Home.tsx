import { useLanguage } from "@/hooks/useLanguage";
import Image from "next/image";
import Link from "next/link";
import heroImg from '../../assets/Hero.webp';
import styles from './Home.module.scss';

export default function Home() {
    const { t } = useLanguage()

    return(
        <div className={styles.home_container}>
          <div className={styles.hero_left_side}>
            <span className={styles.title}>{t("homeWelcomeTitle")}</span>
            <span className={styles.name}>
              {t("homeNameTitle")}
            </span>
            <br />
            <div className={styles.description_company_name}>
              <span>{t("homeDescription")}</span>
              <Link 
                href={'https://hst.com.br/pt-br/'}
                target="_blank"
                className={styles.company_name}
              >
                  {t("homeCompanyName")}
              </Link>
            </div>
            <br />
            <span className={styles.content}>
              {t("homeContent")}
            </span>
            <br />
            <span className={styles.content}>
              {t("homeSecondContent")}
            </span>
          </div>
          <div className={styles.hero_right_side}>
            <Image src={heroImg} alt="Hero Image" loading="eager" priority/>
          </div>
      </div>
    )
}