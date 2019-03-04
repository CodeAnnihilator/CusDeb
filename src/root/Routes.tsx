import * as React from 'react';
import {hot} from 'react-hot-loader';
import {withNamespaces} from 'react-i18next';
import {Redirect, Route, Switch} from 'react-router-dom';

import CommonLayout from 'common/components/Layouts/Common/CommonLayout';
import ProtectedLayout from 'common/components/Layouts/Protected/ProtectedLayoutContainer';

import AuthContainer from 'modules/Auth/containers/AuthContainer';
import Dashboard from 'modules/Dashboard/containers/Dashboard';
import HomeContainer from 'modules/Home/containers/HomeContainer';
// tslint:disable-next-line: max-line-length
import ServicesRegistrationContainer from 'modules/Registration/ServicesRegistration/containers/ServicesRegistrationContainer';

import ImageCreationRootContainer from 'modules/ImageCreation/containers/ImageCreationRootContainer';

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
						<Route path={`${url}/create`} component={ImageCreationRootContainer} />
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
						<Route path='/registration' component={ServicesRegistrationContainer} />
						<Route path='/blog' component={() => <div><h2>/blog route</h2></div>} />
						<Route path='/pricing' component={() => <h2>/pricing route</h2>} />
						<Route render={() => <div>Oops...</div>} />
					</Switch>
				</CommonLayout>
			)}
		/>
	</Switch>
);

export default hot(module)(withNamespaces('translation')(Routes));
