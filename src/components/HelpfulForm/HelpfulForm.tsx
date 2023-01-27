import React from 'react'

import styles from './HelpfulForm.module.scss'

const HelpfulForm = () => {
  return (
    <div className={styles.formWrapper}>
        <h3 className={styles.title}>Обсудим детали?</h3>
        <form action="#" className={styles.form}>
            <input type="text" placeholder='Ваше имя' className={styles.input} />
            <input type="tel" placeholder='Номер телефона' className={styles.input} />
            <button type='button' className={styles.button}>Хочу обсудить детали</button>
        </form>
    </div>

  )
}

export default HelpfulForm