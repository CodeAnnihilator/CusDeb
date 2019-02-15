import Button from 'common/components/Button/Button';
import Flex from 'common/components/Flex/Flex';
import React, {PureComponent} from 'react';

import {FaAngleDown, FaAngleLeft, FaAngleRight} from 'react-icons/fa';

import styles from '../styles/pagination.scss';

import {COLORS} from 'common/constants/entities';

import IPaginationProps from './Pagination.d';

export default class Pagination extends PureComponent<IPaginationProps> {
	public static readonly defaultProps = {
		current: 0,
		total: 0,
		separator: '',
		onClick: null,
	};

	public state = {
		isInputVisible: false,
	};

	public onInputOpen = () => this.setState((prevState: {isInputVisible: string}) => (
		{isInputVisible: !prevState.isInputVisible}
	))

	public onInputChange = (event: any) => {
		const {current, total, onInputChange} = this.props;

		const tempValue = event.currentTarget.value;

		let value = Number.isNaN(Number(tempValue)) ? current : tempValue;

		if (value > total) {
			value = total;
		} else if (tempValue < 0) {
			value = 0;
		}

		onInputChange(value);
	}

	public render() {
		const {current, total, separator, onClick} = this.props;

		return (
			<Flex direction='column' width={220} className={styles.paginationWrapper}>
				<Flex
					height={45}
				>
					<Flex>
						<Button
							className={styles.button}
							width={40}
							name='prev'
							onClick={onClick}
							value={current}
							isDisabled={!current}
						>
							<FaAngleLeft size={18} fill={COLORS.paginationTextColor} />
						</Button>
					</Flex>
					<Flex direction='column'>
						<Flex
							alignItems='center'
							justifyContent='center'
							style={{padding: '0px 20px'}}
							grow={1}
							className={styles.paginationContainer}
						>
							<Flex indent='small' className={styles.contentItem}>
								{current}
							</Flex>
							<Flex indent='small'>
								{separator}
							</Flex>
							<Flex indent='small' className={styles.contentItem}>
								{total}
							</Flex>
						</Flex>
						<Flex width={140}>
							<Button
								className={styles.button}
								width={140}
								name='next'
								onClick={this.onInputOpen}
								value={current}
							>
								<FaAngleDown size={18} fill={COLORS.paginationTextColor} />
							</Button>
						</Flex>
					</Flex>
					<Flex>
						<Button
							className={styles.button}
							width={40}
							name='next'
							onClick={onClick}
							value={current}
							isDisabled={current >= total}
						>
							<FaAngleRight size={18} fill={COLORS.paginationTextColor} />
						</Button>
					</Flex>
				</Flex>
				{this.state.isInputVisible ?
					<input
						value={current}
						className={styles.input}
						onChange={this.onInputChange}
						type='text'
					/>
					: null}
			</Flex>
		);
	}
}
