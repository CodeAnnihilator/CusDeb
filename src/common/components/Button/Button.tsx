import cn from 'classnames';
import React, {Component, MouseEvent} from 'react';
import IButtonProps from './Button.d';

import styles from './button.scss';

export default class Button extends Component<IButtonProps> {
	public static defaultProps = {
		getRef: null,
		children: null,
		isDisabled: false,
		kind: 'default',
		name: null,
		type: 'button',
		onClick: null,
		className: '',
		width: 'initial',
		value: null,
	};

	public onClick: ((event: MouseEvent<HTMLButtonElement>) => void) = (event: MouseEvent<HTMLButtonElement>) => {
		const {onClick, name, value} = this.props;

		onClick(event, name ? {[name] : value} : value);
	}

	public render() {
		const {onClick, width, height, className, type, getRef, isDisabled, value, children} = this.props;

		return (
			<button
				type={type}
				className={cn(styles.button, {
					[className] : !!className,
					[styles.button_disabled]: isDisabled,
				})}
				name={name}
				onClick={!onClick ? undefined : this.onClick}
				value={value}
				style={{width, height}}
				disabled={isDisabled}
				ref={getRef}
			>
				{children}
			</button>
		);
	}
}
