import {ReactText} from 'react';
import {createAction} from 'redux-actions';
import types from '../constants/dashboard';

export const selectImage = createAction(
	types.SELECT_IMAGE,
	(id: ReactText) => ({id}),
);

export const setImagesTextFilter = createAction(
	types.UPDATE_TEXT_FILTER,
	(text: ReactText) => ({text}),
);

export const setActiveImagesStatus = createAction(
	types.SET_ACTIVE_IMAGES_STATUS,
	(status: string) => status,
);
