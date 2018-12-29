import React, { PureComponent } from 'react'
import moment from 'moment'
import cn from 'classnames'
import { Map } from 'immutable'

import Controls from './Controls/Controls'

import styles from './imageCard.scss'

interface IProps {
  image: Map<any, any>;
  onSelect: (name: string) => void;
  isActive: boolean;
}

export default class ImageCard extends PureComponent<IProps> {
  render() {
    const {
      image,
      onSelect,
      isActive
    } = this.props
    const notes = image.get('notes')
    const distro = image.getIn(['distro', 'full_name'])
    const startedAt = image.get('started_at')
    const isEmulate = image.get('emulate')
    const name = image.get('name')
    const thumb = image.get('thumb')
    return (
      <div className={cn(styles.wrapper, {[styles.active]: isActive})}>
        <div className={styles.header} onClick={() => onSelect(name)}>
          <img className={styles.header_img} src={thumb || ''} />
          <div className={cn(styles.header_text, {[styles.header_text__active]: isActive})}>
            <div className={styles.header_text_title}>{ distro }</div>
            <div className={styles.header_text_date}>Started at: { moment(startedAt).format('L') }</div>
          </div>
        </div>
        { notes && <div className={styles.note} onClick={() => onSelect(name)}>{ notes }</div> }
        <Controls isEmulate={isEmulate} />
      </div>
    )
  }
}

