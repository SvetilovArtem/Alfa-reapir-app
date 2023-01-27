import React from 'react'
import IconCreator from '../../icons/IconCreator'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
        <img src="img/logo.png" alt="Logo" className={styles.logo} />
        <div className={styles.time}>
            <div>Пн-Сб: c 10:00 до 20:00</div>
            <div>Выходной: воскресенье</div>
        </div>
        <div className={styles.orderModel}>
            <div className={styles.iconModel}>
                <IconCreator type='3d' />
            </div>
            <a href="#" className={styles.link}>Заказать 3D-макет дома</a>
        </div>
        <div className={styles.contacts}>
            <div className={styles.phoneIcon}>
                <IconCreator type='phone' />
            </div>
            <div className={styles.contactsInfo}>
                <a href="tel:+79151685550" className={styles.telNumber}>+7 (915) 168-55-50</a>
                <div className={styles.messangers}>
                    <IconCreator type='wt' />
                    <IconCreator type='telegram' />
                    <IconCreator type='viber' />
                </div>
            </div>
        </div>
        <button type='button' className={styles.orderButton}>Заказать звонок</button>
    </header>
  )
}

export default Header