import cn from 'classnames';
import React from 'react';
import {Trans} from 'react-i18next';
import {NavLink} from 'react-router-dom';
import {Field} from 'redux-form';

import {socialNetworks} from 'modules/RegAuth/common/constants/constants';

import Flex from 'common/components/Flex/Flex';

import {COLORS} from 'common/constants/entities';
import rules from 'modules/RegAuth/Registration/validation/InputValidation';

import SuppliesIcon from 'assets/images/SuppliesIcon';

import InputWithValidation from 'modules/RegAuth/InputWithValidation/InputWithValidation';

import silentClasses from 'styles/_silent_classes.scss';
import styles from './auth.scss';

import SimpleLoader from 'common/components/Preloaders/SimpleLoader/SimpleLoader';

export default class Auth extends React.PureComponent<any> {
	private readonly onSubmit = (event: any) => {
		event.persist();
		this.props.sendAuthData();
	}

	public render() {
		const {valid, isFetching} = this.props;

		return (
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
						{socialNetworks(23).map(item => (
							<Flex
								key={item.id}
								indent='small'
								className={cn(
									styles.icon, {
									[styles.icon_github]: item.title === 'Github',
								})}
							>
								{item.icon}
							</Flex>
						))}
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
							name='email'
							component={InputWithValidation as any}
							type='text'
							validate={[rules.required, rules.email]}
						/>
						<Field
							name='password'
							component={InputWithValidation as any}
							type='text'
							validate={rules.required}
						/>
					</Flex>
					<Flex
						indent='large'
						className={cn(styles.loginButton, {
							[styles.loginButton_disabled]: !valid,
						})}
						onClick={valid ? this.onSubmit : null}
					>
						{isFetching ? <SimpleLoader color={COLORS.white} /> : <Trans i18nKey='RegAuth.Auth.Login' />}
					</Flex>
				</Flex>
			</Flex>
		);
	}
}
