import {handleActions} from 'redux-actions';

import {
	USRS_N_GRPS_CHANGE_CURRENT_PAGE,
	USRS_N_GRPS_CHANGE_VISIBLE_USERS_COUNT,
} from '../constants/constants';

import usersAndGroups from '../mocks/usersAndGroupsTable.mock';

const initialState = {
	usersAndGroups,
	currentStep: 1,
	usersOnScreen: 20,
};

export default handleActions({
	[USRS_N_GRPS_CHANGE_CURRENT_PAGE]: (state: any , {payload: {type, step = null}}) => {
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
	[USRS_N_GRPS_CHANGE_VISIBLE_USERS_COUNT]: (state: any , {payload: {count}}) => ({
		...state,
		usersOnScreen: count,
		currentStep: state.usersAndGroups.length / count < state.currentStep
			? Math.ceil(state.usersAndGroups.length / count)
			: state.currentStep,
	}),
}, initialState);
