import {handleActions} from 'redux-actions';

import {
	LOGIN,
	LOGOUT,
	SET_USER_ACCESS_TOKEN,
	SET_USER_REFRESH_TOKEN,
} from '../constants/user';

const initialState = {
	isAuthenticated: false,
	name: '',
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
	[SET_USER_ACCESS_TOKEN]: (state: any, {payload: {token}}) => ({
		...state,
		accessToken: token,
	}),
	[SET_USER_REFRESH_TOKEN]: (state: any, {payload: {token}}) => ({
		...state,
		refreshToken: token,
	}),
}, initialState);
