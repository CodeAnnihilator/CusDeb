import {ReactChildren, ReactNode, ReactText} from 'react';

export default interface IAlertProps {
	type: 'warning' | 'error' | 'info' | 'success' | undefined;
	children: ReactChildren | ReactNode;
}
