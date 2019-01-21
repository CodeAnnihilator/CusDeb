import cn from 'classnames';
import React from 'react';
import {Trans} from 'react-i18next';
import {NavLink} from 'react-router-dom';

import styles from './leftNavBar.scss';

import {COLORS} from 'common/constants/entities';

import BookCoverIcon from 'assets/images/BookCoverIcon';
import DashboardIcon from 'assets/images/DashboardIcon';
import EnvelopeIcon from 'assets/images/EnvelopeIcon';
import HardBookIcon from 'assets/images/HardBookIcon';

const navs = [
	{
		Icon: <DashboardIcon />,
		title: 'Dashboard',
		path: '/dashboard',
	},
	{
		Icon: <BookCoverIcon />,
		title: 'Docs',
		path: '/docs',
	},
	{
		Icon: <HardBookIcon />,
		title: 'Blog',
		path: '/blog',
	},
	{
		Icon: <EnvelopeIcon />,
		title: 'Feedback',
		path: 'http://www.yandex.com',
		isExternal: true,
	},
];

class LeftNavBar extends React.Component<any> {
	public render() {
		return (
			<div
				className={
					cn(styles.wrapper, {
					[styles.collapsed]: this.props.isCollapsed })
				}
			>
				<div className={styles.navigation}>
					{navs.map(({Icon, title, path, isExternal}) => {
						const NavElToRender = (
							<>
								{React.cloneElement(Icon, {
									className: styles.navigation_el_img,
									fill: COLORS[
										location.pathname === path
											? 'activeNavBarItem'
											: 'navBarItem'
									],
								})}
								<span className={styles.navigation_el_text}>
									<Trans i18nKey={`common.${title}`} />
								</span>
							</>
						);

						if (isExternal) {
							return (
								<a
									target='_blank'
									key={title}
									href={path}
									className={styles.navigation_el}
								>
									{ NavElToRender }
								</a>
							);
						}

						return (
							<NavLink
								key={title}
								to={path}
								className={styles.navigation_el}
								activeClassName={styles['navigation_el__active']}
							>
								{ NavElToRender }
							</NavLink>
						);
					})}
				</div>
			</div>
		);
	}
}

export default LeftNavBar;
