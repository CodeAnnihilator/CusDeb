import React from 'react';
import {Route} from 'react-router-dom';

import AuthLayout from './AuthLayout';

const AuthLayoutRoute = ({component: Component, ...rest}) => {
	const ComponentToRender = matchProps => (
		<AuthLayout>
			<Component {...matchProps} />
		</AuthLayout>
	);

	return (
		<Route
			{...rest}
			render={ComponentToRender}
		/>
	);
};

export default AuthLayoutRoute;
