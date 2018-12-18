import React from 'react'

import styles from './coloredSpinner.scss'

const ColoredSpinner = () => (
  <div className={styles.spinner}>
    <svg className={styles.svg} viewBox='0 0 66 66' xmlns='http://www.w3.org/2000/svg'>
      <circle className='length' fill='none' strokeWidth='8' strokeLinecap='round' cx='33' cy='33' r='28'></circle>
    </svg>
    <svg className={styles.svg} viewBox='0 0 66 66' xmlns='http://www.w3.org/2000/svg'>
      <circle fill='none' strokeWidth='8' strokeLinecap='round' cx='33' cy='33' r='28'></circle>
    </svg>
    <svg className={styles.svg} viewBox='0 0 66 66' xmlns='http://www.w3.org/2000/svg'>
      <circle fill='none' strokeWidth='8' strokeLinecap='round' cx='33' cy='33' r='28'></circle>
    </svg>
    <svg className={styles.svg} viewBox='0 0 66 66' xmlns='http://www.w3.org/2000/svg'>
      <circle fill='none' strokeWidth='8' strokeLinecap='round' cx='33' cy='33' r='28'></circle>
    </svg>
  </div>
)

export default ColoredSpinner