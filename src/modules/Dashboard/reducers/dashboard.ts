import {ActionType, getType} from 'typesafe-actions';

import * as actions from '../actions/dashboard';
export interface IDashboardState {
	activeImageId: null | string;
	isPending: boolean;
	activeImagesStatus: string;
	imagesTextFilter: string;
}

const initialState: IDashboardState = {
	activeImageId: null,
	isPending: true,
	imagesTextFilter: '',
	activeImagesStatus: 'all',
};

export type DashboardActions = ActionType<typeof actions>;

export default (state = initialState, action: DashboardActions): IDashboardState => {
	switch (action.type) {

		case getType(actions.selectImage):
			return {
				...state,
					activeImageId: action.payload,
					isPending: false,
			};

		case getType(actions.setActiveImagesStatus):
			return {
				...state,
					activeImagesStatus: action.payload,
			};

		case getType(actions.setImagesTextFilter):
			return {
				...state,
					imagesTextFilter: action.payload,
			};
		default:
			return state;
	}
};
