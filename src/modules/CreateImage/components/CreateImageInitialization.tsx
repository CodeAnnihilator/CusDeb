import React from 'react';

import CreateImageInitializationContentContainer from '../containers/CreateImageInitializationContentContainer';
import CreateImageInitializationHeaderContainer from '../containers/CreateImageInitializationHeaderContainer';
import CreateImageProgressBarContainer from '../containers/CreateImageProgressBarContainer';

import Flex from 'common/components/Flex/Flex';

const CreateImageInitialization: React.FC = () => (
	<div style={{width: '100%'}}>
		<CreateImageProgressBarContainer />
		<CreateImageInitializationHeaderContainer />
		<Flex
			direction='column'
			alignItems='center'
		>
			<CreateImageInitializationContentContainer />
		</Flex>
	</div>
);

export default CreateImageInitialization;
