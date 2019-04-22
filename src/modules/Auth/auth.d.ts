import {IState} from './index.d';

export interface IProps extends IState {
	valid: boolean;
	isAuthenticated: boolean;
	checkUserLogged: any;
	sendAuthData: any;
}
