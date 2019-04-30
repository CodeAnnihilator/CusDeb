import {createStandardAction} from 'typesafe-actions';

import {userActionTypes} from '../constants/user';

export const login = createStandardAction(userActionTypes.LOGIN)();
export const logOut = createStandardAction(userActionTypes.LOGOUT)();
export const checkUserLogged = createStandardAction(userActionTypes.CHECK_USER_LOGGED)();

export const setUserData =
	createStandardAction(userActionTypes.SET_USER_DATA)
		<any>();
