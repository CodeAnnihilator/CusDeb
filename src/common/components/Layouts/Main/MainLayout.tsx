import React from 'react'

import Header from 'common/components/Header/Header'
import LeftNavBar from 'common/components/LeftNavBar/LeftNavBar'

import styles from './mainLayout.scss'

const MainLayout = ({ children }) => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.wrapper}>
        <LeftNavBar />
        { children }
      </div>
    </div>
  )
}

export default MainLayout