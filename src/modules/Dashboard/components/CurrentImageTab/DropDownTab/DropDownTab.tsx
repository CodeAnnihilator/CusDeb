import React from 'react';

import ImageArrowDown from 'assets/images/ImageArrowDown';

import styles from './dropDownTab.scss';

interface IProps {
	title: string | React.ReactNode;
	value: number;
	isOpened: boolean;
	onClick: () => void;
}

const DropDownTab: React.FC<IProps> = ({
	title,
	value,
	isOpened,
	onClick,
	children,
}) => (
	<div>
		<div onClick={onClick} className={styles.wrapper}>
			<span>{title}: <span>{value}</span></span>
			<ImageArrowDown
				className={styles.img}
				style={{transform: isOpened ? 'scaleY(-1)' : ''}}
			/>
		</div>
		{ isOpened && <div className={styles.children}>{ children }</div> }
	</div>
);

export default DropDownTab;
