import React, {PureComponent} from 'react';

import Flex from 'common/components/Flex/Flex';

import PackagesTableContainer from 'modules/Packages/PackagesTable/containers/PackagesTableContainer';

export default class PackagesRoot extends PureComponent {
	//tslint:disable
	public render() {
		return (
			<Flex>
				<PackagesTableContainer />
			</Flex>
		);
	}
}
