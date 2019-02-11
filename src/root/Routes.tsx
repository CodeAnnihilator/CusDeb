import * as React from 'react';
import {hot} from 'react-hot-loader';
import {withNamespaces} from 'react-i18next';
import {Switch} from 'react-router-dom';

import Dashboard from 'modules/Dashboard/containers/Dashboard';

import AuthLayoutRoute from 'common/components/Layouts/Auth/AuthLayoutRoute';
import MainLayoutRoute from 'common/components/Layouts/Main/MainLayoutRoute';
import CreateImageInitialization from 'modules/CreateImage/components/CreateImageInitialization';
import AuthContainer from 'modules/RegAuth/Auth/containers/AuthContainer';
import HomeContainer from 'modules/RegAuth/Home/containers/HomeContainer';
import RegistrationContainer from 'modules/RegAuth/Registration/containers/RegistrationContainer';

const Routes = () => (
	<div>
		<Switch>
			<AuthLayoutRoute path='/home' component={HomeContainer} />
			<AuthLayoutRoute path='/login' component={AuthContainer} />
			<AuthLayoutRoute path='/registration' component={RegistrationContainer} />
			<AuthLayoutRoute path='/plans' component={() => <div><h2>Hello from /plans route</h2></div>} />
			<AuthLayoutRoute path='/features' component={() => <div><h2>Hello from /features route</h2></div>} />
			<MainLayoutRoute path='/dashboard' component={Dashboard} />
			<MainLayoutRoute path='/docs' component={() => <div><h2>Hello from /docs route</h2></div>} />
			<MainLayoutRoute path='/blog' component={() => <div><h2>Hello from /blog route</h2></div>} />
			<MainLayoutRoute path='/create' component={CreateImageInitialization} />
		</Switch>
	</div>
);

export default hot(module)(withNamespaces('translation')(Routes));
