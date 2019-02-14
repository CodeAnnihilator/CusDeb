import React from 'react';
import styles from './popup.scss';

interface IProps {
	className?: string;
}

const PopupContent: React.FC<IProps> = ({className, children}) => (
	<div
		className={className || styles['popup-content']}
	>
		{children}
	</div>
);

export default PopupContent;
