import {fromJS, List, merge, Map} from 'immutable'
import {handleActions} from 'redux-actions'
import {types} from '../constants/entities'

const initialState = Map({
	images: List(),
	buildingImages: List(),
})

export default handleActions({
	[types.REQUEST_IMAGES_SUCCESS]: (state, action) => state.set('images', fromJS(action.payload)),
	[types.UPDATE_IMAGE]: (state, {payload: {changes}}) => {

		const images = state.get('images');

		return state
			.set('images', images.map(item => {
				if (item.get('name') === changes.get('name')) {
					return merge(item, changes);
				}

				return item;
			}))
			.set('buildingImages', changes.getIn(['build', 'status']) === 'building'
				? state
					.get('buildingImages')
					.push(merge(images.find(item => item.get('name') === changes.get('name')), changes))
				: state.get('buildingImages')
			);
	},
}, initialState);