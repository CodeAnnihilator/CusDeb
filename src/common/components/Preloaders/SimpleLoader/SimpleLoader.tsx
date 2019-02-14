import React from 'react';

import {COLORS} from 'common/constants/entities';

import styles from './simpleLoader.scss';

interface IProps {
	color?: string;
}

const SimpleLoader: React.FC<IProps> = ({color}) => (
	<div className={styles['lds-ring']}>
		{
			Array
				.from({length: 4})
				.map((_, index) => (
					<div
						key={index}
						style={{
							border: `2px solid ${color}`,
							borderColor: `${color} transparent transparent transparent`,
						}}
					/>
			))
		}
	</div>
);

SimpleLoader.defaultProps = {
	color: COLORS.gray600,
};

export default SimpleLoader;
