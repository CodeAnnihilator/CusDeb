import cn from 'classnames';
import React from 'react';
import {Trans} from 'react-i18next';
import {NavLink} from 'react-router-dom';

import Flex from 'common/components/Flex/Flex';

import LocaleIcon from 'assets/images/LocaleIcon';
import LogoIcon from 'assets/images/LogoIcon';
import UserIcon from 'assets/images/UserIcon';

import {COLORS} from 'common/constants/entities';
import i18n from 'locales/i18nextConfig';

import styles from './header.scss';

interface IProps {
	onToggle: () => void;
	isMenuOpen: boolean;
}

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
		path: '/pricing',
		key: 'Pricing',
		id: 2,
	}, {
		path: '/blog',
		key: 'Blog',
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

const Header: React.FC<IProps> = ({onToggle, isMenuOpen}) => (
	<Flex className={styles.header}>
		<Flex
			className={cn(styles.toggle, {[styles.toggle_active]: isMenuOpen})}
			onClick={onToggle}
		>
			<div className={styles.toggle_img}>
				<span /><span /><span /><span />
			</div>
		</Flex>
		<Flex justifyContent='center' grow={1}>
			<Flex alignItems='center'>
				<Flex indent='large'>
					<LogoIcon className={styles.logoIcon} fill={COLORS.white} />
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
			<Flex className={styles.tabsHeader}>
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
					<LocaleIcon className={styles.localeIcon} fill={COLORS.white} />
					{i18n.language.toUpperCase()}
				</div>
				<div className={styles.userInfo}>
					<UserIcon className={styles.avatar} fill={COLORS.white} />
				</div>
			</Flex>
		</Flex>
	</Flex>
);

export default Header;
