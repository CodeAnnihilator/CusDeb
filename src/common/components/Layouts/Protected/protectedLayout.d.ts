import {History} from 'history';

export default interface IUserProps {
	isAuthenticated: boolean;
}

export interface IProps {
	user: IUserProps;
	history: History;
	isAuthenticated: boolean;
	checkUserLogged: () => void;
	isPreloading: boolean;
}

export interface IState {
	isCollapsed: boolean;
}
