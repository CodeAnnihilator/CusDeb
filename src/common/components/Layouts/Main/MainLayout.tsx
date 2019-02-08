import React, {Component} from 'react';

import Header from 'common/components/Header/Header';
import LeftNavBarContainer from 'common/containers/LeftNavBarContainer';

import styles from './mainLayout.scss';

interface IState {
	isCollapsed: boolean;
}

class MainLayout extends Component<{}, IState> {
	public state = {
		isCollapsed: true,
	};

	protected readonly onToggle = () => this.setState(prevState => ({isCollapsed: !prevState.isCollapsed}));

	public render() {
		return (
			<div className={styles.page}>
				<Header onToggle={this.onToggle} isMenuOpen={!this.state.isCollapsed}/>
				<div className={styles.wrapper}>
				<LeftNavBarContainer isCollapsed={this.state.isCollapsed} />
				{ this.props.children }
				</div>
			</div>
		);
	}
}

export default MainLayout;
