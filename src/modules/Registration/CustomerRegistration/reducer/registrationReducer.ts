import {handleActions} from 'redux-actions';
import * as types from '../constants/registration';

export default handleActions({
	[types.START_REGISTRATION_REQUEST]: (state: any) => ({...state, isFetching: true}),
	[types.STOP_REGISTRATION_REQUEST]: (state: any) => ({...state, isFetching: false}),
}, {isFetching: false});
