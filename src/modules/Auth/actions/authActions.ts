import {createAction} from 'redux-actions';
import {SEND_AUTH_DATA, START_AUTH_REQUEST, STOP_AUTH_REQUEST} from '../constants/authConstants';

export const sendAuthData = createAction(
	SEND_AUTH_DATA,
);

export const startAuthRequest = createAction(
	START_AUTH_REQUEST,
);
export const stopAuthRequest = createAction(
	STOP_AUTH_REQUEST,
);
