import {createAction} from 'redux-actions';
import {types} from '../constants/entities';

export const requestImages = () => ({type: types.REQUEST_IMAGES});

export const requestImagesSuccess = createAction(
	types.REQUEST_IMAGES_SUCCESS,
	(data: any) => data,
);

export const updateImage = createAction(
	types.UPDATE_IMAGE,
	(changes: any) => ({changes}),
);

export const requestImagesError = createAction(
	types.REQUEST_IMAGES_ERROR,
	(error: any) => error,
);
