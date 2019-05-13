import cn from 'classnames';
import React, {MouseEvent, PureComponent} from 'react';

import {Trans} from 'react-i18next';
import {NavLink} from 'react-router-dom';

import Alert from 'common/components/Alert/Alert';
import Button from 'common/components/Button/Button';
import Flex from 'common/components/Flex/Flex';

import capitalize from 'utils/capitalize';

import styles from './initializationHeader.scss';

interface IProps {
	changeStep: (event: MouseEvent<HTMLButtonElement>, value: any) => void;
	step: string;
	alertTitleKey: string;
}

const stepsHash = {
	initialization: {
		prev: null,
		next: 1,
	},
	packagesList: {
		prev: 0,
		next: 2,
	},
	usersAndGroups: {
		prev: 1,
		next: 3,
	},
	configuration: {
		prev: 2,
		next: null,
	},
};

export default class InitializationHeader extends PureComponent<IProps> {
	public render() {
		const {changeStep, step, alertTitleKey} = this.props;

		return (
			<Flex
				direction='column'
				className={styles.headerWrapper}
			>
				<Flex alignItems='center' indent='large'>
					<Flex indent='medium' className={styles.stepTitle}>
						<Trans i18nKey={`ImageCreation.${capitalize(step)}Step`} />
					</Flex>
					{alertTitleKey
						? <Flex indent='medium'>
							<Alert type='warning'>
								<Trans i18nKey={`ImageCreation.Issues.${alertTitleKey}`} />
							</Alert>
						</Flex>
						: null}
				</Flex>
				<Flex className={styles.headerStepInfo} >
					<Trans i18nKey='ImageCreation.HeaderSubTitle' />
				</Flex>
				<Flex
					className={styles.headerButtonsWrapper}
					indent='large'
					alignItems='center'
				>
					<Flex>
						<Flex indent='large' alignItems='center'>
							{step !== 'initialization' && step !== 'configuration'
								? (
									<NavLink
										to='/terminal'
										className={styles.skipSteps}
									>
										<Trans i18nKey='ImageCreation.SkipSteps' />
									</NavLink>
								)
								: null}
						</Flex>
						<Flex indent='large'>
							{step !== 'initialization'
								? (
									<Flex indent='medium'>
										<Button
											width={140}
											onClick={changeStep}
											className={cn(styles.buttonPrev, styles.moveButton)}
											value={stepsHash[step].prev}
										>
											<span style={{textTransform: 'uppercase'}}>
												<Trans i18nKey='ImageCreation.PreviousStep' />
											</span>
										</Button>
									</Flex>
								)
								: null}
							{step !== 'configuration'
								? (
									<Flex>
										<Button
											width={140}
											onClick={changeStep}
											className={cn(styles.buttonNext, styles.moveButton)}
											value={stepsHash[step].next}
										>
											<span style={{textTransform: 'uppercase'}}>
												<Trans i18nKey='ImageCreation.NextStep' />
											</span>
										</Button>
									</Flex>
								)
								: null}
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		);
	}
}
