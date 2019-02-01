import {brands, buildTypes, distros, targetDevices} from 'common/seed/images';

import {handleActions} from 'redux-actions';
import {
	CREATE_IMAGE_CHANGE_CURRENT_STEP,
	CREATE_IMAGE_SELECT_ENTITY,
	CREATE_IMAGE_SET_FILTER_BY_TYPE,
} from '../constants/contants';

const initialState = {
	currentStep: 'initialization',
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
	[CREATE_IMAGE_CHANGE_CURRENT_STEP]: (state: any , {payload: {step}}) => ({
		...state,
		currentStep: step,
	}),
	[CREATE_IMAGE_SELECT_ENTITY]: (state: any , {payload: {entity, type, isDrop = false}}) => {
		let isFounded = false;
		const sameAsSeleted = !entity || state.selectedItems[type] && state.selectedItems[type].id === entity.id;
		const dropedValues = ['brands', 'targetDevices', 'distros', 'buildTypes'].reduceRight(
			(obj: {[key: string]: null | string}, item: string) => {
				if (item !== type && !isFounded) obj[item] = null;
				else if (item === type) {
					obj[item] = null;
					isFounded = true;
				}

				return obj;
			}, {} as {[key: string]: null | string},
		);

		return ({
			...state,
			selectedItems: isDrop || sameAsSeleted
				? {
					...state.selectedItems,
					...dropedValues,
				}
				: {
					...state.selectedItems,
					[type]: entity,
				},
		});
},
	[CREATE_IMAGE_SET_FILTER_BY_TYPE]: (state: any , {payload: {filter, type}}) => ({
		...state,
		entitesFilters: {
			...state.entitesFilters,
			[type]: filter,
		},
	}),
}, initialState);
