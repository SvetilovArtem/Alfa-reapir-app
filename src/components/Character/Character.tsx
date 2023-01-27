import React from 'react'

import styles from './Character.module.scss'

interface CharacterProps {
    name: string,
    value: string
}

const Character = ({ name, value }:CharacterProps) => {
  return (
    <div className={styles.character}>
        <div className={styles.charName}>{name}:</div>
        <div className={styles.charValue}>{value}</div>
    </div>
  )
}

export default Character