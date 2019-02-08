import {delay} from 'redux-saga';
import {call, put, select, spawn, takeLatest} from 'redux-saga/effects';

import {requestImagesSuccess, updateImage} from 'common/actions/entities';
import {types} from 'common/constants/entities';
import {generateDummyImages} from 'common/seed/images';
import {getBuildingImages} from 'common/selectors/entities';

function* requestImagesSaga() {
	const data = generateDummyImages(5);
	try {
		yield call(delay, 2000);
		yield put(requestImagesSuccess(data));
	} catch (error) {
		console.log(error);
	}
}

function* taskCreator(image: any) { // todo -> to d.ts file
	const [activeStep, totalSteps] = ['activeStep', 'totalSteps'].map(item => image.build[item]);
	for (let i = activeStep; i <= totalSteps; i++) {
		yield call(delay, Math.round(Math.random() * 5) * 1000);
		let status = '';
		const hasBulidFailded = Math.round(Math.random() * 100) <= 3;
		if (hasBulidFailded) status = 'build_error';
		else if (i < totalSteps && !hasBulidFailded) status = 'building';
		else if (i === totalSteps && !hasBulidFailded) {
			yield put(updateImage({
				...image,
				...{
					build: {
						status: 'building',
						activeStep: totalSteps,
						totalSteps,
					},
				},
			}));

			yield call(delay, 2000);
			status = 'build_ready';
		}

		yield put(updateImage({
			...image,
			...{
				build: {
					status,
					activeStep: i,
					totalSteps,
				},
			}}));

		if (status === 'build_error') break;
	}
}

function* watchImagesStatusesSaga() {
	const data = yield select(getBuildingImages);

	for (const image of data) {
		yield spawn(taskCreator, image);
	}
}

export default function* watchEntities() {
	yield takeLatest(types.REQUEST_IMAGES, requestImagesSaga);
	yield takeLatest(types.REQUEST_IMAGES_SUCCESS, watchImagesStatusesSaga);
}
