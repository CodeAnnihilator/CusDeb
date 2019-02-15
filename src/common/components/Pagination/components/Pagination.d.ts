import {MouseEvent, ReactNode, ReactText} from 'react';

interface IPaginationProps {
	current: number;
	total: number;
	separator: ReactText | ReactNode;
	onClick: (event: MouseEvent<HTMLButtonElement>, value: any) => void;
	onInputChange: (value: any) => void;
}

export default IPaginationProps;
