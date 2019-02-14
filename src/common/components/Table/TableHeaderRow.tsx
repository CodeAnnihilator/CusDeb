import cn from 'classnames';
import React from 'react';
import Flex from '../Flex/Flex';

import styles from './styles/headerRow.scss';

import ITableHeaderRowProps from './types/TableHeaderRow.d';

const TableHeaderRow: React.FC<ITableHeaderRowProps> = ({children, className, ...ownProps}) => (
	<Flex {...ownProps} className={cn(styles.header, {[className as string]: !!className})} >
		{children}
	</Flex>
);

TableHeaderRow.defaultProps = {
	className: '',
};

export default TableHeaderRow;
