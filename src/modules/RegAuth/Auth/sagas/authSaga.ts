import {call, select, takeLatest} from 'redux-saga/effects';

import {SEND_AUTH_DATA} from '../constants/AuthConstants';

import {getFormValues} from 'redux-form';
import {fetch} from 'utils/fetch';

function* sendRegistrationData() {
	//tslint:disable
	const authData = yield select(getFormValues('auth'));

	try {
		yield call(fetch.post, '/signin', authData);
	} catch (error) {
		console.log('waiting for backend', + error)
	}

}

export default function* watchEntities() {
	yield takeLatest(SEND_AUTH_DATA, sendRegistrationData);
}
