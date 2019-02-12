import {call, put, select, takeLatest} from 'redux-saga/effects';

import {SEND_AUTH_DATA} from '../constants/AuthConstants';

import {getFormValues} from 'redux-form';
import {delay} from 'redux-saga';
import {fetch} from 'utils/fetch';
import {startAuthRequest, stopAuthRequest} from '../actions/AuthActions';

function* sendRegistrationData() {
	//tslint:disable
	const authData = yield select(getFormValues('auth'));

	try {
        yield put(startAuthRequest());
        
        yield call(delay, 1000);

        yield call(fetch.post, '/signin', authData);
	} catch (error) {
		console.log('waiting for backend', error)
	} finally {
        yield put(stopAuthRequest()) 
    }

}

export default function* watchEntities() {
	yield takeLatest(SEND_AUTH_DATA, sendRegistrationData);
}
