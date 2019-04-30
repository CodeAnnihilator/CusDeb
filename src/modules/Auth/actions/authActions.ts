import {action, createStandardAction} from 'typesafe-actions';

import {authActionTypes} from '../constants/authConstants';

export const sendAuthData = action(authActionTypes.SEND_AUTH_DATA);
export const startAuthRequest = action(authActionTypes.START_AUTH_REQUEST);
export const stopAuthRequest = action(authActionTypes.STOP_AUTH_REQUEST);

export const changeLoginError =
	createStandardAction(authActionTypes.CHANGE_LOGIN_ERROR)
		<string>();
