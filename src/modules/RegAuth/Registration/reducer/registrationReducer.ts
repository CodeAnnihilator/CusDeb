import {handleActions} from 'redux-actions';
import {START_REGISTRATION_REQUEST, STOP_REGISTRATION_REQUEST} from '../constants/Registration';

export default handleActions({
	[START_REGISTRATION_REQUEST]: (state: any) => ({...state, isFetching: true}),
	[STOP_REGISTRATION_REQUEST]: (state: any) => ({...state, isFetching: false}),
}, {isFetching: false});
