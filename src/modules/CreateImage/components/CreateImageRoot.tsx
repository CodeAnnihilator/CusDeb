import React, {Component} from 'react';
import CreateImageRootContainer from '../containers/CreateImageRootContainer';

interface IProps {
	step: string;
}

const importsHash = {
	initialization: <CreateImageRootContainer />,
};

export default class CreateImageRoot extends Component<IProps> {
	public static defaultProps = {
		step: 'initialization',
	};

	public render() {
		return (
			importsHash[this.props.step]
		);
	}
}
