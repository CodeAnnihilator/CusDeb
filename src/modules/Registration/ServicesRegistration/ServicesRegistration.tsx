import React from 'react';
import {Trans} from 'react-i18next';
import {NavLink, Route} from 'react-router-dom';

import Flex from 'common/components/Flex/Flex';

import {COLORS} from 'common/constants/entities';

import SuppliesIcon from 'assets/images/SuppliesIcon';

import CustomerRegistrationContainer from '../CustomerRegistration/containers/CustomerRegistrationContainer';

import silentClasses from 'styles/_silent_classes.scss';
import styles from './servicesRegistration.scss';

import GoogleIcon from 'assets/images/google-icon.svg';
import {FaGithub} from 'react-icons/fa';

interface IProps {
	match: any;
	isAuthenticated: boolean;
	history: any;
}

const ICON_SIZE = 24;

const ServicesRegistration: React.FC<IProps> = ({match}) => (
	<>
		<Route
			exact
			path={match.path}
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
							alignItems='center'
							className={styles.agreement}
							justifyContent='center'
							wrap='wrap'
						>
							<span><Trans i18nKey={'RegAuth.Agreement'}/></span>
							<a href='#'>
								<span><Trans i18nKey={'RegAuth.TermsAndServices'}/></span>
							</a>
							<span><Trans i18nKey={'common.and'}/></span>
							<a href='#'>
								<span><Trans i18nKey={'RegAuth.PrivacyPolicy'}/></span>
							</a>
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
							<Flex
								indent='medium'
								justifyContent='center'
								alignItems='center'
								className={styles.registrationButton}
							>
								<Flex indent='small' className={styles.registrationButton_icon}>
									<img style={{maxHeight: ICON_SIZE}} src={GoogleIcon} alt='' />
								</Flex>
								<Flex indent='small'>
									<Trans
										i18nKey='RegAuth.SingUpWith'
										values={{title: 'GOOGLE +'}}
									/>
								</Flex>
							</Flex>
							<Flex
								indent='medium'
								justifyContent='center'
								alignItems='center'
								className={styles.registrationButton}
							>
								<Flex indent='small' className={styles.registrationButton_icon}>
									<FaGithub size={ICON_SIZE} fill={COLORS.black} />
								</Flex>
								<Flex indent='small'>
									<Trans
										i18nKey='RegAuth.SingUpWith'
										values={{title: 'Github'}}
									/>
								</Flex>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			)}
		/>
		<Route path={`${match.path}/:topicId`} render={() => <CustomerRegistrationContainer />} />
	</>
);

export default ServicesRegistration;
