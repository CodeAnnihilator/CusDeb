import {ActionType, getType} from 'typesafe-actions';

import * as actions from '../actions/interface';

export type InterfaceState = Readonly<{
	isPreloading: boolean;
}>;

const initialState: InterfaceState = {
	isPreloading: true,
};

export type InterfaceActions = ActionType<typeof actions>;

export default (state = initialState, action: InterfaceActions): InterfaceState => {
	switch (action.type) {

		case getType(actions.switchIsPreloading):
			return {
				...state,
				isPreloading: action.payload,
			};

		default:
			return state;
	}
};
