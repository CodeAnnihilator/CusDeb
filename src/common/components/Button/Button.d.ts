import {MouseEvent, ReactNode, ReactText, Ref} from 'react';

export default interface IButtonProps {
	children?: ReactNode | ReactText;
	className: string;
	getRef?: Ref<HTMLButtonElement>;
	isDisabled?: boolean;
	name?: string;
	type?: 'button' | 'submit' | 'reset';
	onClick: (event: MouseEvent<HTMLButtonElement>, value?: ReactNode) => void;
	width?: ReactText;
	height?: ReactText;
	value?: string | undefined | string[] | number;
}
