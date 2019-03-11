import {createAction} from 'redux-actions';
import types from '../constants/dashboard';

export const selectImage = createAction(
	types.SELECT_IMAGE,
	(id: string | number) => ({id}),
);

export const setImagesTextFilter = createAction(
	types.UPDATE_TEXT_FILTER,
	(text: any) => ({text}),
);

export const setActiveImagesStatus = createAction(
	types.SET_ACTIVE_IMAGES_STATUS,
	(status: string) => status,
);
