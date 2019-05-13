import {connectRouter} from 'connected-react-router';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import entitiesReducer from 'common/reducers/entities';
import interfaceReducer from 'common/reducers/interface';
import userReducer from 'common/reducers/user';
import authReducer from 'modules/Auth/reducer/authReducer';
import dashboardReducer from 'modules/Dashboard/reducers/dashboard';
// tslint:disable-next-line
import usersAndGroupsReducer from 'modules/ImageCreation/components/UsersAndGroups/UsersAndGroupsTable/reducers/usersAndGroupsReducer';
import imageCreationInitializationReducer from 'modules/ImageCreation/reducers/imageCreationInitializationReducer';
import packagesStepReducer from 'modules/Packages/PackagesTable/reducers/packagesStepReducer';
import registrationReducer from 'modules/Registration/CustomerRegistration/reducer/registrationReducer';

const createRootReducer = (history: any) => combineReducers({
	entities: entitiesReducer,
	interface: interfaceReducer,
	user: userReducer,
	dashboard: dashboardReducer,
	imageCreation: imageCreationInitializationReducer,
	packagesStep: packagesStepReducer,
	usersAndGroups: usersAndGroupsReducer,
	router: connectRouter(history as any),
	form: formReducer.plugin({
		auth: authReducer,
		registration: registrationReducer,
	} as any),
});

export default createRootReducer;
