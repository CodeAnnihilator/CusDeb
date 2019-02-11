import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

import Header from 'common/components/Header/Header';
import LeftNavBarContainer from 'common/containers/LeftNavBarContainer';

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
		const {isAuthenticated} = this.props;

		return isAuthenticated
			? (
				<div className={styles.page}>
					<Header onToggle={this.onToggle} isMenuOpen={!this.state.isCollapsed}/>
					<div className={styles.wrapper}>
					<LeftNavBarContainer isCollapsed={this.state.isCollapsed} />
						{this.props.children}
					</div>
				</div>
			) : <Redirect to='/login' />;
	}
}

export default MainLayout;
