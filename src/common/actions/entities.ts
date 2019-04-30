import {action, createStandardAction} from 'typesafe-actions';

import {entitiesActionTypes} from '../constants/entities';

export const requestImages = () =>
	action(entitiesActionTypes.REQUEST_IMAGES);

export const requestImagesSuccess =
	createStandardAction(entitiesActionTypes.REQUEST_IMAGES_SUCCESS)
		<any>();

export const updateImage =
	createStandardAction(entitiesActionTypes.UPDATE_IMAGE)
		<any>();

export const updateImagesDateStart =
	createStandardAction(entitiesActionTypes.UPDATE_IMAGES_START_DATE)
		<any>();

export const requestImagesError =
	createStandardAction(entitiesActionTypes.REQUEST_IMAGES_SUCCESS)
		<any>();
