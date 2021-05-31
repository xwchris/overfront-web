import React from 'react'
import Link from 'next/link'
import cs from 'classnames';
import styles from './index.module.css'
import IconStyles from '../../styles/icon.module.css'

const ListItem = ({ data }) => {
    const { id, title, date } = data;
    return (
        <li className={styles.card}>
            <div className={styles.cardTop}>
                <div className={cs(styles.cardIcon, IconStyles.icon, IconStyles.iconJs)}></div>
                <div className={styles.cardData}>
                    <Link href={`/posts/${id}`}>
                        <h3 className={styles.cardTitle}>
                            <a>{title}</a>
                        </h3>
                    </Link>
                    <div className={styles.cardTag}>{date}</div>
                </div>
            </div>
            <div className={styles.cardDesc}>
                <p>JavaScript provides a handful of ways to iterate over data. While array methods are usually preferred, there are cases where a JavaScript provides a handful of ways to iterate over data. While array methods are usually preferred, there are cases where a </p>
            </div>
        </li>
    )
}

export default ListItem