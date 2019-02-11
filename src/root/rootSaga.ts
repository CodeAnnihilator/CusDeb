import {all, fork} from 'redux-saga/effects';

import watchEntities from 'common/sagas/entities';
import watchDashboard from 'modules/Dashboard/sagas/dashboard';
import authSaga from 'modules/RegAuth/Auth/sagas/authSaga';
import registationSaga from 'modules/RegAuth/Registration/sagas/registationSaga';

export default function* rootSaga() {
	yield all([
		fork(watchEntities),
		fork(watchDashboard),
		fork(registationSaga),
		fork(authSaga),
	]);
}
