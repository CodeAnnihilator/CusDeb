import {createSelector} from 'reselect';

import {getImages} from 'common/selectors/entities';

export const getActiveImageId = (state: any) => (state.dashboard || {}).activeImageId;
export const getActiveImagesStatus = (state: any) => state.dashboard.activeImagesStatus;

export const getImagesTextFilter = (state: any) => state.dashboard.displaying.textFilter;

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

export const getFilteredImages = createSelector(
	getImagesByStatus,
	getImagesTextFilter,
	(images, substr) => images.filter((image: any) => (
		image.notes.toLowerCase().includes(substr.toLowerCase())
		|| image.distro.full_name.toLowerCase().includes(substr.toLowerCase())
		|| image.targetdevice.title.toLowerCase().includes(substr.toLowerCase())
	)),
);
