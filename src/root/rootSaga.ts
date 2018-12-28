import { all, fork } from 'redux-saga/effects'

import watchEntities from 'common/sagas/entities'
import watchDashboard from 'modules/Dashboard/sagas/dashboard'

export default function* rootSaga() {
  yield all([
    fork(watchEntities),
    fork(watchDashboard)
  ])
}