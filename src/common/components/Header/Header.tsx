import React from 'react'

import styles from './header.scss'

import MenuSVG from 'assets/images/menu.svg'
import NotificationBellSVG from 'assets/images/notification-bell.svg'
import AngleArrowDownSVG from 'assets/images/angle-arrow-down.svg'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSideWrapper}>
        <div className={styles.toggle}>
          <img className={styles.toggle_img} src={MenuSVG} />
        </div>
        <div className={styles.brand}>
          <span className={styles.brand_text}>CusDeb</span>
          <sup className={styles.brand_sup}>BETA</sup>
        </div>
      </div>
      <div className={styles.controls}>
        <div className={styles.notifications}>
          <img className={styles.notifications_img} src={NotificationBellSVG} />
          <div className={styles.notifications_unred} />
        </div>
        <div className={styles.devider} />
        <div className={styles.user}>
          <span>Eugene Pyatibratov</span>
          <img className={styles.user_menu} src={AngleArrowDownSVG} />
        </div>
        <div className={styles.devider} />
        <div className={styles.language}>EN</div>
      </div>
    </div>
  )
}

export default Header