import React from 'react';

import HeaderContainer from '../../Header/containers/HeaderContainer';

const AuthLayout = ({children}: any) => (
	<div>
		<HeaderContainer />
		<div>
			{children}
		</div>
	</div>
);

export default AuthLayout;
