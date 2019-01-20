import {createSelector} from 'reselect';

export const getImages = state => state.entities.images;
export const getRoute = state => state.router.pathname;

export const getBuildingImages = createSelector(
    getImages,
    images => images.filter(item => item.build.status === 'building')
);
