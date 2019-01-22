import {connectRouter} from 'connected-react-router';
import {combineReducers} from 'redux';

import entitiesReducer from 'common/reducers/entities';
import dashboardReducer from 'modules/Dashboard/reducers/dashboard';

const rootReducer = (history: any) => combineReducers({
	entities: entitiesReducer,
	dashboard: dashboardReducer,
	router: connectRouter(history as any),
});

export default rootReducer;
