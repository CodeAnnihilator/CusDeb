import React, {Component} from 'react'

import Header from 'common/components/Header/Header'
import LeftNavBarContainer from 'common/constants/LeftNavBarContainer';

import styles from './mainLayout.scss'

interface IState {
	isCollapsed: boolean;
}

class MainLayout extends Component<{}, IState> {
	state = {
		isCollapsed: true,
	}

	onToggle = () => this.setState(prevState => ({ isCollapsed: !prevState.isCollapsed}));

	render() {
		return (
			<div className={styles.page}>
			  <Header onToggle={this.onToggle} />
			  <div className={styles.wrapper}>
			  	<LeftNavBarContainer isCollapsed={this.state.isCollapsed} />
				{ this.props.children }
			  </div>
			</div>
		  )
	}
}

export default MainLayout