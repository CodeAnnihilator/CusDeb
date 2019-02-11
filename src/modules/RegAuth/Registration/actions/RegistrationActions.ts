import {createAction} from 'redux-actions';

import {SEND_REGISTRATION_DATA} from '../constants/Registration';

export const sendData = createAction(
	SEND_REGISTRATION_DATA,
);
