import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import entitiesReducer from 'common/reducers/entities'

const rootReducer = (history) => combineReducers({
  entities: entitiesReducer,
  router: connectRouter(history)
})

export default rootReducer