import types from '../constants/entities'

export const requestLounchesSuccess = data => ({
  type: types.REQUEST_LOUNCHES_SUCCESS,
  payload: data
})