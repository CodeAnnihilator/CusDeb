import React, { Component } from 'react'

import styles from './dashboard.scss'

import DebianSVG from 'assets/images/distributive/debian.svg'
// import DevuanSVG from 'assets/images/distributive/devuan.svg'
// import UbuntuSVG from 'assets/images/distributive/ubuntu.svg'

import textSamples from './textSamples'

export default class Dashboard extends Component<{}> {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.byttonContainer}>
          <div className={styles.createBuildButton}>CREATE NEW BUILD</div>
        </div>
        <div className={styles.container}>
          <div className={styles.images}>
            <div className={styles.image}>
              <div className={styles.image_header}>
                <img className={styles.image_header_img} src={DebianSVG} />
                <div className={styles.image_header_text}>
                  <div className={styles.image_header_text_title}>DEVUAN 1 "JESSIE" (32-BIT)</div>
                  <div className={styles.image_header_text_date}>Created at: 21.09.2018</div>
                </div>
              </div>
              <div className={styles.image_note}>{ textSamples[0] }</div>
              <div className={styles.controls}>
              </div>
            </div>
          </div>
          <div className={styles.descriptionBar}>
            BAR
          </div>
        </div>
      </div>
    )
  }
}