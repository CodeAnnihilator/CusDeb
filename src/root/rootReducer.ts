import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import entitiesReducer from 'common/reducers/entities'
import dashboardReducer from 'modules/Dashboard/reducers/dashboard'

const rootReducer = (history) => combineReducers({
  entities: entitiesReducer,
  dashboard: dashboardReducer,
  router: connectRouter(history)
})

export default rootReducer