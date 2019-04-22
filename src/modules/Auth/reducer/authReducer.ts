import {handleActions} from 'redux-actions';
import * as types from '../constants/authConstants';

import {IState} from 'modules/Auth/index';

const initialState = {
	isSubmitting: false,
	validationError: '',
};

export default handleActions({
	[types.CHANGE_LOGIN_ERROR]: (state: IState, {payload: {error}}: any) => (
		{...state, validationError: error}
	),
}, initialState);
