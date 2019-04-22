import React, {PureComponent} from 'react';
import {Trans} from 'react-i18next';

import capitalize from 'utils/capitalize';

import Flex from 'common/components/Flex/Flex';
import StepsProgressBar from 'common/components/StepsProgressBar/StepsProgressBar';

import Checked from 'assets/images/Checked.svg';

import {COLORS} from 'common/constants/entities';
import styles from './imageCreationProgressBarComponent.scss';

interface IProps {
	step: number;
	steps: [{
		text: string;
		image: any;
	}];
}

export default class ImageCreationProgressBarComponent extends PureComponent<IProps> {
	public barTitles = (steps: any) => (
		steps.map((Step: {text: string; image: any}, index: number) => (
			<Flex
				key={index}
				justifyContent='center'
				alignItems='center'
				style={{marginBottom: 5}}
			>
				<Step.image
					fill={this.props.step === index ? COLORS.stepInProcess : '#748286'}
					className={styles.stepTitleIcon}
				/>
				<Trans i18nKey={`ImageCreation.CreationProcessBar.${capitalize(Step.text)}`}/>
			</Flex>
		))
	)

	public render() {
		const {step, steps} = this.props;

		return (
			<StepsProgressBar
				steps={steps}
				icon={Checked}
				stepsComplete={step}
				style={styles}
				titles={this.barTitles(steps)}
			/>
		);
	}
}
