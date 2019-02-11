import {createAction} from 'redux-actions';
import {SEND_AUTH_DATA} from '../constants/AuthConstants';

export const sendAuthData = createAction(
	SEND_AUTH_DATA,
);
