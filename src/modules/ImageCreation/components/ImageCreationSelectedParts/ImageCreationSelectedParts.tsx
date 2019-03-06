import i18n from 'i18next';
import React from 'react';

import Flex from 'common/components/Flex/Flex';

import ISteps from './ImageCreationSelectedParts.d';

import Styles from './imageCreationSelectedParts.scss';

interface IProps {
	steps: ISteps;
	partsSelected: number;
}

const SelectedImageParts: React.FC<IProps> = ({steps}) => {
	const titles = (key: string) => (
		i18n.t(`ImageCreation.SelectedParts.${key}`)
	);

	return (
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
	);
};

export default SelectedImageParts;
