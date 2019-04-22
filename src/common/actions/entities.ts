import {createAction} from 'redux-actions';
import {types} from '../constants/entities';

import {IImage} from 'common/types/entities.d';

export const requestImages = () => ({type: types.REQUEST_IMAGES});

export const requestImagesSuccess = createAction(
	types.REQUEST_IMAGES_SUCCESS,
	(data: IImage[]) => data,
);

export const updateImage = createAction(
	types.UPDATE_IMAGE,
	(changes: IImage) => ({changes}),
);

export const updateImagesDateStart = createAction(
	types.UPDATE_IMAGES_START_DATE,
	(images: IImage[]) => ({images}),
);
