import React from 'react'
import IconCreator from '../../icons/IconCreator'

import styles from './Navigation.module.scss'

const Navigation = () => {
  return (
    <ul className={styles.nav}>
        <li className={styles.item}>
            <span>Каталог домов</span>
            <IconCreator type='arrow-bottom' />
        </li>
        <li className={styles.item}>
            <span>Услуги</span>
            <IconCreator type='arrow-bottom' />
        </li>
        <li className={styles.item}>
            <span>О нас</span>
            <IconCreator type='arrow-bottom' />
        </li>
        <li className={styles.item}>Контакты</li>
        <li className={styles.item}>
            <span>Блог</span>
            <IconCreator type='arrow-bottom' />
        </li>
    </ul>
  )
}

export default Navigation