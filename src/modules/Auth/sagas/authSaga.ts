import {push} from 'connected-react-router';
import {batchActions} from 'redux-batched-actions';
import {getFormValues, startSubmit, stopSubmit} from 'redux-form';
import {delay} from 'redux-saga';
import {all, call, put, select, takeLatest} from 'redux-saga/effects';

import {whoAmIRequest} from 'modules/Auth/api/requests';
import {setBearerToken} from 'utils/token';
import {loginRequest} from '../api/requests';

import {login, setUserData} from 'common/actions/user';
import {changeLoginError} from '../actions/authActions';
import {authActionTypes} from '../constants/authConstants';

function* sendLoginData() {
	//tslint:disable
	const authData = yield select(getFormValues('auth'));

	try {
		yield all([put(startSubmit('auth')), call(delay, 1000)]);
		
		const authResponse = yield call(loginRequest, authData);
		
		localStorage.setItem('access_token', authResponse.data.access);
		localStorage.setItem('refresh_token', authResponse.data.refresh);
		
		setBearerToken(authResponse.data.access);
		
		const {data} = yield call(whoAmIRequest);
		yield put(setUserData(data));

		yield put(batchActions([
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
	yield takeLatest(authActionTypes.SEND_AUTH_DATA, sendLoginData);
}
