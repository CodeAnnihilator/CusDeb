import {all, fork} from 'redux-saga/effects';

import checkUserLoggedSaga from 'common/sagas/authenticate';
import watchEntities from 'common/sagas/entities';
import authSaga from 'modules/Auth/sagas/authSaga';
import watchImageDateOfCreation from 'modules/Dashboard/sagas/createDateUpdaterSaga';
import watchDashboard from 'modules/Dashboard/sagas/dashboard';
import registrationSaga from 'modules/Registration/CustomerRegistration/sagas/registrationSaga';

export default function* rootSaga() {
	yield all([
		fork(watchEntities),
		fork(watchDashboard),
		fork(watchImageDateOfCreation),
		fork(registrationSaga),
		fork(authSaga),
		fork(checkUserLoggedSaga),
	]);
}
