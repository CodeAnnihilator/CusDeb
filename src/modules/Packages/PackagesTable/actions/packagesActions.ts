import {createAction} from 'redux-actions';
import {PACKAGES_STEP_CHANGE_CURRENT_PAGE, PACKAGES_STEP_CHANGE_VISIBLE_PACKAGES_COUNT} from '../constants/constants';

export const changePaginationStep = createAction(
	PACKAGES_STEP_CHANGE_CURRENT_PAGE,
	(event: any, type: string, step: number) => ({type, step}),
);
export const changeCountOfVisible = createAction(
	PACKAGES_STEP_CHANGE_VISIBLE_PACKAGES_COUNT,
	(count: number) => ({count}),
);
