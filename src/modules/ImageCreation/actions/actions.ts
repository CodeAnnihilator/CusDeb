import {createAction} from 'redux-actions';
import types from '../constants/contants';

export const changeCurrentStep = createAction(
	types.CHANGE_CURRENT_STEP,
	(step: string) => ({step}),
);

export const changeImageCreationPart = createAction(
	types.CHANGE_INITIALIZATION_SLIDE,
	(index: number) => ({index}),
);

export const selectEntity = createAction(
	types.SELECT_ENTITY,
	(entity: any) => entity,
);

export const setFilterByType = createAction(
	types.SET_FILTER_BY_TYPE,
	(entity: any) => entity,
);
