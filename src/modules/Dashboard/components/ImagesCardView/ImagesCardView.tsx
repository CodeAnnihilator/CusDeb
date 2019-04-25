import React from 'react';

import Masonry from 'common/components/Masonry/Masonry';

import ImageCard from './ImageCard/ImageCard';
import styles from './imagesCardView.scss';

interface IProps {
	images: any;
	activeImage: {
		name: string;
	};
	onSelect: (name: string) => void;
	textFilter: string;
}

const breakpointCols = {
	default: 7,
	2500: 6,
	2200: 5,
	1900: 4,
	1600: 3,
	1400: 2,
	767: 1,
};

const ImagesCardView: React.FC<IProps> = ({onSelect, activeImage, images, textFilter}) => (
	<div className={styles.wrapper}>
		<Masonry breakpointCols={breakpointCols}>
			{images.map((image: any, index: number) => (
					<ImageCard
						key={index}
						image={image}
						onSelect={onSelect}
						isActive={image.name === activeImage.name}
						textFilter={textFilter}
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
