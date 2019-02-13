import cn from 'classnames';
import React from 'react';
import Flex from '../Flex/Flex';

import styles from './styles/tableCell.scss';

import ITableCellProps from './types/TableCell.d';

const TableCell: React.FC<ITableCellProps> = ({
	children, className, width, height, ...ownProps
}) => (
	<Flex
		{...ownProps}
		className={cn(styles.cell, {[className as string]: !!className})}
		width={width}
		height={height}
	>
		{children}
	</Flex>
);

TableCell.defaultProps = {
	className: '',
	height: '',
	width: '',
};

export default TableCell;
