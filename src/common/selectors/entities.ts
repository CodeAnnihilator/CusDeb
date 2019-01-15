import {createSelector} from 'reselect';

export const getImages = state => state.entities.images;

export const getBuildingImages = createSelector(
    getImages,
    images => images.filter(item => item.build.status === 'building')
);
