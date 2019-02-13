import React from 'react';
import {Trans} from 'react-i18next';
import {NavLink, Route} from 'react-router-dom';

import Flex from 'common/components/Flex/Flex';

import {COLORS} from 'common/constants/entities';
import {socialNetworks} from 'modules/RegAuth/common/constants/constants';

import SuppliesIcon from 'assets/images/SuppliesIcon';

import RegistrationCreateNewUserContainer from '../containers/RegistrationCreateNewUserContainer';

import silentClasses from 'styles/_silent_classes.scss';
import styles from './registration.scss';

const ICON_SIZE = 24;

const Registration = (props: any) => (
		<>
		<Route
			exact
			path={props.match.path}
			render={() => (
				<Flex
					className={styles.registrationWrapper}
				>
				<Flex
					alignItems='center'
					direction='column'
					className={styles.registration}
				>
					<Flex
						direction='column'
						alignItems='center'
						className={styles.header}
					>
						<Flex indent='medium'>
							<SuppliesIcon className={styles.cusdebIcon} fill={COLORS.green800} />
						</Flex>
						<Flex indent='medium' className={silentClasses.toUpperCase}>
							<Trans i18nKey='RegAuth.BecomeMember' />
						</Flex>
						<Flex indent='medium' className={styles.registrationAlreadyHaveAccount}>
							<Flex indent='small'>
								<Trans i18nKey='RegAuth.AlreadyHaveAccount' />?
							</Flex>
							<Flex indent='small'>
								<NavLink to='/login'><Trans i18nKey='RegAuth.SignIn' /></NavLink>
							</Flex>
						</Flex>
					</Flex>
					<Flex
						indent='large'
						justifyContent='center'
						alignItems='center'
						width='100%'
						className={styles.registrationCreateNewWrapper}
					>
						<Flex
							className={styles.registrationButton}
						>
							<NavLink
								to='/registration/create'
								className={styles.registrationNavlink}
							>
								<Trans i18nKey='RegAuth.CreateAccount' />
							</NavLink>
						</Flex>
					</Flex>
					<Flex className={styles.orSignUpWith}>
						<Trans i18nKey='RegAuth.OrSignUpWith' />:
					</Flex>
					<Flex
						width='100%'
						indent='large'
						direction='column'
						alignItems='center'
					>
						{socialNetworks(ICON_SIZE).map(({icon, title, id}) => (
							<Flex
								indent='medium'
								justifyContent='center'
								alignItems='center'
								className={styles.registrationButton}
								key={id}
							>
								<Flex indent='small' className={styles.registrationButton_icon}>
									{icon}
								</Flex>
								<Flex indent='small'>
									<Trans
										i18nKey='RegAuth.SingUpWith'
										values={{title}}
									/>
								</Flex>
							</Flex>
						))}
					</Flex>
				</Flex>
				</Flex>
			)}
		/>
		<Route path={`${props.match.path}/:topicId`} render={() => <RegistrationCreateNewUserContainer />} />
		</>
	);

export default Registration;
