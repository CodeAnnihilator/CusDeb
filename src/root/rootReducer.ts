import {connectRouter} from 'connected-react-router';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import entitiesReducer from 'common/reducers/entities';
import createImageInitializationReducer from 'modules/CreateImage/reducers/createImageInitializationReducer';
import dashboardReducer from 'modules/Dashboard/reducers/dashboard';
import AuthReducer from 'modules/RegAuth/Auth/reducer/AuthReducer';
import RegistrationReducer from 'modules/RegAuth/Registration/reducer/registrationReducer';

const rootReducer = (history: any) => combineReducers({
	entities: entitiesReducer,
	dashboard: dashboardReducer,
	createImage: createImageInitializationReducer,
	router: connectRouter(history as any),
	form: formReducer.plugin({
		auth: AuthReducer,
		registration: RegistrationReducer,
	}),
});

export default rootReducer;
