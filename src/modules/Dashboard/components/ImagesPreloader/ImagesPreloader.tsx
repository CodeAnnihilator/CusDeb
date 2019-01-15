import React from 'react'

import styles from './imagesPreloader.scss'

import DelayedDotsPreloader from 'common/components/Preloaders/DelayedDots/DelayedDots'
import { Trans } from 'react-i18next';

interface IProps {
  text: string;
}

const ImagesPreloader: React.SFC<IProps> = ({ text }) => (
  <div className={styles.wrapper}>
    <DelayedDotsPreloader />
    <span className={styles.text}>
      <Trans i18nKey="common.LoadingImages">...</Trans>
    </span>
  </div>
)

export default ImagesPreloader