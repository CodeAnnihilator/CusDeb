import React from 'react'
import styles from './fadedText.scss'

const FadedText = ({ text }) => {
  return (
    <div className={styles.loading}>
      <div className={styles.loadingText}>
        { text.split('').map((letter, index) => <span key={index}>{letter}</span>) }
      </div>
    </div>
  )
}

FadedText.defaultProps = {
  text: 'LOADING',
}

export default FadedText