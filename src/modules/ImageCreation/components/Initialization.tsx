import React from 'react';

import InitializationContentContainer from '../containers/InitializationContentContainer';

import Flex from 'common/components/Flex/Flex';

const Initialization: React.FC = () => (
	<div style={{width: '100%'}}>
		<Flex
			direction='column'
			alignItems='center'
		>
			<InitializationContentContainer />
		</Flex>
	</div>
);

export default Initialization;
