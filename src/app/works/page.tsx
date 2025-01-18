'use client'

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import OverlayCard from "@/components/OverlayCard/OverlayCard";
import { useLanguage } from "@/hooks/useLanguage";
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
                    <OverlayCard 
                        srcImage={workImg01}
                        altImage={"Work Image 1"}
                        linkTo={"https://www.figma.com/design/Rodw85X9fBNt7lQgHeKea1/Social?m=auto&t=dn8eLG128as8pB8h-1"}
                        projectName={'Social App'}
                    />
                    <OverlayCard 
                        srcImage={workImg02}
                        altImage={"Work Image 2"}
                        linkTo={"https://www.figma.com/design/HFHywpTt0v1tv6MjNfAqog/ReFood?m=auto&t=dn8eLG128as8pB8h-1"}
                        projectName={'ReFood'}
                    />
                </div>
                <div className={styles.images_container}>
                    <OverlayCard 
                        srcImage={workImg03}
                        altImage={"Work Image 3"}
                        linkTo={"https://www.figma.com/design/eUmxTkH7pptIjnLWQeWf9C/Comanda?m=auto&t=dn8eLG128as8pB8h-1"}
                        projectName={'Comanda App'}
                    />
                    <OverlayCard 
                        srcImage={workImg04}
                        altImage={"Work Image 4"}
                        linkTo={"https://github.com/rodrigoge/eco"}
                        projectName={'Eco'}
                    />
                </div>
                <div className={styles.images_container}>
                    <OverlayCard 
                        srcImage={workImg05}
                        altImage={"Work Image 5"}
                        linkTo={"https://github.com/rodrigoge/devradar"}
                        projectName={'Dev Radar'}
                    />
                    <OverlayCard 
                        srcImage={workImg06}
                        altImage={"Work Image 6"}
                        linkTo={"https://github.com/rodrigoge/let-me-ask"}
                        projectName={'Let Me Ask'}
                    />
                </div>
                <div className={styles.images_container}>
                    <OverlayCard 
                        srcImage={workImg07}
                        altImage={"Work Image 7"}
                        linkTo={"https://github.com/rodrigoge/noturnal"}
                        projectName={'Noturnal Theme'}
                    />
                    <OverlayCard 
                        srcImage={workImg08}
                        altImage={"Work Image 8"}
                        linkTo={"https://github.com/rodrigoge/weather-app"}
                        projectName={'Weather App'}
                    />
                </div>
                <div className={styles.images_container}>
                    <OverlayCard 
                        srcImage={workImg09}
                        altImage={"Work Image 9"}
                        linkTo={"https://github.com/rodrigoge/globi.app"}
                        projectName={'Globi App'}
                    />
                    <OverlayCard 
                        srcImage={workImg10}
                        altImage={"Work Image 10"}
                        linkTo={"https://github.com/rodrigoge/patas-felizes"}
                        projectName={'Patas Felizes'}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}