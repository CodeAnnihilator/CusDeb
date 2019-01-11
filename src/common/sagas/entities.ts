import {takeLatest, put, call, select, spawn} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {generateDummyImages} from 'common/seed/images'
import {requestImagesSuccess, updateImage} from 'common/actions/entities'
import {types} from 'common/constants/entities'
import { getBuildingImages } from 'common/selectors/entities';
import { fromJS, merge } from 'immutable';

function* requestImagesSaga() {
	const data = generateDummyImages(30)
	try {
		yield call(delay, 2000)
		yield put(requestImagesSuccess(data))
	} catch (error) {
		console.log(error)
	}
}

function* taskCreator(image) {
	const [activeStep, totalSteps] = ['activeStep', 'totalSteps'].map(item => image.getIn(['build', item]))
	
	for (let i = activeStep; i <= totalSteps; i++) {
		yield call(delay, Math.round(Math.random() * 5) * 1000);
		let status = '';
		const hasBulidFailded = Math.round(Math.random() * 100) <= 3;
		if (hasBulidFailded) status = 'error';
		else if (i < totalSteps && !hasBulidFailded) status = 'building';
		else if (i === totalSteps && !hasBulidFailded) {
			yield put(updateImage(
				merge(image, fromJS({
					build: {
						status: 'building',
						activeStep: totalSteps,
						totalSteps,
					}
				}))
			))

			yield call(delay, 2000);
			
			status = 'ready';
		}

		yield put(updateImage(
			merge(image, fromJS({
				build: {
					status,
					activeStep: i,
					totalSteps,
				}
			}))
		))

		if (status === 'error') break;
	}
}

function* watchImagesStatusesSaga() {
	const data = yield select(getBuildingImages);

	for (let i = 0; i < data.size; i++) {
		yield spawn(taskCreator, data.get(i));
	}
}

export default function* watchEntities() {
	yield takeLatest(types.REQUEST_IMAGES, requestImagesSaga);
	yield takeLatest(types.REQUEST_IMAGES_SUCCESS, watchImagesStatusesSaga);
}
