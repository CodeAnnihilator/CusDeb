import {createStandardAction} from 'typesafe-actions';

import {dashboardActionTypes} from '../constants/dashboard';

export const selectImage =
	createStandardAction(dashboardActionTypes.SELECT_IMAGE)
		<string>();

export const setActiveImagesStatus =
	createStandardAction(dashboardActionTypes.SET_ACTIVE_IMAGES_STATUS)
		<string>();
