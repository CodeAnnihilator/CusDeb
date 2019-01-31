
import React, {PureComponent} from 'react';
import CreateImageSelectContainer from '../containers/CreateImageSelectContainer';

import Flex from 'common/components/Flex/Flex';

export default class CreateImageInitializationContent extends PureComponent {
	private readonly selectTypes = ['brands', 'targetDevices', 'distros', 'buildTypes'];

	public render() {
		return (
			<Flex
				justifyContent='space-between'
				wrap='wrap'
				style={{margin: '0px 40px'}}
			>
				{this.selectTypes.map((item, index) => (
					<Flex
						indent='medium'
						key={index}
						direction='column'
						alignItems='center'
						style={{marginTop: 40}}
					>
						<Flex indent='large'>{`Select ${item}`}</Flex>
						<Flex indent='large'>
							<CreateImageSelectContainer type={item} />
						</Flex>
					</Flex>
				))}
			</Flex>
		);
	}
}
