import {connectRouter} from 'connected-react-router';
import {combineReducers} from 'redux';

import entitiesReducer from 'common/reducers/entities';
import createImageInitializationReducer from 'modules/CreateImage/reducers/createImageInitializationReducer';
import dashboardReducer from 'modules/Dashboard/reducers/dashboard';

const rootReducer = (history: any) => combineReducers({
	entities: entitiesReducer,
	dashboard: dashboardReducer,
	createImage: createImageInitializationReducer,
	router: connectRouter(history as any),
});

export default rootReducer;
