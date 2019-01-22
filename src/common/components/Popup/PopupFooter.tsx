import React from 'react';
import styles from './popup.scss';

interface IProps {
	className?: string;
}

const PopupFooter: React.SFC<IProps> = ({className, children}) => (
	<div
		className={className || styles['popup-footer']}
	>
		{children}
	</div>
);

export default PopupFooter;
