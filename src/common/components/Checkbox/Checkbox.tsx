import React, {MouseEvent, PureComponent} from 'react';

import CheckboxSVG from 'assets/images/CheckboxIcon';

import styles from './checkbox.scss';

import {COLORS} from 'common/constants/entities';

interface IProps {
	isDisabled?: boolean;
	isActive: boolean;
	onToggle: () => void;
}

class Checkbox extends PureComponent<IProps> {
	public static defaultProps = {
		isDisabled: false,
		isActive: false,
		onToggle: () => false,
	};

	private readonly checkboxFill = () => {
		const {isDisabled, isActive} = this.props;

		return isDisabled ? COLORS.checkboxDisabled : (isActive ? COLORS.checkboxActive : COLORS.checkbox);
	}

	private readonly clickHandler = (event: MouseEvent) => {
		event.stopPropagation();
		if (!this.props.isDisabled) this.props.onToggle();
	}

	public render() {
		return (
			<label className={styles.label}>
				<CheckboxSVG
					className={styles.label_img}
					active={this.props.isActive}
					onClick={this.clickHandler}
					fill={this.checkboxFill()}
				/>
			</label>
		);
	}
}

export default Checkbox;
