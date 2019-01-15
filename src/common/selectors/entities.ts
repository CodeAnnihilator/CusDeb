import {createSelector} from 'reselect';

export const getImages = state => state.getIn(['entities', 'images']);

export const getBuildingImages = createSelector(
    getImages,
    images => images.filter(item => item.getIn(['build','status']) === 'building')
);
