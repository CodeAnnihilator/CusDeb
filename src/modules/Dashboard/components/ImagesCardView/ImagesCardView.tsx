import React from 'react'
import Masonry from 'react-masonry-css'

import ImageCard from './ImageCard/ImageCard'

import styles from './imagesCardView.scss'

interface IProps {
  images: Array<string>;
}

const breakpointColumns = {
  default: 3,
  1400: 2,
  1100: 1
}

const ImagesCardView: React.SFC<IProps> = ({ images }) => (
  <div className={styles.wrapper}>
    <Masonry
      breakpointCols={breakpointColumns}
      className={styles.masonyGrid}
    >
      {
        images.map((image, index) => (
          <ImageCard
            key={index}
            image={image}
          />
        ))
      }
    </Masonry>
  </div>
)

export default ImagesCardView