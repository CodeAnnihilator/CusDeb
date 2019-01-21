import cn from 'classnames';
import React from 'react';

import styles from './viewTab.scss';

interface IProps {
	Icon: React.SFC<any>;
	isActive: boolean;
	onClick: () => void;
}

const ViewTab: React.SFC<IProps> = ({
	Icon,
	isActive,
	onClick,
}) => (
	<div onClick={onClick} className={cn(styles.tab, {[styles.active]: isActive})}>
		<Icon className={styles.img} fill={isActive ? '#00c359' : '#535353'} />
	</div>
);

export default ViewTab;
