import React from 'react';

import Masonry from 'common/components/Masonry/Masonry';

import ImageCard from './ImageCard/ImageCard';
import styles from './imagesCardView.scss';

interface IProps {
	images: [any];
	activeImage: {
		name: string;
	};
	onSelect: (name: string) => void;
}

const breakpointCols = {
	default: 7,
	2560: 6,
	2000: 4,
	1700: 3,
	1400: 2,
	767: 1,
};

const ImagesCardView: React.SFC<IProps> = ({images, onSelect, activeImage}) => (
	<div className={styles.wrapper}>
		<Masonry breakpointCols={breakpointCols} >
			{
				images.map((image, index) => (
					<ImageCard
						key={index}
						image={image}
						onSelect={onSelect}
						isActive={image.name === activeImage.name}
					/>
				))
			}
		</Masonry>
	</div>
);

ImagesCardView.defaultProps = {
	activeImage: {
		name: '',
	},
};

export default ImagesCardView;
