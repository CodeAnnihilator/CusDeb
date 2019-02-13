import cn from 'classnames';
import React from 'react';

import styles from './alert.scss';

import IAlertProps from './Alert.d';

const Alert: React.FC<IAlertProps> = ({type, children}) => (
	<div
		className={cn({
			[styles.warning]: type === 'warning',
			[styles.info]: type === 'info',
			[styles.error]: type === 'error',
		})}
	>
		{children}
	</div>
);

export default Alert;
