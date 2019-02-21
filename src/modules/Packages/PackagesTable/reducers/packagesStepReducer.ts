import {handleActions} from 'redux-actions';
import {
	PACKAGES_STEP_CHANGE_CURRENT_PAGE,
	PACKAGES_STEP_CHANGE_VISIBLE_PACKAGES_COUNT,
} from '../constants/constants';
import packages from '../mocks/packagesTable.mock';

const initialState = {
	packages,
	currentStep: 1,
	packagesOnScreen: 20,
};

export default handleActions({
	[PACKAGES_STEP_CHANGE_CURRENT_PAGE]: (state: any , {payload: {type, step = null}}) => {
		if (step !== null) {
			return ({
				...state,
				currentStep: Number(step),
			});
		}

		return ({
			...state,
			currentStep: Object.keys(type)[0] === 'next' ? +state.currentStep + 1 : state.currentStep - 1,
		});
	},
	[PACKAGES_STEP_CHANGE_VISIBLE_PACKAGES_COUNT]: (state: any , {payload: {count}}) => ({
		...state,
		packagesOnScreen: count,
		currentStep: state.packages.length / count < state.currentStep
			? Math.ceil(state.packages.length / count)
			: state.currentStep,
	}),
}, initialState);
