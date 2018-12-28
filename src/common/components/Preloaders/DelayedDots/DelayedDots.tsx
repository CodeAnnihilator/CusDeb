import React from 'react'

import styles from './delayedDots.scss'

interface IProps {
  color?: string;
}

const DelayedDots: React.SFC<IProps> = ({ color = '#ff6262' }) => (
  <div className={styles['lds-ellipsis']}>
    {
      Array
        .from({ length: 4 }, () => '')
        .map((_, index) => <div style={{ backgroundColor: color }} key={index} />)
    }
  </div>
)

export default DelayedDots