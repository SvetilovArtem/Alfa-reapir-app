import React from 'react'
import IconCreator from '../../icons/IconCreator'

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.company}>
            <img src="img/logo.png" alt="" className={styles.logo} />
            <button type='button' className={styles.button}>Заказать звонок</button>
        </div>
        <ul className={styles.nav}>
            <li className={styles.navItem}>Главная</li>
            <li className={styles.navItem}>Каталог</li>
            <li className={styles.navItem}>Услуги</li>
            <li className={styles.navItem}>Расчет стоимости</li>
            <li className={styles.navItem}>Консультация архитектора</li>

        </ul>
        <ul className={styles.nav}>
            <li className={styles.navItem}>Экскурсия на объект</li>
            <li className={styles.navItem}>3D-макет дома</li>
            <li className={styles.navItem}>О нас</li>
            <li className={styles.navItem}>Блог</li>
            <li className={styles.navItem}>Контакты</li>
        </ul>
        <div className={styles.info}>
            <div className={styles.subscribe}>Делимся крутыми проектами в соц.сетях. Подписывайтесь!</div>
            <div className={styles.socials}>
                <IconCreator type='vk' />
                <IconCreator type='inst' />
                <IconCreator type='fb' />
                <IconCreator type='yt' />
            </div>
            <div>Разработка и продвижение сайта:</div>
            <img src="img/logo-white.png" alt="" />
        </div>
    </footer>
  )
}

export default Footer