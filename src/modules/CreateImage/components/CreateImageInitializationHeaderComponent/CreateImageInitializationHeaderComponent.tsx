import React, {MouseEvent, PureComponent} from 'react';

import {Trans} from 'react-i18next';
import {NavLink} from 'react-router-dom';

import Alert from 'common/components/Alert/Alert';
import Button from 'common/components/Button/Button';
import Flex from 'common/components/Flex/Flex';

import capitalize from 'utils/capitalize';

import styles from './createImageInitializationHeaderComponent.scss';

interface IProps {
	changeStep: (event: MouseEvent<HTMLButtonElement>, value: any) => void;
	step: string;
	alertTitleKey: string;
}

const stepsHash = {
	initialization: {
		prev: null,
		next: 'packagesList',
	},
	packagesList: {
		prev: 'initialization',
		next: 'usersAndGroups',
	},
	usersAndGroups: {
		prev: 'packagesList',
		next: 'configuration',
	},
	configuration: {
		prev: 'usersAndGroups',
		next: null,
	},
};

export default class CreateImageInitializationHeaderComponent extends PureComponent<IProps> {
	public render() {
		const {changeStep, step, alertTitleKey} = this.props;

		return (
			<Flex
				direction='column'
				className={styles.headerWrapper}
			>
				<Flex alignItems='center' indent='large'>
					<Flex indent='medium'>
						<Trans i18nKey={`CreateImage.${capitalize(step)}Step`} />
					</Flex>
					{alertTitleKey
						? <Flex indent='medium'>
							<Alert type='warning'>
								<Trans i18nKey={`CreateImage.Issues.${alertTitleKey}`} />
							</Alert>
						</Flex>
						: null}
				</Flex>
				<Flex className={styles.headerStepInfo} indent='large' >
					<Trans i18nKey='CreateImage.HeaderSubTitle' />
				</Flex>
				<Flex indent='large' alignItems='center'>
					<Flex>
						<Flex indent='large'>
							{step !== 'initialization'
								? (
									<Flex indent='medium'>
										<Button
											width={140}
											onClick={changeStep}
											className={styles.buttonPrev}
											value={stepsHash[step].prev}
										>
											<span style={{textTransform: 'uppercase'}}>
												<Trans i18nKey='CreateImage.PreviousStep' />
											</span>
										</Button>
									</Flex>
								)
								: null}
							{step !== 'configuration'
								? (
									<Flex indent='medium'>
										<Button
											width={140}
											onClick={changeStep}
											className={styles.buttonNext}
											value={stepsHash[step].next}
										>
											<span style={{textTransform: 'uppercase'}}>
												<Trans i18nKey='CreateImage.NextStep' />
											</span>
										</Button>
									</Flex>
								)
								: null}
						</Flex>
						<Flex indent='large'>
							{step !== 'initialization' && step !== 'configuration'
								? (
									<NavLink
										to='/terminal'
										className={styles.skipSteps}
									>
										<Trans i18nKey='CreateImage.SkipSteps' />
									</NavLink>
								)
								: null}
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		);
	}
}
