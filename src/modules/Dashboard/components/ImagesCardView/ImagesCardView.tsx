import React from 'react'
import { List } from 'immutable'

import Masonry from 'common/components/Masonry/Masonry'

import ImageCard from './ImageCard/ImageCard'

import styles from './imagesCardView.scss'

interface IProps {
  images: List<any>;
  onSelect: (name: string) => void;
}

const breakpointCols = {
  default: 7,
  2560: 6,
  2000: 4,
  1700: 3,
  1400: 2,
  767: 1
}

const ImagesCardView: React.SFC<IProps> = ({ images, onSelect }) => (
  <div className={styles.wrapper}>
    <Masonry breakpointCols={breakpointCols} >
      {
        images.map((image, index) => (
          <ImageCard
            key={index}
            image={image}
            onSelect={onSelect}
          />
        ))
      }
    </Masonry>
  </div>
)

export default ImagesCardView