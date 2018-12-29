import { createSelector } from 'reselect'

import { getImages } from 'common/selectors/entities'

export const getActiveImageId = state => state.getIn(['dashboard', 'activeImageId'])

export const getActiveImage = createSelector(
  [getImages, getActiveImageId],
  (images, activeImageId) => {
    return images.find(image => image.get('name') === activeImageId)
  }
)