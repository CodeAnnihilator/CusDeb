import React, {PureComponent} from 'react';
import {Trans} from 'react-i18next';

import capitalize from 'utils/capitalize';

import Flex from 'common/components/Flex/Flex';
import StepsProgressBar from 'common/components/StepsProgressBar/StepsProgressBar';

import Checked from 'assets/images/Checked.svg';

import {COLORS} from 'common/constants/entities';
import styles from './createImageProgressBarComponent.scss';

interface IProps {
	step: number;
	steps: [{
		text: string;
		image: any;
	}];
}

export default class CreateImageProgressBarComponent extends PureComponent<IProps> {
	public barTitles = (steps: any) => (
		[...steps.map((step: {text: string; image: any}, index: number) => (
			<Flex key={index} justifyContent='center' alignItems='center'>
				<step.image
					fill={this.props.step === index ? '#5B9FD2' : '#748286'}
					className={styles.stepTitleIcon}
				/>
				<Trans i18nKey={`CreateImage.CreationProcessBar.${capitalize(step.text)}`}/>
			</Flex>
		))]
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
