import { TagType } from '@/types/TagType'
import styles from './Tag.module.scss'

export default function Tag({text}: TagType) {
    return(
        <div className={styles.container}>
            <span>
                {text}
            </span>
        </div>
    )
}