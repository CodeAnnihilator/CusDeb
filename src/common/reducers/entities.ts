import {handleActions} from 'redux-actions';
import {types} from '../constants/entities';

const initialState = {
	images: [],
	buildingImages: [],
};

export default handleActions({
	[types.REQUEST_IMAGES_SUCCESS]: (state, action) => ({...state, images: action.payload}),
	[types.UPDATE_IMAGE]: (state, {payload: {changes}}) => ({
		...state,
		images: state.images.map(item => {
			if (item.name === changes.name) {
				return {
					...item,
					...changes,
				};
			}

			return item;
		}),
		buildingImages: changes.build.status === 'building'
			? [...state.buildingImages, {...state.images.find(elem => elem.name === changes.name), ...changes}]
			: state.buildingImages,
	}),
}, initialState);
