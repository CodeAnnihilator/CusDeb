import React, { PureComponent } from 'react'
import cn from 'classnames'

import DropDownTab from './DropDownTab/DropDownTab'

import styles from './currentImageTab.scss'

interface IProps {
	activeImage: any;
}

interface IState {
	activeMainTab: number;
	openedDropdownTabs: {
		base: number,
		dependencies: number,
		added: number,
	};
}

export default class CurrentImageTab extends PureComponent<IProps, IState> {
	static defaultProps = {
		activeImage: {
			basePackages: [],
			addedPackages: [],
			depPackages: [],
			distro: {
				full_name: '',
			}
		}
	}

	state = {
		activeMainTab: 0,
		openedDropdownTabs: {
			base: 0,
			dependencies: 0,
			added: 1,
		},
	}

	onSwitchMainTab = nextTab => {
		if (nextTab !== this.state.activeMainTab) {
			this.setState({ activeMainTab: nextTab })
		}
	}

	onToggleDropdownTabs = tab => this.setState(prevState => ({
		openedDropdownTabs: {
			...prevState.openedDropdownTabs,
			[tab]: !prevState.openedDropdownTabs[tab],
		}
	}))

	render() {
		const { activeMainTab, openedDropdownTabs } = this.state;
		const { activeImage: {basePackages, addedPackages, depPackages, distro, thumb}} = this.props;

		return (
			<div className={styles.wrapper}>
				<div className={styles.wrapper_inner}>
				<div className={styles.header_title}>{ distro.name }</div>
					<div className={styles.tabs}>
						<div
							onClick={() => this.onSwitchMainTab(0)}
							className={cn(styles.tabs_tab, {[styles.tabs_tab__active]: activeMainTab === 0})}
						>common</div>
						<div
							onClick={() => this.onSwitchMainTab(1)}
							className={cn(styles.tabs_tab, {[styles.tabs_tab__active]: activeMainTab === 1})}
						>packages</div>
					</div>
					{
						activeMainTab === 0 && (
							<div className={styles.header}>
								<img className={styles.header_img} src={thumb} />
								<div className={styles.header_createdAt}>
									<span>Created at: </span>
									<strong className={styles.header_createdAt_date}>21.09.2018</strong>
								</div>
							</div>
						)
					}
					{
						activeMainTab === 1 && (
							<div className={styles.dropDownWrapper}>
								<DropDownTab
									title='Base Packages'
									value={basePackages.length}
									isOpened={!!openedDropdownTabs.base}
									onClick={() => this.onToggleDropdownTabs('base')}
								>
									{
										basePackages.map((pack, index) => (
											<div key={index}>{pack.package}</div>
										))
									}
								</DropDownTab>
								<DropDownTab
									title='Dependencies'
									value={depPackages.length}
									isOpened={!!openedDropdownTabs.dependencies}
									onClick={() => this.onToggleDropdownTabs('dependencies')}
								>
									{
										depPackages.map((pack, index) => (
											<div key={index}>{pack.package}</div>
										))
									}
								</DropDownTab>
								<DropDownTab
									title='Added Packages'
									value={addedPackages.length}
									isOpened={!!openedDropdownTabs.added}
									onClick={() => this.onToggleDropdownTabs('added')}
								>
									{
										addedPackages.map((pack, index) => (
											<div key={index}>{pack.package}</div>
										))
									}
								</DropDownTab>
							</div>
						)
					}
				</div>
			</div>
		)
	}
}