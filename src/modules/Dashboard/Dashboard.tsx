import React, { Component } from 'react'

import styles from './dashboard.scss'

export default class Dashboard extends Component<{}> {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.byttonContainer}>
          <div className={styles.createBuildButton}>CREATE NEW BUILD</div>
        </div>
        <div className={styles.container}>
          <div className={styles.images}>
            <div>IMAGE</div>
          </div>
          <div className={styles.descriptionBar}>
            BAR
          </div>
        </div>
      </div>
    )
  }
}