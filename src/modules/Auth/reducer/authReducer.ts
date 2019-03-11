import {handleActions} from 'redux-actions';
import * as types from '../constants/authConstants';

export default handleActions({
	[types.START_AUTH_REQUEST]: (state: any) => ({...state, isFetching: true}),
	[types.STOP_AUTH_REQUEST]: (state: any) => ({...state, isFetching: false}),
}, {isFetching: false});
