import {createAction} from 'redux-actions';
import {
	USRS_N_GRPS_CHANGE_CURRENT_PAGE,
	USRS_N_GRPS_CHANGE_VISIBLE_USERS_COUNT,
} from '../constants/constants';

export const changePaginationStep = createAction(
	USRS_N_GRPS_CHANGE_CURRENT_PAGE,
	(event: any, type: string, step: number) => ({type, step}),
);
export const changeCountOfVisible = createAction(
	USRS_N_GRPS_CHANGE_VISIBLE_USERS_COUNT,
	(count: number) => ({count}),
);
