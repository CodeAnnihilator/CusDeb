import React, {ChangeEvent, PureComponent} from 'react';
import {Trans} from 'react-i18next';

import CurrentImageTab from './components/CurrentImageTab/CurrentImageTab';
import ImagesCardView from './components/ImagesCardView/ImagesCardView';
import ImagesPreloader from './components/ImagesPreloader/ImagesPreloader';
import CreateBuildButtonContainer from './containers/CreateBuildButtonContainer';

import Select from 'common/components/Select/Select';
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

	public items = [
		{
			icon: <div/>,
			onClick: (event: ChangeEvent<HTMLDivElement>, value: any) =>
				this.setState({selectedItem: value}),
			title: 'Nice',
			id: 1,
			isDisabled: false,
		},
		{
			icon: <div/>,
			onClick: (event: ChangeEvent<HTMLDivElement>, value: any) =>
				this.setState({selectedItem: value}),
			title: 'Nice 2',
			id: 2,
			isDisabled: false,
		},
	];

	public state = {
		value: '',
		selectedItem: this.items[0],
	};

	public render() {
	const {
		images,
		selectImage,
		activeImage,
	} = this.props;

	return (
		<div className={styles.wrapper}>
			<CreateBuildButtonContainer />
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
