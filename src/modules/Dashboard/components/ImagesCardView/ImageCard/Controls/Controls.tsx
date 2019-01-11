import React, {SyntheticEvent} from 'react';
import styles from './controls.scss';
import cn from 'classnames';

interface IProps {
	icons: {
		icon: React.ReactNode;
		isDisabled?: boolean;
		onClick?: (event: SyntheticEvent) => void | null;
		title: string
	}[]
}

const Controls: React.SFC<IProps> = ({ icons }) => (
	<div className={styles.controls}>
		{
			icons.map(({icon, title, onClick, isDisabled}, index) => (
				<React.Fragment key={title}>
					<div
						className={cn(styles.control, {
							[styles['control--disabled']] : isDisabled,
						})}
						onClick={!isDisabled ? onClick : null}
					>
						{icon}
						<span>{title}</span>
					</div>
					{index !== icons.length - 1 ? <div className={styles.devider} /> : null}
				</React.Fragment>
			))
		}
	</div>
);

export default Controls;
