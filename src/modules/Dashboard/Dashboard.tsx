import React, {PureComponent} from 'react';

import CreateBuildButton from './components/CreateBuildButton/CreateBuildButton';
import CurrentImageTab from './components/CurrentImageTab/CurrentImageTab';
import ImagesCardView from './components/ImagesCardView/ImagesCardView';
import ImagesPreloader from './components/ImagesPreloader/ImagesPreloader';

import styles from './dashboard.scss';

interface IProps {
	images: [any];
	requestImages: () => void;
	activeImage: any;
	selectImage: (name: string) => void;
}

export default class Dashboard extends PureComponent<IProps> {
	public componentDidMount() {
		const {images, requestImages} = this.props;
		if (!images.length) requestImages();
	}

	public render() {
	const {
		images,
		selectImage,
		activeImage,
	} = this.props;

	return (
		<div className={styles.wrapper}>
			<CreateBuildButton />
			{ /* <ViewTabs /> */ }
			<div className={styles.container}>
				{
					images.length > 0
						? (
							<div className={styles.images}>
							<ImagesCardView
								images={images}
								onSelect={selectImage}
								activeImage={activeImage}
							/>
							<CurrentImageTab
								activeImage={activeImage}
							/>
							</div>
						)
						: <ImagesPreloader text='loading images' />
				}
			</div>
		</div>
	);
	}
}
