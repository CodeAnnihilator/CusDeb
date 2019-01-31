import {brands, buildTypes, distros, targetDevices} from 'common/seed/images';

import {handleActions} from 'redux-actions';
import {CREATE_IMAGE_SELECT_ENTITY, CREATE_IMAGE_SET_FILTER_BY_TYPE} from '../constants/contants';

const initialState = {
	brands,
	distros,
	targetDevices,
	buildTypes,
	selectedItems: {
		brands: null,
		distros: null,
		targetDevices: null,
		buildTypes: null,
	},
	entitesFilters: {
		brands: '',
		distros: '',
		targetDevices: '',
		buildTypes: '',
	},
};

export default handleActions({
	[CREATE_IMAGE_SELECT_ENTITY]: (state: any , {payload: {entity, type}}) => ({
		...state,
		selectedItems: {
			...state.selectedItems,
			[type]: !entity || state.selectedItems[type]
				? null
				: entity,
		},
	}),
	[CREATE_IMAGE_SET_FILTER_BY_TYPE]: (state: any , {payload: {filter, type}}) => ({
		...state,
		entitesFilters: {
			...state.entitesFilters,
			[type]: filter,
		},
	}),
}, initialState);
