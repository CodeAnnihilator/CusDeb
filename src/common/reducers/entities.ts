import {ActionType, getType} from 'typesafe-actions';

import * as actions from '../actions/entities';

export type EntitiesState = Readonly<{
	images: any;
}>;

const initialState: EntitiesState = {
	images: [],
};

export type EntitiesActions = ActionType<typeof actions>;

export default (state = initialState, action: EntitiesActions): EntitiesState => {
	switch (action.type) {

		case getType(actions.requestImagesSuccess):
			return {
				...state,
				images: action.payload,
			};

		case getType(actions.updateImagesDateStart):
			return {
				...state,
				images: state.images.map((oldItem: any) => {
					const foundedItem = action.payload.images
						.find((item: any) => item.name === oldItem.name) || {};

					return {
						...oldItem,
						...foundedItem,
					};
				}),
			};

		case getType(actions.updateImage):
			return {
				...state,
				images: state.images.map((item: any) => {
					const changes = action.payload;
					if (item.name === changes.name) {
						return {
							...item,
							...changes,
						};
					}

					return item;
				}),
			};

		default:
			return state;
	}
};
