import React, { PureComponent } from 'react'
import { List } from 'immutable'

import styles from './dashboard.scss'

import CreateBuildButton from './components/CreateBuildButton/CreateBuildButton'
import ViewTabs from './components/ViewTabs/ViewTabs'
import ImagesCardView from './components/ImagesCardView/ImagesCardView'
import CurrentImageTab from './components/CurrentImageTab/CurrentImageTab'

interface IProps {
  images: List<any>;
}

export default class Dashboard extends PureComponent<IProps> {
  render() {
    const { images } = this.props
    return (
      <div className={styles.wrapper}>
        <CreateBuildButton />
        <ViewTabs />
        <div className={styles.container}>
          <ImagesCardView images={images} />
          <CurrentImageTab />
        </div>
      </div>
    )
  }
}