import React from 'react';

import Masonry from 'common/components/Masonry/Masonry';
import ImagesPreloader from 'modules/Dashboard/components/ImagesPreloader/ImagesPreloader';

import ImageCard from './ImageCard/ImageCard';
import styles from './imagesCardView.scss';

interface IProps {
	images: any[];
	activeImage: {
		name: string;
	};
	onSelect: (name: string) => void;
	imagesByActiveStatus: any;
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

const ImagesCardView: React.FC<IProps> = ({onSelect, activeImage, imagesByActiveStatus}) => (
	<div className={styles.wrapper}>
		{
			imagesByActiveStatus.length
				? (
					<Masonry breakpointCols={breakpointCols}>
						{imagesByActiveStatus.map((image: any, index: number) => (
								<ImageCard
									key={index}
									image={image}
									onSelect={onSelect}
									isActive={image.name === activeImage.name}
								/>
							))
						}
					</Masonry>
				) : <ImagesPreloader text='loading images' />
		}
	</div>
);

ImagesCardView.defaultProps = {
	activeImage: {
		name: '',
	},
	imagesByActiveStatus: [],
};

export default ImagesCardView;
