import {call, select, takeLatest} from 'redux-saga/effects';

import {SEND_REGISTRATION_DATA} from '../constants/Registration';

import {getFormValues} from 'redux-form';
import {fetch} from 'utils/fetch';

function* sendRegistrationData() {
	//tslint:disable
	const registrationData = yield select(getFormValues('registration'));

	try {
		yield call(fetch.post, '/signup', registrationData);
	} catch (error) {
		console.log('waiting for backend', + error)
	}


}

export default function* watchEntities() {
	yield takeLatest(SEND_REGISTRATION_DATA, sendRegistrationData);
}
