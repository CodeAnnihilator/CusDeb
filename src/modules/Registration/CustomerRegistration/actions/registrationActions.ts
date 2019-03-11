import {createAction} from 'redux-actions';

import {SEND_REGISTRATION_DATA, START_REGISTRATION_REQUEST, STOP_REGISTRATION_REQUEST} from '../constants/registration';

export const sendData = createAction(
	SEND_REGISTRATION_DATA,
);

export const startRegistrationRequest = createAction(
	START_REGISTRATION_REQUEST,
);

export const stopRegistrationRequest = createAction(
	STOP_REGISTRATION_REQUEST,
);
