import {createAction} from 'redux-actions';
import {types} from '../constants/interface';

export const switchIsPreloading = createAction(
	types.SWITCH_IS_PRELOADING,
	(value: boolean) => value,
);
