import types from '../constants/dashboard'

export const selectImage = id => ({
  type: types.SELECT_IMAGE,
  payload: id
})