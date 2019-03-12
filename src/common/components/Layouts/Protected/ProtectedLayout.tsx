import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

import LeftNavBarContainer from 'common/containers/LeftNavBarContainer';
import HeaderContainer from '../../Header/containers/HeaderContainer';

import styles from './protectedLayout.scss';

interface IProps {
	isAuthenticated: boolean;
}

interface IState {
	isCollapsed: boolean;
}

class MainLayout extends Component<IProps, IState> {

	public static defaultProps = {
		isAuthenticated: true,
	};

	public state = {
		isCollapsed: true,
	};

	protected readonly onToggle = () => this.setState(prevState => ({isCollapsed: !prevState.isCollapsed}));

	public render() {
		const {isAuthenticated, children} = this.props;
		const {isCollapsed} = this.state;

		return isAuthenticated
			? (
				<div className={styles.page}>
					<HeaderContainer onToggle={this.onToggle} isMenuOpen={!isCollapsed} isAuthenticated />
					<div className={styles.wrapper}>
						<LeftNavBarContainer isCollapsed={isCollapsed} />
						{children}
					</div>
				</div>
			) : <Redirect to='/login' />;
	}
}

export default MainLayout;
