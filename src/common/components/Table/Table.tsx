import cn from 'classnames';
import React, {FC} from 'react';
import Flex from '../Flex/Flex';

import TableCell from './TableCell';
import TableHeaderCell from './TableHeaderCell';
import TableHeaderRow from './TableHeaderRow';
import TableRow from './TableRow';

import styles from './styles/table.scss';

import ITableProps from './types/Table';

interface ITableFunction<T> extends FC<T> {
	Row: typeof TableRow;
	Cell: typeof TableCell;
	HeaderRow: typeof TableHeaderRow;
	HeaderCell: typeof TableHeaderCell;
}

const Table: ITableFunction<ITableProps> = ({children, className, height, width, ...ownProps}) => (
	<Flex
		{...ownProps}
		alignItems='center'
		direction='column'
		height={height}
		width={width}
		className={cn(styles.table, {[className as string]: !!className} )}
	>
		{children}
	</Flex>
);

Table.defaultProps = {
	className: '',
	height: '',
	width: '',
};

Table.Row = TableRow;
Table.Cell = TableCell;
Table.HeaderRow = TableHeaderRow;
Table.HeaderCell = TableHeaderCell;

export default Table;
