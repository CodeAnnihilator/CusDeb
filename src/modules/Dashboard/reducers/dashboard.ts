import {handleActions} from 'redux-actions';

import types from '../constants/dashboard';

const initialState = {
	activeImageId: null,
	isPending: true,
	activeImagesStatus: 'all',
	displaying: {
		textFilter: '',
	},
};

export default handleActions({
	[types.SELECT_IMAGE]: (state: any, action: any) => ({
		...state,
		activeImageId: action.payload.id,
		isPending: false,
	}),
	[types.SET_ACTIVE_IMAGES_STATUS]: (state: any , action: any) => ({
		...state,
		activeImagesStatus: action.payload,
	}),
	[types.UPDATE_TEXT_FILTER]: (state: any , action: any) => ({
		...state,
		displaying: {
			...state.displaying,
			textFilter: action.payload.text,
		},
	}),
}, initialState);
