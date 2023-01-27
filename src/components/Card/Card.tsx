import React from 'react'

import styles from './Card.module.scss'

const Card = () => {
  return (
    <div className={styles.card}>
        <div className={styles.top}>
            <img src="img/box.png" alt="product" />
            <div className={styles.cardInfo}>
                <div className={styles.title}>Топас-С 4</div>
                <div className={styles.power}>До 4 человек</div>
                <div className={styles.oldPrice}>86 700 ₽</div>
                <div className={styles.price}>78 030 ₽</div>
                <div className={styles.chars}>
                    <div className={styles.char}>
                        <div className={styles.name}>Очистка:</div>
                        <div className={styles.value}>0,8 м3/сут</div>
                    </div>
                    <div className={styles.char}>
                        <div className={styles.name}>Залповый сброс:</div>
                        <div className={styles.value}>175 л</div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.bottom}>
            <button type='button' className={styles.detailsButton}>Подробнее</button>
            <button type='button' className={styles.orderButton}>Заказать</button>
        </div>
    </div>
  )
}

export default Card