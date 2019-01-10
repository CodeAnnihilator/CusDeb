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
  onSelect = () => {
    const {image, onSelect} = this.props;

    onSelect(image.get('name'))
  }

  static defaultProps = {
    image: {
      thumb: ''
    }
  }

  styleGetter = (tail: string) => styles[tail]

  render() {
    const { image, isActive } = this.props;
    const { styleGetter } = this;
 
    const notes = image.get('notes')
    const distro = image.getIn(['distro', 'full_name'])
    const startedAt = image.get('started_at')
    const isEmulate = image.get('emulate')
    const thumb = image.get('thumb')
    const hasError = image.get('hasError')

    return (
      <div ref='test'className={cn(styles.wrapper, {[styles.active]: isActive})}>
        <div className={styles.header} onClick={this.onSelect}>
          <img className={styles.header_img} src={ thumb } />
          <div className={cn(styles.header_text, {[styles.header_text__active]: isActive})}>
            <div className={styles.header_text_title}>{ distro }</div>
            <div className={styles.header_text_date}>Started at: { moment(startedAt).format('L') }</div>
          </div>
        </div>
        { notes &&
          <div
            className={cn(styles.note, {[styleGetter('note--error')]: hasError})}
            onClick={this.onSelect}
          >
            {!hasError ? notes : (
              <div className={styleGetter('error-box')}>
                <div className={styleGetter('error-box_header')}>
                  Oops, something went wrong
                </div>
                <div>
                  if the problem persists, please
                  {' '}
                  <a href="/dashboard">
                    report an issue
                  </a>
                </div>
              </div>
            )}
          </div>
        }
        <Controls isEmulate={isEmulate} />
      </div>
    )
  }
}

