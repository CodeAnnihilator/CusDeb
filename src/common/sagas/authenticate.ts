import {push} from 'connected-react-router';
import {batchActions} from 'redux-batched-actions';
import {call, put, select, takeLatest} from 'redux-saga/effects';

import {switchIsPreloading} from 'common/actions/interface';
import {login, logOut, setUserData} from 'common/actions/user';
import {CHECK_USER_LOGGED} from 'common/constants/user';
import {getCurrentUser} from 'common/selectors/user';
import {whoAmIRequest} from 'modules/Auth/api/requests';

function* checkUserSaga() {
	const location = yield select((state: any) => state.router.location.pathname);
	const user = yield select(getCurrentUser);
	if (location === '/login') {
		try {
			const {data} = yield call(whoAmIRequest);

			yield put(batchActions([
				login(),
				setUserData(data),
				push('/user'),
			]));
		} catch (error) {
			console.log(error);
		}
	} else {
		try {
			if (!user.isAuthenticated) {
				const {data} = yield call(whoAmIRequest);
				yield put(batchActions([
					login(),
					setUserData(data),
				]));
			}
		} catch (error) {
			yield put(batchActions([
				logOut(),
				push('/login'),
			]));
		}
	}

	yield put(switchIsPreloading(false));
}

function* passDeveloper() {
	yield put(batchActions([
		login(),
		switchIsPreloading(false),
	]));
}

const isDeveloper = localStorage.getItem('isDeveloper');

export default function* watchUserLoggedIn() {
	yield takeLatest(CHECK_USER_LOGGED, isDeveloper ? passDeveloper : checkUserSaga);
}
