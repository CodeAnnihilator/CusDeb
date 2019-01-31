import React, {PureComponent} from 'react';
import Flex from '../Flex/Flex';
import SearchInput from '../SearchInput/SearchInput';
import SelectItem from './SelectItem';

import {COLORS} from 'common/constants/entities';

import {MdClose} from 'react-icons/md';

import styles from './select.scss';

import IProps from './Select.d';

export default class Select extends PureComponent<IProps> {
	public static defaultProps = {
		items: [],
		width: '100%',
		height: 'auto',
		headerTitle: 'Selected items:',
	};

	public render() {
		const {
			width,
			items,
			height,
			selected,
			inputValue,
			headerTitle,
			placeholder,
			dropSelected,
			onClick,
			onInputChange,
			onInputCloseBtnClick,
		} = this.props;

		return (
			<Flex
				className={styles.selectWrapper}
				style={{width, height}}
				direction='column'
			>
				<div>
					<Flex className={styles.selectSelectedItemsType}>
						{headerTitle}
					</Flex>

					{selected
						? (
							<Flex
								className={styles.selectSelectedItemsWrapper}
								alignItems='center'
							>
								{selected.icon
									? (
										<Flex
											className={styles.selectSelectedItemsTitle}
											indent='large'
										>
											{selected.icon}
										</Flex>
									)
									: null}
								<Flex
									className={styles.selectSelectedItemsTitle}
									indent='large'
								>
									{selected.title}
								</Flex>
								<Flex
									onClick={dropSelected}
									indent='large'
									className={styles.selectSelectedItemsTitleClose}
								>
									<MdClose size={14} fill={COLORS.blueCreateImageSelect}/>
								</Flex>
							</Flex>
						)
						: null}
				</div>
				<div className={styles.selectContentBox}>
					<div className={styles.selectInput}>
						<SearchInput
							value={inputValue}
							onChange={onInputChange}
							placeholder={placeholder}
							height={40}
							onInputCloseBtnClick={onInputCloseBtnClick}
						/>
					</div>
					<Flex
						className={styles.selectItemsWrapper}
						direction='column'
					>
						{items.map((item: any) => (
							<SelectItem
								key={item.id}
								item={item}
								onClick={onClick}
								isSelected={selected ? selected.id === item.id : false}
							/>
						))}
					</Flex>
				</div>
			</Flex>
		);
	}
}
