import React from 'react'

import styles from './SearchForm.module.scss'

const SearchForm = () => {
  return (
    <div className={styles.searchForm}>
        <h3 className={styles.title}>Не нашли то, что искали?</h3>
        <p className={styles.text}>Заполните форму и мы перезвоним вам в течение 30 минут!</p>
        <form action="#" className={styles.form}>
            <input type="text" placeholder='Ваше имя' className={styles.input} />
            <input type="tel" placeholder='Номер телефона' className={styles.input} />
            <textarea placeholder='Ваш вопрос  (необязательно)' className={styles.textarea}></textarea>
            <button type='button' className={styles.button}>Отправить</button>
        </form>
    </div>
  )
}

export default SearchForm