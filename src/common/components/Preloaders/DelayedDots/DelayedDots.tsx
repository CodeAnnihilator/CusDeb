import React from 'react';

import styles from './delayedDots.scss';

interface IProps {
	color?: string;
}

const DelayedDots: React.SFC<IProps> = ({color}) => (
	<div className={styles['lds-ellipsis']}>
		{
			Array
				.from({length: 4}, () => '')
				.map((_, index) => (
					<div
						style={{backgroundColor: color}}
						key={index}
					/>
				))
		}
	</div>
);

DelayedDots.defaultProps = {
	color: '#ff6262',
};

export default DelayedDots;
