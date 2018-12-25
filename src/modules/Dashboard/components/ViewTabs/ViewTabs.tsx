import React, { PureComponent } from 'react'

import styles from './viewTabs.scss'

import ViewTab from './ViewTab/ViewTab'

import ImageList from 'assets/images/ImageList'
import ImageDotMatrix from 'assets/images/ImageDotMatrix'

export default class ViewTabs extends PureComponent {
  state = {
    activeTab: 0
  }

  onSwitchTab = (tab: number): void => (
    this.state.activeTab !== tab && this.setState({ activeTab: tab })
  )

  render() {
    const {
      activeTab
    } = this.state
    return (
      <div className={styles.wrapper}>
        <ViewTab
          onClick={() => this.onSwitchTab(0)}
          isActive={activeTab === 0}
          Icon={ImageList}
        />
        <ViewTab
          onClick={() => this.onSwitchTab(1)}
          isActive={activeTab === 1}
          Icon={ImageDotMatrix}
        />
      </div>
    )
  }
}
