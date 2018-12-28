import React, { PureComponent } from 'react'
import cn from 'classnames'
import { List } from 'immutable'

import DropDownTab from './DropDownTab/DropDownTab'

import DebianSVG from 'assets/images/distributive/debian.svg'

import styles from './currentImageTab.scss'

interface IProps {

}

interface IState {
  activeMainTab: number;
  openedDropdownTabs: List<any>;
}

export default class CurrentImageTab extends PureComponent<IProps, IState> {
  state = {
    activeMainTab: 0,
    openedDropdownTabs: List([0, 0, 1])
  }

  onSwitchMainTab = nextTab => {
    const { activeMainTab } = this.state
    if (nextTab !== activeMainTab) {
      this.setState({ activeMainTab: nextTab })
    }
  }

  onToggleDropdownTabs = tab => {
    const { openedDropdownTabs } = this.state
    const isOpened = openedDropdownTabs.get(tab)
    if (!isOpened) this.setState({ openedDropdownTabs: openedDropdownTabs.set(tab, 1) })
    if (isOpened) this.setState({ openedDropdownTabs: openedDropdownTabs.set(tab, 0) })
  }

  render() {
    const {
      activeMainTab,
      openedDropdownTabs
    } = this.state
    return (
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
            <div
              onClick={() => this.onSwitchMainTab(0)}
              className={cn(styles.tabs_tab, {[styles.tabs_tab__active]: activeMainTab === 0})}
            >common</div>
            <div
              onClick={() => this.onSwitchMainTab(1)}
              className={cn(styles.tabs_tab, {[styles.tabs_tab__active]: activeMainTab === 1})}
            >packages</div>
          </div>
          {
            activeMainTab === 1 && (
              <div>
                <DropDownTab
                  title='Base Packages'
                  value={180}
                  isOpened={openedDropdownTabs.get(0)}
                  onClick={() => this.onToggleDropdownTabs(0)}
                />
                <DropDownTab
                  title='Dependencies'
                  value={21}
                  isOpened={openedDropdownTabs.get(1)}
                  onClick={() => this.onToggleDropdownTabs(1)}
                />
                <DropDownTab
                  title='Added Packages'
                  value={18}
                  isOpened={openedDropdownTabs.get(2)}
                  onClick={() => this.onToggleDropdownTabs(2)}
                />
              </div>
            )
          }
        </div>
      </div>
    )
  }
}