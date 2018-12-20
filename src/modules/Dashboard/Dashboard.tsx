import React, { Component } from 'react'

import styles from './dashboard.scss'

export default class Dashboard extends Component<{}> {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.byttonContainer}>
          <div className={styles.createBuildButton}>CREATE NEW BUILD</div>
        </div>
      </div>
    )
  }
}