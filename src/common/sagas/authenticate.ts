import {batchActions} from 'redux-batched-actions';

import {login, logOut} from 'common/actions/user';
import {CHECK_USER_LOGGED} from 'common/constants/user';
import {push} from 'connected-react-router';
import {put, select, takeLatest} from 'redux-saga/effects';

import {getCurrentUser} from 'common/selectors/user';

function* checkUserSaga() {
	try {
		const user = yield select(getCurrentUser);
		if (user.accessToken) {
			yield put(login());
		} else {
			yield put(batchActions([
				logOut(),
				push('/login'),
			]));
		}
	} catch (error) {
		console.log(error);
	}
}

export default function* watchUserLoggedIn() {
	yield takeLatest(CHECK_USER_LOGGED, checkUserSaga);
}
