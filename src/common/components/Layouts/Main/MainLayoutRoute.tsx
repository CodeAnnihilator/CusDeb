import React from 'react';
import {Route} from 'react-router-dom';

import MainLayout from './MainLayout';

const MainLayoutRoute = ({component: Component, ...rest}) => {
	const ComponentToRender = matchProps => (
		<MainLayout>
			<Component {...matchProps} />
		</MainLayout>
	);

	return (
		<Route
			{...rest}
			render={ComponentToRender}
		/>
	);
};

export default MainLayoutRoute;
