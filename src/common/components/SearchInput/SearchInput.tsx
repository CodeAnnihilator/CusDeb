import React, {ChangeEvent, MouseEvent, PureComponent} from 'react';
import styles from './input.scss';

import {MdClose, MdSearch} from 'react-icons/md';

interface IProps {
	isDisabled?: boolean;
	value: any;
	className?: string;
	name?: string;
	height?: string | number;
	width?: string | number;
	placeholder?: string;
	onChange: ((event: ChangeEvent<HTMLInputElement>, value: string | {[x: string]: string}) => void);
	onInputCloseBtnClick: (event: MouseEvent<HTMLSpanElement>) => void;
}

export default class SearchInput extends PureComponent<IProps> {
	public static defaultProps = {
		isDisabled: false,
		value: '',
		name: '',
		height: 40,
		width: 400,
	};

	private readonly onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const {onChange, name} = this.props;
		const value = event.currentTarget.value;

		onChange(event, name ? {[name]: value} : value);
	}

	private readonly onCloseBtnClick = (event: MouseEvent<HTMLSpanElement>) => {
		const {onInputCloseBtnClick, name} = this.props;

		onInputCloseBtnClick(event);
	}

	public render() {
		const {isDisabled, value, className, placeholder, height} = this.props;

		return (
			<div
				className={styles.inputWrapper}
				style={{height}}
			>
				<span className={styles.inputIcon}><MdSearch size={20} /></span>
				<input
					value={value}
					disabled={isDisabled}
					className={className || styles.input}
					onChange={this.onChange}
					placeholder={placeholder}
				/>
				{value.length
					? (
						<span className={styles.clearAll} onClick={this.onCloseBtnClick}>
							<MdClose size={16} />
						</span>
					)
					: null
				}
			</div>
		);
	}
}
