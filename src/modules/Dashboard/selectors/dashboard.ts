import {createSelector} from 'reselect';

import findInText from 'utils/findInText';

import {RootState} from 'root/index';

import {getImages} from 'common/selectors/entities';

export const getActiveImageId = (state: RootState) => (state.dashboard || {}).activeImageId;
export const getActiveImagesStatus = (state: RootState) => state.dashboard.activeImagesStatus;
export const getImagesTextFilter = (state: RootState) => state.dashboard.imagesTextFilter;

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

export const getImagesWithFilteredText = createSelector(
	[getImagesByStatus, getImagesTextFilter],
	(images, filter) => (
		images.filter((image: any) => (
			image.targetdevice.title.toLowerCase()).includes(filter.toLowerCase())
			|| image.distro.full_name.toLowerCase().includes(filter.toLowerCase())
			|| image.notes.toLowerCase().includes(filter.toLowerCase()),
		).map((image: any) => {
			image.targetdevice.title_filtered = findInText(image.targetdevice.title, filter);
			image.distro.full_name_filtered = findInText(image.distro.full_name, filter);
			image.notes_filtered = findInText(image.notes, filter);

			return image;
		})
	),
);
