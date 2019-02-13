import cn from 'classnames';
import React from 'react';
import Flex from '../Flex/Flex';

import styles from './styles/tableRow.scss';

import ITableHeaderRowProps from './types/TableRow.d';

const TableHeaderRow: React.FC<ITableHeaderRowProps> = ({
	children, className, isSelected, ...ownProps
}) => (
	<Flex
		{...ownProps}
		className={cn(styles.row, {
			[className as string]: !!className,
			[styles.row_selected]: isSelected,
		})}
	>
		{children}
	</Flex>
);

TableHeaderRow.defaultProps = {
	className: '',
	isSelected: false,
};

export default TableHeaderRow;
