import React from 'react';

import {COLORS} from 'common/constants/entities';

import {
	TiSocialFacebookCircular,
	TiSocialGithub,
	TiSocialGooglePlusCircular,
} from 'react-icons/ti';

export const socialNetworks = (size: number) => [
	{
		icon: <TiSocialGooglePlusCircular size={size} fill={COLORS.red700} />,
		title: 'GOOGLE +',
		id: 0,
	},
	{
		icon: <TiSocialFacebookCircular size={size} fill={COLORS.blue700} />,
		title: 'Facebook',
		id: 1,
	},
	{
		icon: <TiSocialGithub size={size} fill={COLORS.black} />,
		title: 'Github',
		id: 2,
	},
];
