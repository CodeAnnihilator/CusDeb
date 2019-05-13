import React, {Component} from 'react';

import InitializationHeaderContainer from '../containers/InitializationHeaderContainer';
import ProgressBarContainer from '../containers/ProgressBarContainer';
import SelectedParts from '../containers/SelectedParts';
import UsersAndGroups from '../Containers/UsersAndGroupsContainer';

import PackagesRoot from 'modules/Packages/PackagesRoot/components/PackagesRoot';
import Initialization from './Initialization';

import Flex from 'common/components/Flex/Flex';

import styles from './InitializationContent/initializationContent.scss';

interface IProps {
	step: string;
}

const importsHash = {
	initialization: <Initialization />,
	packagesList: <PackagesRoot />,
	usersAndGroups: <UsersAndGroups />,
};

export default class Root extends Component<IProps> {
	public static defaultProps = {
		step: 'initialization',
	};

	public render() {
		return (
			<Flex direction='column' grow={1} className={styles.stepsContainer}>
				<ProgressBarContainer />
				<InitializationHeaderContainer />
				<SelectedParts />
				{importsHash[this.props.step]}
			</Flex>
		);
	}
}
