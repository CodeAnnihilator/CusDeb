import * as React from 'react';
import {hot} from 'react-hot-loader';
import {withNamespaces} from 'react-i18next';
import {Redirect, Route, Switch} from 'react-router-dom';

import CommonLayout from 'common/components/Layouts/Common/CommonLayout';
import ProtectedLayout from 'common/components/Layouts/Protected/ProtectedLayout';

import CreateImageInitialization from 'modules/CreateImage/components/CreateImageInitialization';
import Dashboard from 'modules/Dashboard/containers/Dashboard';
import AuthContainer from 'modules/RegAuth/Auth/containers/AuthContainer';
import HomeContainer from 'modules/RegAuth/Home/containers/HomeContainer';
import RegistrationContainer from 'modules/RegAuth/Registration/containers/RegistrationContainer';

const Routes = () => (
	<Switch>
		<Redirect exact from='/user' to='/user/dashboard' />
		<Route
			path='/user'
			render={({match: {url}}) => (
				<ProtectedLayout>
					<Switch>
						<Route path={`${url}/dashboard`} component={Dashboard} />
						<Route path={`${url}/docs`} component={() => <h2>/docs route</h2>} />
						<Route path={`${url}/blog`} component={() => <h2>/blog route</h2>} />
						<Route path={`${url}/create`} component={CreateImageInitialization} />
						<Route render={() => <div>Oops...</div>} />
					</Switch>
				</ProtectedLayout>
			)}
		/>
		<Route
			path='/'
			render={() => (
				<CommonLayout>
					<Switch>
						<Route exact path='/' component={HomeContainer} />
						<Route path='/login' render={() => <AuthContainer />} />
						<Route path='/registration' component={RegistrationContainer} />
						<Route path='/plans' component={() => <div><h2>/plans route</h2></div>} />
						<Route path='/features' component={() => <h2>/features route</h2>} />
						<Route render={() => <div>Oops...</div>} />
					</Switch>
				</CommonLayout>
			)}
		/>
	</Switch>
);

export default hot(module)(withNamespaces('translation')(Routes));
