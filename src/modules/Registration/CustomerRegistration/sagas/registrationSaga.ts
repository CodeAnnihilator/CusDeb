import {push} from 'connected-react-router';
import i18next from 'i18next';
import {call, put, select, takeLatest} from 'redux-saga/effects';

import * as types from '../constants/registration';

import {getFormValues, startSubmit, stopSubmit} from 'redux-form';
import {delay} from 'redux-saga';
import {fetch} from 'utils/fetch';
import {changeRegistrationError} from '../actions/registrationActions';

function* sendRegistrationData() {
	//tslint:disable
	const registrationData = yield select(getFormValues('registration'));

	try {
        yield put(startSubmit('registration'));

        yield call(delay, 1000);

		yield call(fetch.post, 'auth/signup', registrationData);
		yield put(push('/login'))
	} catch (error) {
		const data = error.response.data.message;
		let errorText = '';

		if (data) {
			const sentence = data.toLowerCase().split(' ');

			for (let i = 1; i < sentence.length; i++) {
				sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].substring(1);
			}
			errorText = i18next.t(`RequestsErrors.${sentence.join('')}`);
		} else {
			errorText = 'Validation error';
		}
		yield put(changeRegistrationError(errorText));
	} finally {
        yield put(stopSubmit('registration'));
    }	
}

export default function* watchEntities() {
	yield takeLatest(types.SEND_REGISTRATION_DATA, sendRegistrationData);
}
