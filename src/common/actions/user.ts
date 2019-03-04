import {createAction} from 'redux-actions';
import {
	CHECK_USER_LOGGED,
	LOGIN,
	LOGOUT,
	SET_USER_ACCESS_TOKEN,
	SET_USER_DATA,
	SET_USER_REFRESH_TOKEN,
} from '../constants/user';

export const login = createAction(LOGIN);

export const setUserData = createAction(
	SET_USER_DATA,
	(data: any) => ({data}),
);

export const writeAccessToken = createAction(
	SET_USER_ACCESS_TOKEN,
	(token: any) => ({token}),
);

export const writeRefreshToken = createAction(
	SET_USER_REFRESH_TOKEN,
	(token: any) => ({token}),
);

export const logOut = createAction(LOGOUT);

export const checkUserLogged = createAction(CHECK_USER_LOGGED);
