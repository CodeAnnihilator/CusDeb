import cn from 'classnames';
import React from 'react';

import styles from './imagesTabMenu.scss';

interface IProps {
	allImages: number;
	buildingImages: number;
	succededImages: number;
	failedImages: number;
}

const ImagesTabMenu: React.FC<IProps> = ({allImages, buildingImages, succededImages, failedImages}) => {
	const tabs = [
		{
			count: allImages,
			title: 'All images',
			type: 'all',
		},
		{
			count: buildingImages,
			title: 'Building images',
			type: 'building',
		},
		{
			count: failedImages,
			title: 'Failed images',
			type: 'faild',
		},
		{
			count: succededImages,
			title: 'Succeded images',
			type: 'succeded',
		},
	];

	return (
		<div className={styles.wrapper}>
			{tabs.map(({count, title, type}) => (
				<a className={styles.tab} key={type}>
					<span
						className={cn(styles.count, {
							[styles.default]: type === 'all',
							[styles.succeded]: type === 'succeded',
							[styles.building]: type === 'building',
							[styles.faild]: type === 'faild',
						})}
					>
						{count}
					</span>
					<span className={styles.text}>{title}</span>
				</a>
			))}
		</div>
	);
};

export default ImagesTabMenu;
