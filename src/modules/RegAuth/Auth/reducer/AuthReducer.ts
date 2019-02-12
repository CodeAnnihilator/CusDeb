import {handleActions} from 'redux-actions';
import {START_AUTH_REQUEST, STOP_AUTH_REQUEST} from '../constants/AuthConstants';

export default handleActions({
	[START_AUTH_REQUEST]: (state: any) => ({...state, isFetching: true}),
	[STOP_AUTH_REQUEST]: (state: any) => ({...state, isFetching: false}),
}, {isFetching: false});
