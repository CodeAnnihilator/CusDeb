import React, { Component } from 'react'
import cn from 'classnames'

import styles from './leftNavBar.scss'

import DashboardSVG from 'assets/images/dashboard.svg'
import BookCoverSVG from 'assets/images/book-cover.svg'
import HardboundBookVariantSVG from 'assets/images/hardbound-book-variant.svg'
import EnveloperSVG from 'assets/images/envelope.svg'

export default class LeftNavBar extends Component<{}> {
  state = {
    isCollapsed: false
  }

  onToggle = () => this.setState({ isCollapsed: !this.state.isCollapsed })

  render() {
    const {
      isCollapsed
    } = this.state
    return (
      <div onClick={this.onToggle}  className={cn(styles.wrapper, {[styles.collapsed]: isCollapsed })}>
        <div className={styles.navigation}>
          <div className={cn(styles.navigation_el, styles.navigation_el__active)}>
            <img className={styles.navigation_el_img} src={DashboardSVG} />
            <span className={styles.navigation_el_text}>Dashboard</span>
          </div>
          <div className={styles.navigation_el}>
            <img className={styles.navigation_el_img} src={BookCoverSVG} />
            <span className={styles.navigation_el_text}>Docs</span>
          </div>
          <div className={styles.navigation_el}>
            <img className={styles.navigation_el_img} src={HardboundBookVariantSVG} />
            <span className={styles.navigation_el_text}>Blog</span>
          </div>
          <div className={styles.navigation_el}>
            <img className={styles.navigation_el_img} src={EnveloperSVG} />
            <span className={styles.navigation_el_text}>Feedback</span>
          </div>
        </div>
      </div>
    )
  }
}
