import {createAction} from 'redux-actions';

import {
	CHECK_USER_LOGGED,
	LOGIN,
	LOGOUT,
	SET_USER_DATA,
} from '../constants/user';

import {IUserState} from 'common/types/user.d';

export const login = createAction(LOGIN);

export const setUserData = createAction(
	SET_USER_DATA,
	(data: IUserState) => data,
);

export const logOut = createAction(LOGOUT);

export const checkUserLogged = createAction(CHECK_USER_LOGGED);
