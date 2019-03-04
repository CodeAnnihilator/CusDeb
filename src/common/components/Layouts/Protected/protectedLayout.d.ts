export default interface IUserProps {
	isAuthenticated: boolean;
}

export interface IProps {
	user: IUserProps;
	history: any;
	isAuthenticated: boolean;
	checkUserLogged: () => void;
}

export interface IState {
	isCollapsed: boolean;
}
