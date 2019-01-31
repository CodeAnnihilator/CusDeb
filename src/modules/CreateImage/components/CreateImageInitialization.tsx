
import React from 'react';
import CreateImageInitializationHeaderContainer from '../containers/CreateImageInitializationHeaderContainer';
import CreateImageInitializationContent from './CreateImageInitializationContent';

import Flex from 'common/components/Flex/Flex';

const CreateImageInitialization: React.SFC = () => (
	<div style={{width: '100%'}}>
		<CreateImageInitializationHeaderContainer />
		<Flex
			direction='column'
			alignItems='center'
		>
			<CreateImageInitializationContent />
		</Flex>
	</div>
);

export default CreateImageInitialization;
