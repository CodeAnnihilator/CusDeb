import React from 'react'

import Controls from './Controls/Controls'

import DebianSVG from 'assets/images/distributive/debian.svg'
import UbuntuSVG from 'assets/images/distributive/ubuntu.svg'
import DevuanSVG from 'assets/images/distributive/devuan.svg'

import textSamples from './textSamples'

const distributives = [DebianSVG, UbuntuSVG, DevuanSVG]

import styles from './imageCard.scss'

const ImageCard = ({ image }) => {
  const text = textSamples[Math.round(Math.random() * 2)]
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img className={styles.header_img} src={distributives[Math.round(Math.random() * 2)]} />
        <div className={styles.header_text}>
          <div className={styles.header_text_title}>DEVUAN 1 "JESSIE" (32-BIT)</div>
          <div className={styles.header_text_date}>Created at: 21.09.2018</div>
        </div>
      </div>
      { !!text && <div className={styles.note}>{ text }</div> }
      <Controls />
    </div>
  )
}

export default ImageCard