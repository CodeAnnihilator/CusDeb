import {call, put, select, takeLatest} from 'redux-saga/effects';

import {SEND_REGISTRATION_DATA} from '../constants/registration';

import {getFormValues} from 'redux-form';
import {delay} from 'redux-saga';
import {fetch} from 'utils/fetch';
import {startRegistrationRequest, stopRegistrationRequest} from '../actions/registrationActions';

function* sendRegistrationData() {
	//tslint:disable
	const registrationData = yield select(getFormValues('registration'));

	try {
        yield put(startRegistrationRequest());

        yield call(delay, 1000);

		yield call(fetch.post, '/signup', registrationData);
	} catch (error) {
		console.log('waiting for backend', error)
	} finally {
        yield put(stopRegistrationRequest());
    }


}

export default function* watchEntities() {
	yield takeLatest(SEND_REGISTRATION_DATA, sendRegistrationData);
}
