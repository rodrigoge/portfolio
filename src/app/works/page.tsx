'use client'

import Header from "@/components/Header/Header";
import { useLanguage } from "@/hooks/useLanguage";
import Image from "next/image";
import Link from "next/link";
import workImg01 from '../../assets/Work01.webp';
import workImg02 from '../../assets/Work02.webp';
import workImg03 from '../../assets/Work03.webp';
import workImg04 from '../../assets/Work04.webp';
import workImg05 from '../../assets/Work05.webp';
import workImg06 from '../../assets/Work06.webp';
import workImg07 from '../../assets/Work07.webp';
import workImg08 from '../../assets/Work08.webp';
import workImg09 from '../../assets/Work09.webp';
import workImg10 from '../../assets/Work10.webp';
import styles from './styles.module.scss';

export default function Works() {
    const { t } = useLanguage()
    return (
        <div>
            <Header />
            <div className={styles.works_container}>
                <span className={styles.title}>
                    {t("works")}
                </span>
                <div className={styles.works_resume}>
                    <span>{t("worksResume")}</span>
                </div>
                <div className={styles.images_container}>
                    <Link 
                        href={'https://www.figma.com/design/Rodw85X9fBNt7lQgHeKea1/Social?m=auto&t=dn8eLG128as8pB8h-1'} 
                        target="_blank" 
                        className={styles.link}
                    >
                        <Image src={workImg01} alt="Work Image 1" loading="eager" priority layout="responsive"/>
                        <div className={styles.overlay}>
                            <span className={styles.overlay_title}>
                                Social App
                            </span>
                        </div>
                    </Link> 
                    <Link 
                        href={'https://www.figma.com/design/HFHywpTt0v1tv6MjNfAqog/ReFood?m=auto&t=dn8eLG128as8pB8h-1'} 
                        target="_blank"
                        className={styles.link}
                    >
                        <Image src={workImg02} alt="Work Image 2" loading="eager" priority layout="responsive"/>
                        <div className={styles.overlay}>
                            <span className={styles.overlay_title}>
                                ReFood
                            </span>
                        </div>
                    </Link>
                </div>
                <div className={styles.images_container}>
                    <Link 
                        href={'https://github.com/comanda-app/comanda-web'} 
                        target="_blank"
                        className={styles.link}
                    >
                        <Image src={workImg03} alt="Work Image 3" loading="eager" priority layout="responsive"/>
                        <div className={styles.overlay}>
                            <span className={styles.overlay_title}>
                                Comanda App
                            </span>
                        </div>
                    </Link>
                    <Link 
                        href={'https://github.com/rodrigoge/eco'} 
                        target="_blank"
                        className={styles.link}
                    >
                        <Image src={workImg04} alt="Work Image 4" loading="eager" priority layout="responsive"/>
                        <div className={styles.overlay}>
                            <span className={styles.overlay_title}>
                                Eco
                            </span>
                        </div>
                    </Link>
                </div>
                <div className={styles.images_container}>
                    <Link 
                        href={'https://github.com/rodrigoge/devradar'} 
                        target="_blank"
                        className={styles.link}
                    >
                        <Image src={workImg05} alt="Work Image 5" loading="eager" priority layout="responsive"/>
                        <div className={styles.overlay}>
                            <span className={styles.overlay_title}>
                                DevRadar
                            </span>
                        </div>
                    </Link>
                    <Link 
                        href={'https://github.com/rodrigoge/let-me-ask'} 
                        target="_blank"
                        className={styles.link}
                    >
                        <Image src={workImg06} alt="Work Image 6" loading="eager" priority layout="responsive"/>
                        <div className={styles.overlay}>
                            <span className={styles.overlay_title}>
                                Let Me Ask
                            </span>
                        </div>
                    </Link>
                </div>
                <div className={styles.images_container}>
                    <Link 
                        href={'https://github.com/rodrigoge/noturnal'} 
                        target="_blank"
                        className={styles.link}
                    >
                        <Image src={workImg07} alt="Work Image 7" loading="eager" priority layout="responsive"/>
                        <div className={styles.overlay}>
                            <span className={styles.overlay_title}>
                                Noturnal Theme
                            </span>
                        </div>
                    </Link>
                    <Link 
                        href={'https://github.com/rodrigoge/weather-app'} 
                        target="_blank"
                        className={styles.link}
                    >
                        <Image src={workImg08} alt="Work Image 8" loading="eager" priority layout="responsive"/>
                        <div className={styles.overlay}>
                            <span className={styles.overlay_title}>
                                Weather App
                            </span>
                        </div>
                    </Link>
                </div>
                <div className={styles.images_container}>
                    <Link 
                        href={'https://github.com/rodrigoge/globi.app'} 
                        target="_blank"
                        className={styles.link}
                    >
                        <Image src={workImg09} alt="Work Image 9" loading="eager" priority layout="responsive"/>
                        <div className={styles.overlay}>
                            <span className={styles.overlay_title}>
                                Globi App
                            </span>
                        </div>
                    </Link>
                    <Link 
                        href={'https://github.com/rodrigoge/patas-felizes'} 
                        target="_blank"
                        className={styles.link}
                    >
                        <Image src={workImg10} alt="Work Image 10" loading="eager" priority layout="responsive"/>
                        <div className={styles.overlay}>
                            <span className={styles.overlay_title}>
                                Patas Felizes
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}