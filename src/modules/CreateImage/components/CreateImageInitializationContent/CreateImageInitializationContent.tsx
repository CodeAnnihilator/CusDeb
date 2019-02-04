import React from 'react';
import CreateImageSelectContainer from '../../containers/CreateImageSelectContainer';

import Flex from 'common/components/Flex/Flex';
import StepsProgressBar from 'common/components/StepsProgressBar/StepsProgressBar';

import Styles from './CreateImageInitializationContent.scss';

interface IProps {
	selectTypes: string[];
	selectedItems: number;
}

const InitializationContent: React.SFC<IProps> = ({selectedItems, selectTypes}) => {
	const steps = [
		'Select brands',
		'Select target device',
		'Select distributives',
		'Select build types',
	];

	return (
		<div className={Styles.stepsContainer}>
			<StepsProgressBar steps={steps} stepsComplete={selectedItems}/>
				<Flex
					justifyContent='center'
					wrap='wrap'
					style={{margin: '0px 40px'}}
				>
					{selectTypes.map((item, index) => (
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
		</div>
	);
};

export default InitializationContent;
