import React from 'react';

import {COLORS} from 'common/constants/entities';

import {FaFacebookF, FaGithub, FaGooglePlusG} from 'react-icons/fa';

export const socialNetworks = (size: number) => [
	{
		icon: <FaGooglePlusG size={size} fill={COLORS.red700} />,
		title: 'GOOGLE +',
		id: 0,
	},
	{
		icon: <FaFacebookF size={size - size / 3.5} fill={'#FFFFFF'} />,
		title: 'Facebook',
		id: 1,
	},
	{
		icon: <FaGithub size={size} fill={COLORS.black} />,
		title: 'Github',
		id: 2,
	},
];
