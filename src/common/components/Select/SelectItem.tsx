import cn from 'classnames';
import React, {MouseEvent, PureComponent, ReactNode} from 'react';
import {Trans} from 'react-i18next';

import styles from './select.scss';

interface IProps {
	item: {
		id: number | string;
		title: string | number;
		icon?: ReactNode;
		isDisabled: boolean;
	};
	isSelected: boolean;
	onClick: (event: MouseEvent<HTMLDivElement>, value: any) => void;
}

export default class SelectItem extends PureComponent<IProps> {
	public onItemClick = (event: any) => this.props.onClick(event, this.props.item);

	public render() {
		const {item, isSelected} = this.props;

		return (
			<div
				className={cn(styles.selectItem, {[styles.selectItemSelected]: isSelected})}
				onClick={this.onItemClick}
			>
				<span className={styles.selectItemSelectTitle} >
					{item.icon ? <span style={{marginRight: 10}}>{item.icon}</span> : null}
					<span className={styles.selectItemSelectTitleText} >{item.title}</span>
				</span>
				{isSelected
					? <span className={styles.selectItemSelectLabel} >
						<Trans i18nKey='common.selected' />
					</span>
					: null}
			</div>
		);
	}
}
