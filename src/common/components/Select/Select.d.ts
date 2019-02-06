import {ChangeEvent, MouseEvent, ReactNode} from 'react';

export default interface IProps {
	selected: {
		id: number | string;
		title: string | number;
		onClick: (event: ChangeEvent<HTMLDivElement>, item: any) => void;
		icon?: string;
		isDisabled: boolean;
	};
	items: Array<{
		id: number | string;
		title: string | number;
		onClick: (event: ChangeEvent<HTMLDivElement>, item: any) => void;
		icon?: ReactNode;
		isDisabled: boolean;
	}>;
	width: string | number;
	dropSelected: (event: any) => void;
	headerTitle?: string | ReactNode;
	height?: string | number;
	placeholder?: string;
	fade?: boolean;
	inputValue: string | number;
	onInputChange: (event: ChangeEvent<HTMLInputElement>, value: string | {[x: string]: string}) => void;
	onInputCloseBtnClick: (event: MouseEvent<HTMLSpanElement>) => void;
	onClick: (event: MouseEvent<HTMLDivElement>, value: string | {[x: string]: string}) => void;
}
