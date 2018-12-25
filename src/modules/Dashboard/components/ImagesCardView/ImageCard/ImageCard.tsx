import React from 'react'
import moment from 'moment'

import Controls from './Controls/Controls'

import DebianSVG from 'assets/images/distributive/debian.svg'
import UbuntuSVG from 'assets/images/distributive/ubuntu.svg'
import DevuanSVG from 'assets/images/distributive/devuan.svg'

const distributives = [DebianSVG, UbuntuSVG, DevuanSVG]

import styles from './imageCard.scss'

const ImageCard = ({ image }) => {
  const notes = image.get('notes')
  const distro = image.getIn(['distro', 'full_name'])
  const startedAt = image.get('started_at')
  const isEmulate = image.get('emulate')
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img className={styles.header_img} src={distributives[Math.round(Math.random() * 2)]} />
        <div className={styles.header_text}>
          <div className={styles.header_text_title}>{ distro }</div>
          <div className={styles.header_text_date}>Started at: { moment(startedAt).format('L') }</div>
        </div>
      </div>
      { !!notes && <div className={styles.note}>{ notes }</div> }
      <Controls isEmulate={isEmulate} />
    </div>
  )
}

export default ImageCard