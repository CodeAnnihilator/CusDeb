import {createSelector} from 'reselect';

import {getImages} from 'common/selectors/entities';

export const getActiveImageId = (state: any) => (state.dashboard || {}).activeImageId;

export const getActiveImage = createSelector(
	[getImages, getActiveImageId],
	(images, activeImageId) => images.find((image: any) => image.name === activeImageId),
);
