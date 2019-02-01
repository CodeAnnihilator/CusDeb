import {createAction} from 'redux-actions';
import {
	CREATE_IMAGE_CHANGE_CURRENT_STEP,
	CREATE_IMAGE_SELECT_ENTITY,
	CREATE_IMAGE_SET_FILTER_BY_TYPE,
} from '../constants/contants';

export const changeCurrentStep = createAction(
	CREATE_IMAGE_CHANGE_CURRENT_STEP,
	(step: string) => ({step}),
);

export const selectEntity = createAction(
	CREATE_IMAGE_SELECT_ENTITY,
	(entity: any) => entity,
);

export const setFilterByType = createAction(
	CREATE_IMAGE_SET_FILTER_BY_TYPE,
	(entity: any) => entity,
);
