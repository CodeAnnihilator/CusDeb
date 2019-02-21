import React, {PureComponent} from 'react';
import {Trans} from 'react-i18next';
import {NavLink} from 'react-router-dom';

import Flex from 'common/components/Flex/Flex';

import SuppliesIcon from 'assets/images/SuppliesIcon';

import {COLORS} from 'common/constants/entities';
import i18n from 'locales/i18nextConfig';

import styles from './header.scss';

const setLanguage = () => i18n
	.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
	.catch(error => {
		if (error) return console.warn('something went wrong loading', error);
	});

const headerItems = [
	{
		path: '/',
		key: 'Home',
		id: 1,
	}, {
		path: '/features',
		key: 'Features',
		id: 2,
	}, {
		path: '/plans',
		key: 'Plans',
		id: 3,
	}, {
		path: '/login',
		key: 'SignIn',
		id: 4,
	}, {
		path: '/registration',
		key: 'SignUp',
		id: 5,
	},
];

const Header = () => (
	<Flex className={styles.header}>
		<Flex width='80%' justifyContent='center'>
			<Flex alignItems='center'>
				<Flex indent='large'>
					<SuppliesIcon className={styles.suppliesIcon} fill={COLORS.white}/>
				</Flex>
				<Flex indent='large'>
					<Flex
						indent='small'
						className={styles.headerLogoItem}
						alignItems='center'
					>
						CusDeb
					</Flex>
					<Flex indent='small' className={styles.headerLogoItemSubLogo}>
						beta
					</Flex>
				</Flex>
			</Flex>
			<Flex>
				{headerItems.map(({path, key, id}) => (
					<NavLink
						exact={path.indexOf('/registration') !== -1 ? false : true}
						key={id}
						to={path}
						className={styles.headerItem}
						activeClassName={styles.headerItem_active}
					>
						<Trans i18nKey={`RegAuth.${key}`} />
					</NavLink>
				))}
				<div
					className={styles.headerItem}
					onClick={setLanguage}
				>
					{i18n.language.toUpperCase()}
				</div>
			</Flex>
		</Flex>
	</Flex>
);

export default Header;
