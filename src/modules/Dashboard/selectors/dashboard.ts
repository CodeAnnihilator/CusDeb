import {createSelector} from 'reselect';

import {getImages} from 'common/selectors/entities';

export const getActiveImageId = state => (state.dashboard || {}).activeImageId;

export const getActiveImage = createSelector(
	[getImages, getActiveImageId],
	(images, activeImageId) => images.find(image => image.name === activeImageId),
);
