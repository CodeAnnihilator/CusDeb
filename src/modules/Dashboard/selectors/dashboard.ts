import {createSelector} from 'reselect';

import {RootState} from 'root/index';

import {getImages} from 'common/selectors/entities';

export const getActiveImageId = (state: RootState) => (state.dashboard || {}).activeImageId;
export const getActiveImagesStatus = (state: RootState) => state.dashboard.activeImagesStatus;

export const getActiveImage = createSelector(
	[getImages, getActiveImageId],
	(images, activeImageId) => images.find((image: any) => image.name === activeImageId),
);

export const getImagesByStatus = createSelector(
	[getImages, getActiveImagesStatus],
	(images, activeImagesStatus) => (
		activeImagesStatus && activeImagesStatus !== 'all'
		? images.filter((image: any) => image.build.status === activeImagesStatus)
		: images),
);
