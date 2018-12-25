import React, { PureComponent } from 'react'

import styles from './dashboard.scss'

import CreateBuildButton from './components/CreateBuildButton/CreateBuildButton'
import ViewTabs from './components/ViewTabs/ViewTabs'
import ImagesCardView from './components/ImagesCardView/ImagesCardView'


export default class Dashboard extends PureComponent {
  render() {
    const images = Array.from({ length: 5 }, () => '')
    return (
      <div className={styles.wrapper}>
        <CreateBuildButton />
        <ViewTabs />
        <div className={styles.container}>
          <ImagesCardView images={images} />
          <div className={styles.descriptionBar}>
            BAR
          </div>
        </div>
      </div>
    )
  }
}