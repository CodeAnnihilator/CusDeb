import {MouseEvent, ReactNode, ReactText} from 'react';

export default interface IButtonProps {
	children?: ReactNode | ReactText;
	className: string;
	getRef?: any;
	isDisabled?: boolean;
	name?: string;
	type?: 'button' | 'submit' | 'reset';
	onClick: (event: MouseEvent<HTMLButtonElement>, value: any) => void;
	width?: ReactText;
	height?: ReactText;
	value?: any;
}
