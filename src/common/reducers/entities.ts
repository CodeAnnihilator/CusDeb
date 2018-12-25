import { fromJS } from 'immutable'
import types from '../constants/entities'

import { generateDummyImages } from './dummyData'

const initialState = fromJS({
  images: generateDummyImages(10)
})

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_LOUNCHES_SUCCESS:
      return state
        .set('lounches', fromJS(action.payload))
    default:
      return state
  }
}