import cn from 'classnames';
import React from 'react';
import {Trans} from 'react-i18next';
import {NavLink} from 'react-router-dom';
import {Field} from 'redux-form';

import Flex from 'common/components/Flex/Flex';

import {COLORS} from 'common/constants/entities';
import rules from 'utils/inputValidation';

import LogoIcon from 'assets/images/LogoIcon';
import {
	IoIosArrowBack,
} from 'react-icons/io/';

import InputWithValidation from 'common/components/InputWithValidation/InputWithValidation';
import SimpleLoader from 'common/components/Preloaders/SimpleLoader/SimpleLoader';

import silentClasses from 'styles/_silent_classes.scss';
import styles from './customerRegistration.scss';

const CustomerRegistration = (props: any) => (
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
					<LogoIcon className={styles.cusdebIcon} fill={COLORS.green800} />
				</Flex>
				<Flex indent='medium' className={silentClasses.toUpperCase}>
					<Trans i18nKey='RegAuth.CreateFreeAccount' />
				</Flex>
				<Flex indent='medium' className={styles.registrationAlreadyHaveAccount}>
					<Flex indent='small'>
						<Trans i18nKey='RegAuth.AlreadyHaveAccount' />?
					</Flex>
					<Flex indent='small'>
						<NavLink to='/login'>
							<Trans i18nKey='RegAuth.SignIn' />
						</NavLink>
					</Flex>
				</Flex>
			</Flex>
			<Flex
				indent='large'
				justifyContent='center'
				alignItems='center'
				className={styles.backToRegistration}
			>
				<NavLink
					to='/registration'
					className={styles.registrationNavlink}
				>
					<Flex alignItems='center'>
						<Flex indent='medium'><IoIosArrowBack size={16} /></Flex>
						<Flex indent='medium'><Trans i18nKey='RegAuth.BackToRegistration' /></Flex>
					</Flex>
				</NavLink>
			</Flex>
			<Flex
				width='100%'
				indent='large'
				direction='column'
				alignItems='center'
				className={styles.formWrapper}
			>
				<Field
					name='username'
					component={InputWithValidation as any}
					type='text'
					validate={rules.required}
					withSup
				/>
				<Field
					name='email'
					component={InputWithValidation as any}
					type='text'
					validate={[rules.required, rules.email]}
					withSup
				/>
				<Field
					name='password'
					component={InputWithValidation as any}
					type='password'
					validate={[rules.required, rules.passwordAreCorrect]}
					withSup
				/>
				<Field
					name='confirm'
					component={InputWithValidation as any}
					type='password'
					validate={[rules.required, rules.arePwdsMatch]}
					withSup
				/>
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
					<span><Trans i18nKey={'RegAuth.PrivacyPolicy'}/>.</span>
				</a>
			</Flex>
			{props.validationError &&
				<div className={styles.validationError}>{props.validationError}</div>}
			<Flex
				indent='large'
				className={styles.submitButtonContainer}
				alignItems='center'
				justifyContent='center'
			>
				<Flex
					className={cn(styles.submitButton, {
						[styles.submitButton_disabled]: !props.valid,
					})}
					onClick={props.valid ? props.sendData : null}
				>
					{props.isSubmitting ? <SimpleLoader /> : <Trans i18nKey='RegAuth.CreateAccount' />}
				</Flex>
			</Flex>
		</Flex>
	</Flex>
);

export default CustomerRegistration;
