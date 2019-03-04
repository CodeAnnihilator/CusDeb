import {createAction} from 'redux-actions';
import * as types from '../constants/authConstants';

export const sendAuthData = createAction(
	types.SEND_AUTH_DATA,
);

export const startAuthRequest = createAction(
	types.START_AUTH_REQUEST,
);
export const stopAuthRequest = createAction(
	types.STOP_AUTH_REQUEST,
);

export const changeLoginError = createAction(
	types.CHANGE_LOGIN_ERROR,
	(error: string) => ({error}),
);
