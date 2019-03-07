import React from 'react';

import ImageCreationInitializationContentContainer from '../containers/ImageCreationInitializationContentContainer';

import Flex from 'common/components/Flex/Flex';

const ImageCreationInitialization: React.FC = () => (
	<div style={{width: '100%'}}>
		<Flex
			direction='column'
			alignItems='center'
		>
			<ImageCreationInitializationContentContainer />
		</Flex>
	</div>
);

export default ImageCreationInitialization;
