import {types} from '../constants/entities'
import {createAction} from 'redux-actions';

export const requestImages = () => ({ type: types.REQUEST_IMAGES })

export const requestImagesSuccess = createAction(
  types.REQUEST_IMAGES_SUCCESS,
  data => data,
)

export const updateImage = createAction(
  types.UPDATE_IMAGE,
  changes => ({changes}),
)

export const requestImagesError = createAction(
  types.REQUEST_IMAGES_ERROR,
  error => error,
)