import {connectRouter} from 'connected-react-router';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import entitiesReducer from 'common/reducers/entities';
import userReduces from 'common/reducers/user';
import authReducer from 'modules/Auth/reducer/authReducer';
import dashboardReducer from 'modules/Dashboard/reducers/dashboard';
import imageCreationInitializationReducer from 'modules/ImageCreation/reducers/imageCreationInitializationReducer';
import packagesStepReducer from 'modules/Packages/PackagesTable/reducers/packagesStepReducer';
import registrationReducer from 'modules/Registration/CustomerRegistration/reducer/registrationReducer';

const rootReducer = (history: any) => combineReducers({
	entities: entitiesReducer,
	user: userReduces,
	dashboard: dashboardReducer,
	imageCreation: imageCreationInitializationReducer,
	packagesStep: packagesStepReducer,
	router: connectRouter(history as any),
	form: formReducer.plugin({
		auth: authReducer,
		registration: registrationReducer,
	}),
});

export default rootReducer;
