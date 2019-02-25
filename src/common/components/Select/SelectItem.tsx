import cn from 'classnames';
import React, {MouseEvent, PureComponent} from 'react';
import {Trans} from 'react-i18next';

import styles from './select.scss';

interface IProps {
	item: {
		id: number | string;
		title: string | number;
		icon?: string;
		isDisabled: boolean;
	};
	isSelected: boolean;
	onClick: (event: MouseEvent<HTMLDivElement>, value: any) => void;
}

interface IState {
	isHovered: boolean;
}

export default class SelectItem extends PureComponent<IProps, IState> {
	public state = {
		isHovered: false,
	};

	public onItemClick = (event: any) => {
		if (!this.props.isSelected) {
			this.props.onClick(event, this.props.item);
		}
	}

	public onItemHoverUnhover = (value: boolean) => this.setState({isHovered: value});

	public render() {
		const {item, isSelected} = this.props;
		const {isHovered} = this.state;

		return (
			<div
				className={cn(styles.selectItem, {[styles.selectItemSelected]: isSelected})}
				onMouseEnter={e => {this.onItemHoverUnhover(true); }}
				onMouseLeave={e => {this.onItemHoverUnhover(false); }}
			>
				<span className={styles.selectItemSelectTitle} >
					{item.icon ? <span style={{marginRight: 16}}>
						<img src={item.icon} style={{width: 22}} alt=''/>
					</span> : null}
					<span className={styles.selectItemSelectTitleText} >{item.title}</span>
				</span>
				{isSelected
					? <span className={styles.selectItemSelectLabel} >
						<Trans i18nKey='common.selected' />
					</span>
					: null}
				{isHovered && !isSelected
					? <div onClick={this.onItemClick} className={styles.buttonSelectItem}>
						<Trans i18nKey='common.select' />
					</div>
					: null }
			</div>
		);
	}
}
