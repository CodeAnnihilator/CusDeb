import {connectRouter} from 'connected-react-router';
import {History} from 'history';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import entitiesReducer from 'common/reducers/entities';
import interfaceReducer from 'common/reducers/interface';
import userReducer from 'common/reducers/user';
import authReducer from 'modules/Auth/reducer/authReducer';
import dashboardReducer from 'modules/Dashboard/reducers/dashboard';
import imageCreationInitializationReducer from 'modules/ImageCreation/reducers/imageCreationInitializationReducer';
import packagesStepReducer from 'modules/Packages/PackagesTable/reducers/packagesStepReducer';
import registrationReducer from 'modules/Registration/CustomerRegistration/reducer/registrationReducer';

const rootReducer = (history: History) => combineReducers({
	entities: entitiesReducer,
	interface: interfaceReducer,
	user: userReducer,
	dashboard: dashboardReducer,
	imageCreation: imageCreationInitializationReducer,
	packagesStep: packagesStepReducer,
	router: connectRouter(history),
	form: formReducer.plugin({
		auth: authReducer,
		registration: registrationReducer,
	}),
});

export default rootReducer;
