import {put, takeLatest} from 'redux-saga/effects';

import {requestImagesSuccess} from 'common/actions/entities';
import {entitiesActionTypes} from 'common/constants/entities';

import {selectImage} from 'modules/Dashboard/actions/dashboard';

function* imagesPreloaderSaga(action: ReturnType<typeof requestImagesSuccess>) {
	const data = action.payload;

	if (data.length) {
		const activeImageId = data[0].name;
		yield put(selectImage(activeImageId));
	}
}

export default function* watchEntities() {
	yield takeLatest(entitiesActionTypes.REQUEST_IMAGES_SUCCESS, imagesPreloaderSaga);
}
