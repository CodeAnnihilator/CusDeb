import { takeLatest, call, put } from 'redux-saga/effects'

import { requestLounches } from 'api/entities'
import { requestLounchesSuccess } from 'common/actions/entities'

import types from 'common/constants/entities'

function* requestLounchesSaga() {
  try {
    const { data } = yield call(requestLounches)
    yield put(requestLounchesSuccess(data))
  } catch (error) {
    console.log(error)
    // yield put(requestLounchesError(error))
  }
}

export default function* watchEntities() {
  yield takeLatest(types.REQUEST_LOUNCHES, requestLounchesSaga)
}
