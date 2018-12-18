import { fromJS, List } from 'immutable'
import types from '../constants/entities'

const initialState = fromJS({
  lounches: List(),
  rockets: List()
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