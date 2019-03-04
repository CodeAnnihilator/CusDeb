import {handleActions} from 'redux-actions';
import * as types from '../constants/registration';

export default handleActions({
	[types.CHANGE_REGISTRATION_ERROR]: (state: any, {payload: {error}}) => (
		{...state, validationError: error}
	),
}, {validationError: null});
