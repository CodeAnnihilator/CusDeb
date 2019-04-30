import {createStandardAction} from 'typesafe-actions';

import {interfaceActionTypes} from '../constants/interface';

export const switchIsPreloading =
	createStandardAction(interfaceActionTypes.SWITCH_IS_PRELOADING)
		<boolean>();
