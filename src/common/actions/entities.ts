import types from '../constants/entities'


export const requestImages = () => ({ type: types.REQUEST_IMAGES })

export const requestImagesSuccess = data => ({
  type: types.REQUEST_IMAGES_SUCCESS,
  payload: data
})

export const requestImagesError = error => ({
  type: types.REQUEST_IMAGES_ERROR,
  payload: error
})