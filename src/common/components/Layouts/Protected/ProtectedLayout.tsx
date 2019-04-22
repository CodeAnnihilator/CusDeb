import React, {Component} from 'react';

import Flex from 'common/components/Flex/Flex';
import ColoredSpinner from 'common/components/Preloaders/ColoredSpinner/ColoredSpinner';
import LeftNavBarContainer from 'common/containers/LeftNavBarContainer';
import HeaderContainer from '../../Header/containers/HeaderContainer';

import {IProps, IState} from './protectedLayout.d';

import styles from './protectedLayout.scss';

class MainLayout extends Component<IProps, IState> {
	public static defaultProps = {
		isAuthenticated: false,
		isPreloading: true,
	};

	public componentDidMount() {
		if (!this.props.isAuthenticated) {
			this.props.checkUserLogged();
		}
	}

	public state = {
		isCollapsed: true,
	};

	protected readonly onToggle = () => this.setState(prevState => ({isCollapsed: !prevState.isCollapsed}));

	public render() {
		const {isPreloading, isAuthenticated, children} = this.props;
		const {isCollapsed} = this.state;

		return isPreloading ? (
			<Flex
				justifyContent='center'
				alignItems='center'
				style={{width: '100%', height: '300px'}}
			>
				<ColoredSpinner />
			</Flex>)
			: (
				isAuthenticated ? (
					<div className={styles.page}>
						<HeaderContainer onToggle={this.onToggle} isMenuOpen={!isCollapsed} isAuthenticated />
						<div className={styles.wrapper}>
							<LeftNavBarContainer isCollapsed={isCollapsed} />
							{children}
						</div>
					</div>
				) : null);
	}
}

export default MainLayout;
