import {handleActions} from 'redux-actions';
import {types} from '../constants/entities';

const initialState = {
	images: [],
};

export default handleActions({
	[types.REQUEST_IMAGES_SUCCESS]: (state: any, {payload}) => ({...state, images: payload}),
	[types.UPDATE_IMAGES_START_DATE]: (state: any, {payload: {images}}: any) => ({
		...state,
		images: state.images.map((oldItem: any) => {
			const foundedItem = images.find((item: any) => item.name === oldItem.name) || {};

			return {
				...oldItem,
				...foundedItem,
			};
		}),
	}),
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
