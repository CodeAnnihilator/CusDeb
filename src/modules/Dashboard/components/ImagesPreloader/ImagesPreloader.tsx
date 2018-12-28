import React from 'react'

import styles from './imagesPreloader.scss'

import DelayedDotsPreloader from 'common/components/Preloaders/DelayedDots/DelayedDots'

interface IProps {
  text: string;
}

const ImagesPreloader: React.SFC<IProps> = ({ text }) => (
  <div className={styles.wrapper}>
    <DelayedDotsPreloader />
    <span className={styles.text}>loading images</span>
  </div>
)

export default ImagesPreloader