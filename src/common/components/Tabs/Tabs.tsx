import cn from 'classnames';
import React, {PureComponent} from 'react';
import ITabsProps from './Tabs.d';

import styles from './tabs.scss';

export default class Tabs extends PureComponent<ITabsProps> {
	public static defaultProps = {
		tabs: [],
		tabsHeight: 50,
	};

	public state = {
		currentTab: 0,
	};

	private readonly onTabChange: any = (index: number) => {
		this.setState({currentTab: index});
	}

	public render() {
		const {tabs, tabStyle, contentStyle, activeTabStyle} = this.props;
		const {currentTab} = this.state;

		return (
			<div className={styles.tabs}>
				<div className={styles.tabsList}>
					{
						tabs.map((tab, index) => (
							<div
								key={index}
								className={cn(
									styles.tab, {
									[styles.tab_active]: index === currentTab,
								})}
								style={
									index === currentTab
									? {...tabStyle, ...activeTabStyle}
									: {...tabStyle}
								}
								onClick={() => this.onTabChange(index)}
							>
								<span className={styles.tab_title}>{tab.title}</span>
							</div>
						))
					}
				</div>
				<div style={contentStyle} className={styles.tabContent}>
					{tabs[currentTab].content}
				</div>
			</div>
		);
	}
}
