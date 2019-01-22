import {createSelector} from 'reselect';

export const getImages = (state: any) => state.entities.images;
export const getRoute = (state: any) => state.router.pathname;

export const getBuildingImages = createSelector(
	getImages,
	images => images.filter((item: any) => item.build.status === 'building'),
);
