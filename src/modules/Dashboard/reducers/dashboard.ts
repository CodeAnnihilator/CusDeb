import { fromJS } from 'immutable'

import types from '../constants/dashboard'

const initialState = fromJS({
  activeImageId: null,
  isPending: true
})

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_IMAGE:
      return state
        .set('activeImageId', action.payload)
        .set('isPending', false)
    default:
      return state
  }
}