import cn from 'classnames';

import React from 'react';
import Flex from '../Flex/Flex';

import styles from './styles/headerCell.scss';

import ITableHeaderCellProps from './types/TableHeaderCell';

const TableHeaderCell: React.FC<ITableHeaderCellProps> = ({
	children, className, width, height, ...ownProps
}) => (
	<Flex
		{...ownProps}
		alignItems='center'
		width={width}
		height={height}
		className={cn(styles.headerCell, {[className as string]: !!className})}
	>
		{children}
	</Flex>
);

TableHeaderCell.defaultProps = {
	className: '',
	height: '',
	width: '',
};

export default TableHeaderCell;
