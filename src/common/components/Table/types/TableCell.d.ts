import {ReactNode, ReactText} from 'react';

interface ITableCellProps {
	children: ReactNode;
	className?: string;
	width?: ReactText;
	height?: ReactText;
}

export default ITableCellProps;
