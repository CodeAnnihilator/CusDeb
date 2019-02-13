import cn from 'classnames';
import React, {Component} from 'react';
import {Trans} from 'react-i18next';

import capitalize from 'utils/capitalize';

import Flex from 'common/components/Flex/Flex';

import styles from './inputWithValidation.scss';

import i18next from 'i18next';

import {COLORS} from 'common/constants/entities';

class InputWithValidation extends Component {
	public static readonly defaultProps = {
		withSup: false,
	};

	public render() {
		const {
			input: {label, name},
			meta: {touched, error, warning},
			withSup,
			input,
			type,
		} = this.props as any;

		const HasError = touched && error;
		const HasWarning = touched && warning;

		return (
			<Flex indent='large' direction='column'>
				<Flex
					indent='medium'
					className={styles.title}
					justifyContent='space-between'
					alignItems='flex-start'
				>
					<Flex>
						<Flex indent='small'>
							<Trans i18nKey={`RegAuth.Registration.${capitalize(name)}`} />
						</Flex>
						{withSup
							? <Flex
								style={{marginTop: '5px'}}
								indent='small'
							>
								<sup>*</sup>
							</Flex>
							: null}
					</Flex>
					{HasError ? (
						<Flex width={150} justifyContent='flex-end'>
							<Flex style={{color: COLORS.red600}}>
								<Trans i18nKey={`RegAuth.Registration.Validation.${error}`} />
							</Flex>
						</Flex>
					)
					: null}
				</Flex>
				<Flex indent='medium'>
					<input
						className={cn(styles.input, {
							[styles.input_error]: HasError,
						})}
						placeholder={i18next.t(`RegAuth.Registration.Placeholders.${capitalize(name)}`)}
						{...input}
						type={type}
					/>
				</Flex>
			</Flex>
		);
	}
}

export default InputWithValidation;
