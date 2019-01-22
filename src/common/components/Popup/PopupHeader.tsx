import React from 'react';
import {MdClose} from 'react-icons/md';

import {COLORS} from 'common/constants/entities';
import styles from './popup.scss';

interface IProps {
	className?: string;
}

const PopupHeader: React.SFC<IProps> = ({className, children}) => (
	<div
		className={styles['popup-header']}
	>
		<>
			<div className={className || styles['popup-header__title']}>
				{children}
			</div>
			<div className={styles['popup-header-close']}>
				<div className={styles['popup-header-close__cross']}>
					<MdClose size={14} fill={COLORS.gray600}/>
				</div>
			</div>
		</>
	</div>
);

export default PopupHeader;
