import moment from 'moment';
import {call, put, select, takeLatest} from 'redux-saga/effects';

import {types} from 'common/constants/entities';

import {updateImagesDateStart} from 'common/actions/entities';
import {getImages, getItemsIDAndDate} from 'common/selectors/entities';
import {delay} from 'redux-saga';

function* createDateUpdater() {
	//tslint:disable
	while (true) {
		const tempDates = yield select(getItemsIDAndDate);

		yield call(delay, 1000);
		const images = yield select(getImages);
		const data = images.filter((item: any) => tempDates.some(
			(tempDate: any) => tempDate.name === item.name && tempDate.started_at !== moment(item.started_at).fromNow()
		));

		if (data.length) yield put(updateImagesDateStart(data));
	}
}

export default function* watchImageDateOfCreation() {
	yield takeLatest(
		types.REQUEST_IMAGES_SUCCESS,
		createDateUpdater,
	)
}
