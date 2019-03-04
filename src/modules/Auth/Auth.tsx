import cn from 'classnames';
import React from 'react';
import {Trans} from 'react-i18next';
import {NavLink, Redirect} from 'react-router-dom';
import {Field} from 'redux-form';

import Flex from 'common/components/Flex/Flex';

import {COLORS} from 'common/constants/entities';
import rules from 'utils/inputValidation';

import SuppliesIcon from 'assets/images/SuppliesIcon';

import InputWithValidation from 'common/components/InputWithValidation/InputWithValidation';

import silentClasses from 'styles/_silent_classes.scss';
import styles from './auth.scss';

import SimpleLoader from 'common/components/Preloaders/SimpleLoader/SimpleLoader';

import GoogleIcon from 'assets/images/google-icon.svg';
import {FaGithub} from 'react-icons/fa';

const ICON_SIZE = 24;

export default class Auth extends React.PureComponent<any> {
	private readonly onSubmit = (event: any) => {
		event.persist();
		this.props.sendAuthData();
	}

	public componentDidMount() {
		this.props.checkUserLogged();
	}

	public render() {
		const {valid, isSubmitting, validationError, isAuthenticated} = this.props;

		return (
			!isAuthenticated ? (
			<Flex
				className={styles.wrapper}
			>
				<Flex
					alignItems='center'
					direction='column'
					className={styles.container}
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
							<Trans i18nKey='RegAuth.Auth.SignInToCusdeb' />
						</Flex>
						<Flex indent='medium' className={styles.dontHaveAccount}>
							<Flex indent='small'>
								<Trans i18nKey='RegAuth.Auth.DontHaveAnAccount' />?
							</Flex>
							<Flex indent='small'>
								<NavLink to='/registration'>
									<Trans i18nKey='RegAuth.Auth.Register' />
								</NavLink>
							</Flex>
						</Flex>
					</Flex>
					<Flex
						indent='large'
						justifyContent='center'
						alignItems='center'
						className={styles.resetPwdWrapper}
					>
						<Flex
							className={styles.resetPwdContainer}
						>
							<Flex alignItems='center'>
								<Flex indent='small'><Trans i18nKey='RegAuth.Auth.ForgotPassword' /></Flex>?
								<Flex indent='small'>
									<NavLink to='/reset'><Trans i18nKey='common.ClickHere' /></NavLink>
								</Flex>
							</Flex>
						</Flex>
					</Flex>
					<Flex
						className={styles.iconsBlock}
						alignItems='center'
						justifyContent='center'
						indent='large'
					>
						<Flex
							indent='small'
							className={styles.icon}
						>
							<img style={{maxHeight: ICON_SIZE}} src={GoogleIcon} alt='' />
						</Flex>
						<Flex
							indent='small'
							className={`${styles.icon} ${styles.icon_github}`}
						>
							<FaGithub size={ICON_SIZE} fill={COLORS.black} />
						</Flex>
					</Flex>
					<Flex justifyContent='center' alignItems='center' className={styles.orUseEmail}>
						<Trans i18nKey='RegAuth.Auth.OrUseEmail'/>
					</Flex>
					<Flex
						width='100%'
						indent='large'
						direction='column'
						alignItems='center'
					>
						<Field
							name='username'
							component={InputWithValidation as any}
							type='text'
							validate={rules.required}
						/>
						<Field
							name='password'
							component={InputWithValidation as any}
							type='password'
							validate={rules.required}
						/>
					</Flex>
					{
						validationError &&
						<div className={styles.validationError}>{validationError}</div>
					}
					<Flex
						indent='large'
						className={cn(styles.loginButton, {
							[styles.loginButton_disabled]: !valid,
						})}
						onClick={valid ? this.onSubmit : null}
					>
						{isSubmitting ? <SimpleLoader color={COLORS.white} /> : <Trans i18nKey='RegAuth.Auth.Login' />}
					</Flex>
				</Flex>
			</Flex>
		) : (<Redirect to={'/user'} />) );
	}
}
