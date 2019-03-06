import React, {Component} from 'react';

import PackagesRoot from 'modules/Packages/PackagesRoot/components/PackagesRoot';
import ImageCreationInitialization from './ImageCreationInitialization';

import ImageCreationInitializationHeaderContainer from '../containers/ImageCreationInitializationHeaderContainer';
import ImageCreationProgressBarContainer from '../containers/ImageCreationProgressBarContainer';
import ImageCreationSelectedParts from '../containers/ImageCreationSelectedParts';

import Flex from 'common/components/Flex/Flex';

import styles from './ImageCreationInitializationContent/imageCreationInitializationContent.scss';

interface IProps {
	step: string;
}

const importsHash = {
	initialization: <ImageCreationInitialization />,
	packagesList: <PackagesRoot />,
};

export default class ImageCreationRoot extends Component<IProps> {
	public static defaultProps = {
		step: 'initialization',
	};

	public render() {
		return (
			<Flex direction='column' grow={1} className={styles.stepsContainer}>
				<ImageCreationProgressBarContainer />
				<ImageCreationInitializationHeaderContainer />
				<ImageCreationSelectedParts />
				{importsHash[this.props.step]}
			</Flex>
		);
	}
}
