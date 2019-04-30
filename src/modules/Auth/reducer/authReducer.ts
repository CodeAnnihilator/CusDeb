import {ActionType, getType} from 'typesafe-actions';

import * as actions from '../actions/authActions';

export type AuthState = Readonly<{
	isSubmitting: boolean;
	validationError: null | string;
}>;

const initialState: AuthState = {
	isSubmitting: false,
	validationError: null,
};

export type AuthActions = ActionType<typeof actions>;

export default (state = initialState, action: AuthActions): AuthState => {
	switch (action.type) {

		case getType(actions.changeLoginError):
			return {
				...state,
					validationError: action.payload,
			};

		default:
			return state;
	}
};
