import { fromJS, List } from 'immutable'
import types from '../constants/entities'

const initialState = fromJS({
  images: List()
})

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_IMAGES_SUCCESS:
      return state
        .set('images', fromJS(action.payload))
    default:
      return state
  }
}