import React from 'react'
import SearchForm from '../SearchForm/SearchForm'

import styles from './SearchBlock.module.scss'

const SearchBlock = () => {
  return (
    <div className={styles.searchBlock}>
        <div className={styles.form}><SearchForm /></div>
    </div>
  )
}

export default SearchBlock