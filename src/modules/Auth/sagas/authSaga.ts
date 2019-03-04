import {push} from 'connected-react-router';
import {batchActions} from 'redux-batched-actions';
import {all, call, put, select, takeLatest} from 'redux-saga/effects';

import {SEND_AUTH_DATA} from '../constants/authConstants';

import {login, writeAccessToken, writeRefreshToken} from 'common/actions/user';
import {getFormValues, startSubmit, stopSubmit} from 'redux-form';
import {delay} from 'redux-saga';
import {changeLoginError} from '../actions/authActions';
import {loginRequest} from '../api/requests';

function* sendLoginData() {
	//tslint:disable
	const authData = yield select(getFormValues('auth'));

	try {
		yield all([put(startSubmit('auth')), call(delay, 1000)]);
		
		const request = yield call(loginRequest, authData);
		yield put(batchActions([
			writeAccessToken(request.data.access),
			writeRefreshToken(request.data.refresh),
			login(),
			push('/user'),
		]))
	} catch (error) {
		yield put(changeLoginError('Login error'));
	} finally {
        yield put(stopSubmit('auth'));
    }
}

export default function* watchEntities() {
	yield takeLatest(SEND_AUTH_DATA, sendLoginData);
}
