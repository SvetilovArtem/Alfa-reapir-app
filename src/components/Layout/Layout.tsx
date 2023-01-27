import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import SearchBlock from '../SearchBlock/SearchBlock'

import styles from './Layout.module.scss'

interface LayoutProps {
    children: React.ReactNode
}
const Layout = ({ children }:LayoutProps) => {
  return (
    <div className={styles.layout}>
        <Header />
        <Navigation />
        { children }
        <SearchBlock />
        <Footer />
    </div>
  )
}

export default Layout