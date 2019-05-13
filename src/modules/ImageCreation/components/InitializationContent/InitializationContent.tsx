import React from 'react';
import SelectContainer from '../../containers/SelectContainer';

import Flex from 'common/components/Flex/Flex';
import Slider from 'common/components/Slider/SliderContainer';
import StepsProgressBar from 'common/components/StepsProgressBar/StepsProgressBar';

import styles from './initializationContent.scss';

interface IProps {
	selectTypes: string[];
	selectedItems: number;
}

const InitializationContent: React.FC<IProps> = ({selectedItems, selectTypes}) => {
	const steps = [
		'Select brands',
		'Select target device',
		'Select distributives',
		'Select build types',
	];

	return (
		<div className={styles.stepsContainer}>
			<StepsProgressBar steps={steps} stepsComplete={selectedItems}/>
			<Flex
				justifyContent='center'
				style={{margin: '0px 20px', overflow: 'hidden'}}
			>
				<Slider
					slides={selectTypes.map((item, index) => (
						<Flex
							indent='medium'
							key={index}
							direction='column'
							alignItems='center'
							style={{marginTop: 25}}
						>
							<SelectContainer type={item} fade/>
						</Flex>
					))}
				/>
			</Flex>
		</div>
	);
};

export default InitializationContent;
