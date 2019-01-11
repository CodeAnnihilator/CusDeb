import React from 'react'
import { List, Map } from 'immutable'
import Masonry from 'common/components/Masonry/Masonry'
import ImageCard from './ImageCard/ImageCard'
import styles from './imagesCardView.scss'

interface IProps {
  images: List<any>;
  activeImage: Map<any, any>;
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

const ImagesCardView: React.SFC<IProps> = ({ images, onSelect, activeImage }) => {
  const activeImageName = activeImage && activeImage.get('name')
  return (
    <div className={styles.wrapper}>
      <Masonry breakpointCols={breakpointCols} >
        {
          images.map((image, index) => {
            const currentImageName = image.get('name')
            const isActive = currentImageName === activeImageName
            return (
              <ImageCard
                key={index}
                image={image}
                onSelect={onSelect}
                isActive={isActive}
                images={images}
              />
            )
          })
        }
      </Masonry>
    </div>
  )
}

export default ImagesCardView