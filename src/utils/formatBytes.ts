
import memoize from 'lodash.memoize';

import i18n from 'locales/i18nextConfig';

const getBytesUnits = memoize(() => ([
	['B',  i18n.t('bytes.B')],
	['kB', i18n.t('bytes.kB')],
	['MB', i18n.t('bytes.MB')],
	['GB', i18n.t('bytes.GB')],
	['TB', i18n.t('bytes.TB')],
	['PB', i18n.t('bytes.PB')],
	['EB', i18n.t('bytes.EB')],
	['ZB', i18n.t('bytes.ZB')],
	['YB', i18n.t('bytes.YB')],
]));

const roundToPrecision = (numberVar: any, precision = 2) =>
	`${Math.round(parseFloat(numberVar) * (10 ** precision)) / (10 ** precision)}`;

export const formatBytes = (numberVar: any, precision = 0, maxUnit = 'YB') => {
	if (typeof numberVar !== 'number' || !Number.isFinite(numberVar)) {
		throw new Error('Must be a number.');
	}

	const unitArr = getBytesUnits();
	const maxUnitIndex = unitArr.findIndex(([unit]) => unit === maxUnit);

	let count = 0;
	while (numberVar >= 1024 && count < maxUnitIndex) {
		//tslint:disable
		numberVar = numberVar / 1024;
		count++;
	}

	return `${roundToPrecision(numberVar, precision)} ${unitArr[count][1]}`;
};
