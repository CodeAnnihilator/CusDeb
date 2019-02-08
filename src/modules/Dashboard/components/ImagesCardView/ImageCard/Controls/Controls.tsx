import cn from 'classnames';
import React, {SyntheticEvent} from 'react';
import {Trans} from 'react-i18next';
import styles from './controls.scss';

interface IProps {
	icons: Array<{
		icon: React.ReactNode;
		isDisabled?: boolean;
		onClick?: ((event: SyntheticEvent) => void);
		title: string;
	}>;
}

const Controls: React.SFC<IProps> = ({icons}) => (
	<div className={styles.controls}>
		{
			icons.map(({icon, title, onClick, isDisabled}) => (
				<React.Fragment key={title}>
					<div
						className={cn(styles.control, {
							[styles['control--disabled']] : isDisabled,
						})}
						onClick={!isDisabled ? onClick : undefined}
					>
						{icon}
						<span>
							<Trans i18nKey={`common.${title}`} />
						</span>
					</div>
				</React.Fragment>
			))
		}
	</div>
);

export default Controls;
