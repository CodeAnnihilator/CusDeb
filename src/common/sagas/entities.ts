import { takeLatest, put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { generateDummyImages } from 'common/seed/images'
import { requestImagesSuccess } from 'common/actions/entities'
import types from 'common/constants/entities'

function* requestImagesSaga() {
  const data = generateDummyImages(30)
  try {
    yield call(delay, 2000)
    yield put(requestImagesSuccess(data))
  } catch (error) {
    console.log(error)
  }
}

export default function* watchEntities() {
  yield takeLatest(types.REQUEST_IMAGES, requestImagesSaga)
}
