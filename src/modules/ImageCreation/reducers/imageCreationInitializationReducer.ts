import {brands, buildTypes, distros, stepsImages, targetDevices} from 'common/seed/images';

import {handleActions} from 'redux-actions';
import types from '../constants/contants';

const initialState = {
	currentStep: 0,
	steps: [
		{text: 'initialization'},
		{text: 'packagesList'},
		{text: 'usersAndGroups'},
		{text: 'configuration'},
	],
	processSteps: [
		{
			text: 'initialization',
			image: stepsImages.init,
		},
		{
			text: 'packages',
			image: stepsImages.packages,
		},
		{
			text: 'usersAndGroups',
			image: stepsImages.users,
		},
		{
			text: 'configuration',
			image: stepsImages.config,
		},
	],
	brands,
	distros,
	targetDevices,
	buildTypes,
	selectedItems: {
		brands: null,
		targetDevices: null,
		distros: null,
		buildTypes: null,
	},
	entitesFilters: {
		brands: '',
		targetDevices: '',
		distros: '',
		buildTypes: '',
	},
	currentInitializationSlide: 0,
};

export default handleActions({
	[types.CHANGE_CURRENT_STEP]: (state: any , {payload: {step}}) => ({
		...state,
		currentStep: step,
	}),
	[types.CHANGE_INITIALIZATION_SLIDE]: (state: any , {payload: {index}}) => ({
		...state,
		currentInitializationSlide: index,
	}),
	[types.SELECT_ENTITY]: (state: any , {payload: {entity, type, isSelected}}) => {
		let isFounded = false;
		let nextIndex = parseInt(state.currentInitializationSlide, 10);
		const entitesFilters = {...state.entitesFilters};
		const filtersTypes = Object.keys(entitesFilters);

		if (isSelected) {
			if (nextIndex > 0) {
				nextIndex -= 1;
			}
			for (let i = filtersTypes.indexOf(type); i < filtersTypes.length; i++) {
				entitesFilters[filtersTypes[i]] = '';
			}
		} else if (nextIndex < 3) {
			nextIndex += 1;
		}

		const dropedValues = ['brands', 'targetDevices', 'distros', 'buildTypes'].reduceRight(
			(obj: {[key: string]: null | string}, item: any) => {
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
			...((type === 'brands' && !isSelected) ? {targetDevices: entity.targetDevices} : []),
			selectedItems: isSelected
				? {
					...state.selectedItems,
					...dropedValues,
				}
				: {
					...state.selectedItems,
					[type]: entity,
					...(type === 'brands' ? {targetDevices: null} : null),
				},
			currentInitializationSlide: nextIndex,
			entitesFilters: {...entitesFilters},
		});
	},
	[types.SET_FILTER_BY_TYPE]: (state: any , {payload: {filter, type}}) => ({
		...state,
		entitesFilters: {
			...state.entitesFilters,
			[type]: filter,
		},
	}),
}, initialState);
