import React from 'react'
import moment from 'moment'
import cn from 'classnames'
import { Map } from 'immutable'

import Controls from './Controls/Controls'

import DebianSVG from 'assets/images/distributive/debian.svg'
import UbuntuSVG from 'assets/images/distributive/ubuntu.svg'
import DevuanSVG from 'assets/images/distributive/devuan.svg'

const distributives = [DebianSVG, UbuntuSVG, DevuanSVG]

import styles from './imageCard.scss'

interface IProps {
  image: Map<any, any>;
  onSelect: (name: string) => void;
  isActive: boolean;
}

const distributive = distributives[Math.round(Math.random() * 2)]

const ImageCard: React.SFC<IProps> = ({ image, onSelect, isActive=false }) => {
  const notes = image.get('notes')
  const distro = image.getIn(['distro', 'full_name'])
  const startedAt = image.get('started_at')
  const isEmulate = image.get('emulate')
  const name = image.get('name')
  return (
    <div className={cn(styles.wrapper, {[styles.active]: isActive})}>
      <div className={styles.header} onClick={() => onSelect(name)}>
        <img className={styles.header_img} src={distributive} />
        <div className={styles.header_text}>
          <div className={styles.header_text_title}>{ distro }</div>
          <div className={styles.header_text_date}>Started at: { moment(startedAt).format('L') }</div>
        </div>
      </div>
      { notes && <div className={styles.note} onClick={() => onSelect(name)}>{ notes }</div> }
      <Controls isEmulate={isEmulate} />
    </div>
  )
}

export default ImageCard