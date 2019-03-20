import {handleActions} from 'redux-actions';

import {
	LOGIN,
	LOGOUT,
	SET_USER_DATA,
} from '../constants/user';

const initialState = {
	isAuthenticated: false,
	name: '',
	isCheckingDone: false,
};

export default handleActions({
	[LOGIN]: (state: any) => ({
		...state,
		isAuthenticated: true,
	}),
	[LOGOUT]: (state: any) => ({
		...state,
		isAuthenticated: false,
	}),
	[SET_USER_DATA]: (state: any, {payload}) => ({
		...state,
		name: payload.username,
	}),
}, initialState);
