import React from 'react';
import {Trans} from 'react-i18next';

import styles from './imagesPreloader.scss';

import DelayedDotsPreloader from 'common/components/Preloaders/DelayedDots/DelayedDots';

interface IProps {
	text: string;
}

const ImagesPreloader: React.SFC<IProps> = ({text}) => (
	<div className={styles.wrapper}>
		<DelayedDotsPreloader />
		<span className={styles.text}>
			<Trans i18nKey='common.LoadingImages'>{text}</Trans>
		</span>
	</div>
);

ImagesPreloader.defaultProps = {
	text: '...',
};

export default ImagesPreloader;
