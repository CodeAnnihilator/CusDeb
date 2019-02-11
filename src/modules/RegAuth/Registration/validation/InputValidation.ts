import i18next from 'i18next';

const geti18nValue = (key: string) => i18next.t(`RegAuth.Registation.Validation.${key}`);

const inputBaseValidation =  {
	required: (value: string) => value
		? undefined
		: 'Required',
	email: (value: string) => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		? 'InvalidEmail'
		: undefined,
	arePwdsMatch: (_: any, allValues: any) => allValues.password === allValues.confirm
		? undefined
		: 'PwdsAreUncomparable',
	passwordAreCorrect: (value: string) => value.match(
		/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g)
		? undefined
		: 'PwdIsIncorrect',
};

export default inputBaseValidation;
