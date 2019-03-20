import {createAction} from 'redux-actions';
import {
	CHECK_USER_LOGGED,
	LOGIN,
	LOGOUT,
	SET_USER_DATA,
} from '../constants/user';

export const login = createAction(LOGIN);

export const setUserData = createAction(
	SET_USER_DATA,
	(data: any) => data,
);

export const logOut = createAction(LOGOUT);

export const checkUserLogged = createAction(CHECK_USER_LOGGED);
