import React, { PureComponent } from 'react'
import { List } from 'immutable'

import styles from './dashboard.scss'

import CreateBuildButton from './components/CreateBuildButton/CreateBuildButton'
// import ViewTabs from './components/ViewTabs/ViewTabs'
import ImagesCardView from './components/ImagesCardView/ImagesCardView'
import CurrentImageTab from './components/CurrentImageTab/CurrentImageTab'
import ImagesPreloader from './components/ImagesPreloader/ImagesPreloader'

interface IProps {
  images: List<any>;
  requestImages: () => void;
  selectImage: (name: string) => void;
}

export default class Dashboard extends PureComponent<IProps> {
  componentWillMount() {
    const { images, requestImages } = this.props
    if (!images.size) {
      requestImages()
    }
  }
  render() {
    const { images, selectImage } = this.props
    return (
      <div className={styles.wrapper}>
        <CreateBuildButton />
        { /* <ViewTabs /> */ }
        <div className={styles.container}>
          { 
            images.size > 0
              ? (
                  <div className={styles.images}>
                    <ImagesCardView images={images} onSelect={selectImage} />
                    <CurrentImageTab />
                  </div>
                )
              : <ImagesPreloader text='loading images' />
          }
        </div>
      </div>
    )
  }
}