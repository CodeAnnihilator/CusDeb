import React from 'react'
import cn from 'classnames'

import ImageArrowDown from 'assets/images/ImageArrowDown'

import DebianSVG from 'assets/images/distributive/debian.svg'

import styles from './currentImageTab.scss'

const CurrentImageTab = () => (
  <div className={styles.wrapper}>
    <div className={styles.wrapper_inner}>
      <div className={styles.header}>
        <img className={styles.header_img} src={DebianSVG} />
        <div className={styles.header_title}>raspbian 9 "stretch" (32-bit)</div>
        <div className={styles.header_createdAt}>
          <span>Created at: </span>
          <strong className={styles.header_createdAt_date}>21.09.2018</strong>
        </div>
      </div>
      <div className={styles.tabs}>
        <div className={styles.tabs_tab}>common</div>
        <div className={cn(styles.tabs_tab, styles.tabs_tab__active)}>packages</div>
      </div>
      <div className={styles.packages}>
        <div className={styles.packages_tab}>
          <span>Base Packages: <span>180</span></span>
          <ImageArrowDown className={styles.packages_tab_img} />
        </div>
        <div className={styles.packages_tab}>
          <span>Dependencies: <span>67</span></span>
          <ImageArrowDown className={styles.packages_tab_img} />
        </div>
        <div className={styles.packages_tab}>
          <span>Added Packages: <span>31</span></span>
          <ImageArrowDown className={styles.packages_tab_img} />
        </div>
      </div>
    </div>
  </div>
)

export default CurrentImageTab