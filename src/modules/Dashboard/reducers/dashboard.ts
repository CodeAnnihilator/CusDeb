import {handleActions} from 'redux-actions';

import types from '../constants/dashboard';

const initialState = {
	activeImageId: null,
	isPending: true,
};

export default handleActions({
	[types.SELECT_IMAGE]: (state, action) => ({
		...state,
		activeImageId: action.payload,
		isPending: false,
	}),
}, initialState);
