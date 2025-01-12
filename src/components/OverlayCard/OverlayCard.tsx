import { OverlayCardType } from "@/types/OverlayCardType";
import Image from "next/image";
import Link from "next/link";
import styles from './OverlayCard.module.scss';

export default function OverlayCard({
    srcImage,
    linkTo, 
    projectName,
    altImage
}: OverlayCardType) {
    return(
        <Link 
            href={linkTo} 
            target="_blank" 
            className={styles.link}
        >
            <Image 
                src={srcImage} 
                alt={altImage} 
                loading="eager" 
                layout="responsive"
                priority 
            />
            <div className={styles.overlay}>
                <span className={styles.overlay_title}>
                    {projectName}
                </span>
            </div>
        </Link>
    )
}