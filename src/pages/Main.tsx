import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Navigation from '../components/Navigation/Navigation'
import Ofers from '../components/Ofers/Ofers'
import ProductInfo from '../components/ProductInfo/ProductInfo'
import SearchBlock from '../components/SearchBlock/SearchBlock'

import styles from './Main.module.scss'

const Main = () => {
  return (
    <div className={styles.main}>
        <Header />
        <Navigation />
        <ProductInfo />
        <Ofers />
        <SearchBlock />
        <Footer />
    </div>
  )
}

export default Main