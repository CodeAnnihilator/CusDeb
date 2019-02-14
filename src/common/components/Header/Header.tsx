import React from 'react';
import {Trans} from 'react-i18next';

import Dropdown from 'react-bootstrap/lib/Dropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';

import {createSvgComponent} from 'common/helpers/entities';
import i18n from 'locales/i18nextConfig';

import AngleArrowDownSVG from 'assets/images/angle-arrow-down.svg';
import RUFlagIcon from 'assets/images/ru.svg';
import UKFlagIcon from 'assets/images/uk.svg';

import styles from './header.scss';

interface IProps {
	onToggle: () => void;
	isMenuOpen: boolean;
}

const setLanguage = (lng: string) => i18n
	.changeLanguage(lng)
	.catch(error => {
		if (error) return console.warn('something went wrong loading', error);
	});

const dropDownItems = [
	{
		title: <Trans i18nKey='common.En' />,
		onSelect: setLanguage,
		shortName: 'EN',
		icon: createSvgComponent(styles.flag, UKFlagIcon),
	},
	{
		title: <Trans i18nKey='common.Ru' />,
		onSelect: setLanguage,
		shortName: 'RU',
		icon: createSvgComponent(styles.flag, RUFlagIcon),
	},
];

const Header: React.FC<IProps> = ({onToggle, isMenuOpen}) => {
	const currentSelectedItem = dropDownItems
		.find(item => item.shortName === i18n.language.toUpperCase()) || dropDownItems[0];

	return (
		<div className={styles.wrapper}>
			<div className={styles.leftSideWrapper}>
				<div className={[styles.toggle, (isMenuOpen ? styles.toggle_active : null)].join(' ')} onClick={onToggle} >
					<div className={styles.toggle_img}>
						<span/><span/><span/><span/>
					</div>
				</div>
				<div className={styles.brand}>
					<span className={styles.brand_text}>CusDeb</span>
					<sup className={styles.brand_sup}>BETA</sup>
				</div>
			</div>
			<div className={styles.controls}>
				<div className={styles.devider} />
				<div className={styles.user}>
					<span>Eugene Pyatibratov</span>
					<img className={styles.user_menu} src={AngleArrowDownSVG} />
				</div>
				<div className={styles.devider} />
				<div className={styles.language}>
					<Dropdown
						pullRight
						id='1'
					>
						<Dropdown.Toggle className={styles.dropdown_title}>
							<>
								{currentSelectedItem.icon}
								<span className={styles.dropdown_title_language}>
									{currentSelectedItem.shortName}
								</span>
							</>
						</Dropdown.Toggle>
						<Dropdown.Menu className={styles.dropdown_menu}>
							{dropDownItems.map(({icon, onSelect, shortName, title}) => (
								<MenuItem
									key={shortName.toLowerCase()}
									eventKey={shortName.toLowerCase()}
									onSelect={onSelect as any}
									className={styles.dropdown_item}
								>
									{icon}
									<span className={styles.dropdown_title}>{title}</span>
								</MenuItem>
							))}
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</div>
		</div>
	);
};

export default Header;
