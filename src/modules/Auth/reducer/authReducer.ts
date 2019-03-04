import {handleActions} from 'redux-actions';
import * as types from '../constants/authConstants';

export default handleActions({
	[types.CHANGE_LOGIN_ERROR]: (state: any, {payload: {error}}) => (
		{...state, validationError: error}
	),
}, {isSubmitting: false});
