import {handleActions} from 'redux-actions';
import {types} from '../constants/interface';

const initialState = {
	isPreloading: true,
};

export default handleActions({
	[types.SWITCH_IS_PRELOADING]: (state: any, {payload}) => ({
		...state,
		isPreloading: payload,
	}),
}, initialState);
