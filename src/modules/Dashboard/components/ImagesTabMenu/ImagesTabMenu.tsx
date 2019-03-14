import cn from 'classnames';
import React, {Component} from 'react';

import styles from './imagesTabMenu.scss';

interface IProps {
	allImages: number;
	buildingImages: number;
	succededImages: number;
	failedImages: number;
	activeImagesStatus: string;
	setActiveImagesStatus: any;
	imagesByStatusCount: any;
}

class ImagesTabMenu extends Component<IProps> {
	public static defaultProps = {
		activeImagesStatus: 'all',
	};

	public componentDidUpdate() {
		const {buildingImages, activeImagesStatus, setActiveImagesStatus} = this.props;
		if (activeImagesStatus === 'building' && buildingImages === 0) {
			setActiveImagesStatus('all');
		}
	}

	public render() {
		const {
			allImages,
			buildingImages,
			succededImages,
			failedImages,
			activeImagesStatus,
			setActiveImagesStatus,
		} = this.props;
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
				type: 'error',
			},
			{
				count: succededImages,
				title: 'Succeded images',
				type: 'ready',
			},
		];

		const displayTabs = tabs.filter(tab => tab.count !== 0);

		return (
			<div className={styles.wrapper}>
				{displayTabs.map(({count, title, type}) => (
					<a
						className={cn(styles.tab, {[styles.active]: type === activeImagesStatus})}
						key={type}
						onClick={() => setActiveImagesStatus(type)}
					>
						<span
							className={cn(styles.count, {
								[styles.default]: type === 'all',
								[styles.succeded]: type === 'ready',
								[styles.building]: type === 'building',
								[styles.faild]: type === 'error',
							})}
						>
							{count}
						</span>
						<span className={styles.text}>{title}</span>
					</a>
				))}
			</div>
		);
	}
}

export default ImagesTabMenu;
