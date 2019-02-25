import React, {Component} from 'react';

import PackagesRoot from 'modules/Packages/PackagesRoot/components/PackagesRoot';
import CreateImageInitialization from './CreateImageInitialization';

import CreateImageInitializationHeaderContainer from '../containers/CreateImageInitializationHeaderContainer';
import CreateImageProgressBarContainer from '../containers/CreateImageProgressBarContainer';
import CreateImageSelectedParts from '../containers/CreateImageSelectedParts';

import Flex from 'common/components/Flex/Flex';

import styles from './CreateImageInitializationContent/createImageInitializationContent.scss';

interface IProps {
	step: string;
}

const importsHash = {
	initialization: <CreateImageInitialization />,
	packagesList: <PackagesRoot />,
};

export default class CreateImageRoot extends Component<IProps> {
	public static defaultProps = {
		step: 'initialization',
	};

	public render() {
		return (
			<Flex direction='column' grow={1} className={styles.stepsContainer}>
				<CreateImageProgressBarContainer />
				<CreateImageInitializationHeaderContainer />
				<CreateImageSelectedParts />
				{importsHash[this.props.step]}
			</Flex>
		);
	}
}
