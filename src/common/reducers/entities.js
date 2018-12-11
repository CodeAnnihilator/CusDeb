import types from '../constants/entities'

const initialState = {
  lounches: [],
  rockets: []
}

const entitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_LOUNCHES_SUCCESS:
      return { ...state, lounches: action.payload }
    default:
      return state
  }
}

export default entitiesReducer