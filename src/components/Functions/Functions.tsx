import React from 'react'
import IconCreator from '../../icons/IconCreator'

import styles from './Functions.module.scss'

const Functions = () => {
  return (
    <ul className={styles.functions}>
        <li><IconCreator type='calc' /></li>
        <li><IconCreator type='binoculars' /></li>
        <li><IconCreator type='compass' /></li>
        <li><IconCreator type='worker' /></li>
    </ul>
  )
}

export default Functions