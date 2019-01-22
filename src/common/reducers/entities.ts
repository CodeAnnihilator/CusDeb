import {handleActions} from 'redux-actions';
import {types} from '../constants/entities';

const initialState = {
	images: [],
};

export default handleActions({
	[types.REQUEST_IMAGES_SUCCESS]: (state: any, action: any) => ({...state, images: action.payload}),
	[types.UPDATE_IMAGE]: (state: any, {payload: {changes}}: any) => ({
		...state,
		images: state.images.map((item: any) => {
			if (item.name === changes.name) {
				return {
					...item,
					...changes,
				};
			}

			return item;
		}),
	}),
}, initialState);
