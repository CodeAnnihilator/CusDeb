import React from 'react';

import SimpleLoader from 'common/components/Preloaders/SimpleLoader/SimpleLoader';
import {COLORS} from 'common/constants/entities';

import styles from './progressBar.scss';

interface IProps {
	color?: string;
	width?: string | number;
	height?: string | number;
	stepsCount: number;
	step: number;
	text?: string;
	textColor?: string;
}

const ProgressBar: React.SFC<IProps> = ({color, width, height, text, textColor, stepsCount, step}) => (
	<div className={styles.wrapper} style={{width, height}}>
		<div className={styles.progress}>
			<div className={styles.fill} style={{background: color, transform: `scaleX(${100 / stepsCount * step / 100})`}}/>
			<div className={styles.container}>
				<SimpleLoader />
				<span className={styles.title} style={{color: textColor}}>
					{text}
				</span>
			</div>
		</div>
	</div>
);

ProgressBar.defaultProps = {
	width: '100%',
	height: '100%',
	color: COLORS.blue100,
	text: 'Image is building...',
	textColor: COLORS.black,
	step: 1,
	stepsCount: 1,
};

export default ProgressBar;
