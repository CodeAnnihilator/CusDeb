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
	imagesByActiveStatus: any;
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

const ImagesCardView: React.FC<IProps> = ({onSelect, activeImage, imagesByActiveStatus, textFilter}) => (
	<div className={styles.wrapper}>
		<Masonry breakpointCols={breakpointCols}>
			{imagesByActiveStatus.map((image: any, index: any) => (
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
	imagesByActiveStatus: [],
};

export default ImagesCardView;
