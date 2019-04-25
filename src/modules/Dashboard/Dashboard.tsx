import React, {ChangeEvent, PureComponent} from 'react';

import BuildOptionsSection from './components/BuildOptionsSection/BuildOptionsSection';
import CurrentImageTab from './components/CurrentImageTab/CurrentImageTab';
import ImagesPreloader from './components/ImagesPreloader/ImagesPreloader';
import ImagesCardView from './containers/ImageCardViewContainer';
import SearchOptionsSection from './containers/SearchOptionsSection';

import styles from './dashboard.scss';

interface IProps {
	images: [any];
	requestImages: () => void;
	activeImage: any;
	selectImage: (name: string) => void;
	imagesByActiveStatus: [any];
	textFilter: string;
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
		textFilter,
	} = this.props;

	return (
		<div className={styles.wrapper}>
			<BuildOptionsSection />
			{ /* <ViewTabs /> */ }
			<div className={styles.container}>
				<div className={styles.images}>
					<div className={styles.imagesCardWrapper}>
						<SearchOptionsSection />
						{
							images.length ? (
								<ImagesCardView
									onSelect={selectImage}
									activeImage={activeImage}
									textFilter={textFilter}
								/>
							) : <ImagesPreloader text='loading images' />
						}
					</div>
					<CurrentImageTab activeImage={activeImage} />
				</div>
			</div>
		</div>
	);
	}
}
