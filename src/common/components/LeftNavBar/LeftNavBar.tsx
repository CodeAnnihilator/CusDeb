import React from 'react';
import cn from 'classnames';

import styles from './leftNavBar.scss';

import BookCoverIcon from 'assets/images/BookCoverIcon';
import HardBookIcon from 'assets/images/HardBookIcon';
import EnvelopeIcon from 'assets/images/EnvelopeIcon';
import DashboardIcon from 'assets/images/DashboardIcon';

import { NavLink } from 'react-router-dom';
import { Trans } from 'react-i18next';
import { COLORS } from 'common/constants/entities';

const navs = [
	{
		Icon: <DashboardIcon />,
		title: 'Dashboard',
		path: '/dashboard',
	},
	{
		Icon: <BookCoverIcon />,
		title: 'Docs',
		path: '/docs'
	},
	{
		Icon: <HardBookIcon />,
		title: 'Blog',
		path: '/blog'
	},
	{
		Icon: <EnvelopeIcon />,
		title: 'Feedback',
		path: '/feedback'
	},
];

class LeftNavBar extends React.Component<any>{
	render() {
		return (
			<div className={cn(styles.wrapper, {
				[styles.collapsed]: this.props.isCollapsed })
			}>
				<div className={styles.navigation}>
					{navs.map(({Icon, title, path}) => (
						<NavLink
							key={title}
							to={path}
							className={styles.navigation_el}
							activeClassName={styles['navigation_el__active']}
						>
							{React.cloneElement(Icon, {
								className: styles.navigation_el_img,
								fill: COLORS[location.pathname === path ? 'activeNavBarItem': 'navBarItem'],
							})}
							<span className={styles.navigation_el_text}>
								<Trans i18nKey={`common.${title}`} />
							</span>
						</NavLink>
					))}
				</div>
			</div>
		)
	}
} 

export default LeftNavBar
