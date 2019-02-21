import React from 'react';

import CreateImageInitializationContentContainer from '../containers/CreateImageInitializationContentContainer';

import Flex from 'common/components/Flex/Flex';

const CreateImageInitialization: React.FC = () => (
	<div style={{width: '100%'}}>
		<Flex
			direction='column'
			alignItems='center'
		>
			<CreateImageInitializationContentContainer />
		</Flex>
	</div>
);

export default CreateImageInitialization;
