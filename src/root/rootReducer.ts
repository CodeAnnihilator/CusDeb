import { combineReducers } from 'redux-immutable'
import { connectRouter } from 'connected-react-router/immutable'

import entitiesReducer from 'common/reducers/entities'

const rootReducer = (history) => combineReducers({
  entities: entitiesReducer,
  router: connectRouter(history)
})

export default rootReducer