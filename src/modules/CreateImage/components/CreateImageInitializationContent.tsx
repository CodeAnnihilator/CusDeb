
import React, {Component} from 'react';
import CreateImageSelectContainer from '../containers/CreateImageSelectContainer';

import Flex from 'common/components/Flex/Flex';

interface IProps {
	selectTypes: string[];
}

export default class CreateImageInitializationContent extends Component<IProps> {
	public render() {
		return (
			<Flex
				justifyContent='space-between'
				wrap='wrap'
				style={{margin: '0px 40px'}}
			>
				{this.props.selectTypes.map((item, index) => (
						<Flex
							indent='medium'
							key={index}
							direction='column'
							alignItems='center'
							style={{marginTop: 40}}
						>
							<CreateImageSelectContainer type={item} />
						</Flex>
				))}
			</Flex>
		);
	}
}
