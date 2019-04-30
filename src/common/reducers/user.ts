import {ActionType, getType} from 'typesafe-actions';

import * as actions from '../actions/user';

export type UserState = Readonly<{
	isAuthenticated: boolean;
	name: string;
	isCheckingDone: boolean;
}>;

const initialState: UserState = {
	isAuthenticated: true,
	name: 'test user',
	isCheckingDone: true,
};

export type UserActions = ActionType<typeof actions>;

export default (state = initialState, action: UserActions): UserState => {
	switch (action.type) {

		case getType(actions.login):
			return {
				...state,
				isAuthenticated: true,
			};

		case getType(actions.logOut):
			return {
				...state,
				isAuthenticated: false,
			};

		case getType(actions.setUserData):
			return {
				...state,
				name: action.payload.username,
			};

		default:
			return state;
	}
};
