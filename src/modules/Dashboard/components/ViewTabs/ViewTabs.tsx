import React, {PureComponent} from 'react';

import ViewTab from './ViewTab/ViewTab';

import ImageDotMatrix from 'assets/images/ImageDotMatrix';
import ImageList from 'assets/images/ImageList';

import styles from './viewTabs.scss';

export default class ViewTabs extends PureComponent {
	public state = {
		activeTab: 0,
	};

	private readonly onSwitchTab = (tab: number) => this.state.activeTab !== tab
		&& this.setState({activeTab: tab})

	public render() {
		const {activeTab} = this.state;

		return (
			<div className={styles.wrapper}>
				<ViewTab
					onClick={() => this.onSwitchTab(0)}
					isActive={activeTab === 0}
					Icon={ImageList}
				/>
				<ViewTab
					onClick={() => this.onSwitchTab(1)}
					isActive={activeTab === 1}
					Icon={ImageDotMatrix}
				/>
			</div>
		);
	}
}
