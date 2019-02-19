import i18n from 'i18next';
import React from 'react';

import Flex from 'common/components/Flex/Flex';

import ISteps from './CreateImageSelectedParts.d';

import Styles from './createImageSelectedParts.scss';

interface IProps {
	steps: ISteps;
	partsSelected: number;
}

const SelectedImageParts: React.FC<IProps> = ({steps, partsSelected}) => {
	const titles = (key: string) => (
		i18n.t(`CreateImage.SelectedParts.${key}`)
	);

	return (
		partsSelected ? (
			<Flex className={Styles.partsContainer}>
				{
					Object.keys(steps).map((step: string, index: number) => (
						steps[step] ? (
							<Flex
								key={index}
								className={Styles.part}
								alignItems='center'
								title={titles(step)}
							>
								{steps[step].icon ? (
									<img className={Styles.partImage} src={steps[step].icon} alt=''/>
								) : null}
								{steps[step].title}
							</Flex>
						) : null),
					)
				}
			</Flex>
		) : null
	);
};

export default SelectedImageParts;
