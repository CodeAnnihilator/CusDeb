import {createAction} from 'redux-actions';

import * as types from '../constants/registration';

export const sendData = createAction(
	types.SEND_REGISTRATION_DATA,
);

export const startRegistrationRequest = createAction(
	types.START_REGISTRATION_REQUEST,
);

export const stopRegistrationRequest = createAction(
	types.STOP_REGISTRATION_REQUEST,
);

export const changeRegistrationError = createAction(
	types.CHANGE_REGISTRATION_ERROR,
	(error: string) => ({error}),
);
