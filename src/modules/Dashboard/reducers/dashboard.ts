import {handleActions} from 'redux-actions';

import types from '../constants/dashboard';

const initialState = {
	activeImageId: null,
	isPending: true,
	activeImagesStatus: 'all',
};

export default handleActions({
	[types.SELECT_IMAGE]: (state: any , action: any) => ({
		...state,
		activeImageId: action.payload,
		isPending: false,
	}),
	[types.SET_ACTIVE_IMAGES_STATUS]: (state: any , action: any) => ({
		...state,
		activeImagesStatus: action.payload,
	}),
}, initialState);
