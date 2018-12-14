import types from '../constants/entities'


export const requestLounches = () => ({ type: types.REQUEST_LOUNCHES })

export const requestLounchesSuccess = data => ({
  type: types.REQUEST_LOUNCHES_SUCCESS,
  payload: data
})

export const requestLounchesError = error => ({
  type: types.REQUEST_LOUNCHES_SUCCESS,
  payload: error
})