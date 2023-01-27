import React from 'react'
import IconCreator from '../../icons/IconCreator'
import Card from '../Card/Card'

import styles from './Ofers.module.scss'

const Ofers = () => {
  return (
    <div className={styles.ofers}>
        <h2 className={styles.ofersTitle}>Вам также могут понравиться</h2>
        <div className={styles.ofersContent}>
            <div className={styles.arrowLeft}>
                <IconCreator type='arrow-left' />
            </div>
            <div className={styles.cards}>
                <Card />
                <Card />
                <Card />
            </div>
            <div className={styles.arrowRight}>
                <IconCreator type='arrow-right' />
            </div>
        </div>
    </div>
  )
}

export default Ofers