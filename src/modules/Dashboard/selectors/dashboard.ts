import {createSelector} from 'reselect';

import {getImages} from 'common/selectors/entities';

export const getActiveImageId = (state: any) => (state.dashboard || {}).activeImageId;
export const getActiveImagesStatus = (state: any) => state.dashboard.activeImagesStatus;

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
