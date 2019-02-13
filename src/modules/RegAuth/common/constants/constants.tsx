import React from 'react';

import {COLORS} from 'common/constants/entities';

import GoogleIcon from 'assets/images/google-icon.svg';
import {FaGithub} from 'react-icons/fa';

export const socialNetworks = (size: number) => [
	{
		icon: <img style={{maxHeight: size}} src={GoogleIcon} alt=''/>,
		title: 'GOOGLE +',
		id: 0,
	},
	{
		icon: <FaGithub size={size} fill={COLORS.black} />,
		title: 'Github',
		id: 2,
	},
];
