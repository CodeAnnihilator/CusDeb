import { takeLatest, put } from 'redux-saga/effects'
import { fromJS } from 'immutable'

import types from 'common/constants/entities'

import { selectImage } from 'modules/Dashboard/actions/dashboard'

function* imagesPreloaderSaga(action) {
  const data = fromJS(action.payload)
  const activeImageId = data.getIn([0, 'name'])
  yield put(selectImage(activeImageId))
}

export default function* watchEntities() {
  yield takeLatest(types.REQUEST_IMAGES_SUCCESS, imagesPreloaderSaga)
}
