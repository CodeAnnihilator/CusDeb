import cn from 'classnames';
import React, {PureComponent} from 'react';
import {Trans} from 'react-i18next';

import DropDownTab from './DropDownTab/DropDownTab';

import styles from './currentImageTab.scss';

interface IProps {
	activeImage: any;
}

interface IState {
	activeMainTab: number;
	openedDropdownTabs: {
		base: number;
		dependencies: number;
		added: number;
	};
}

export default class CurrentImageTab extends PureComponent<IProps, IState> {
	public static defaultProps = {
		activeImage: {
			basePackages: [],
			addedPackages: [],
			depPackages: [],
			distro: {
				full_name: '',
			},
		},
	};

	public state = {
		activeMainTab: 0,
		openedDropdownTabs: {
			base: 0,
			dependencies: 0,
			added: 1,
		},
	};

	private readonly onSwitchMainTab = (nextTab: any) => {
		if (nextTab !== this.state.activeMainTab) {
			this.setState({activeMainTab: nextTab});
		}
	}

	private readonly onToggleDropdownTabs = (tab: any) => this.setState(prevState => ({
		openedDropdownTabs: {
			...prevState.openedDropdownTabs,
			[tab]: !prevState.openedDropdownTabs[tab],
		},
	}))

	public render() {
		const {
			activeMainTab,
			openedDropdownTabs,
		} = this.state;
		const {
			activeImage: {
				basePackages,
				addedPackages,
				depPackages,
				distro,
				thumb,
			},
		} = this.props;

		return (
			<div className={styles.wrapper}>
				<div className={styles.wrapper_inner}>
				<div className={styles.header_title}>{ distro.name }</div>
					<div className={styles.tabs}>
						<div
							onClick={() => this.onSwitchMainTab(0)}
							className={cn(styles.tabs_tab, {[styles.tabs_tab__active]: activeMainTab === 0})}
						>
							<Trans i18nKey='common.Common'/>
						</div>
						<div
							onClick={() => this.onSwitchMainTab(1)}
							className={cn(styles.tabs_tab, {[styles.tabs_tab__active]: activeMainTab === 1})}
						>
							<Trans i18nKey='common.Packages'/>
						</div>
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
									title={<Trans i18nKey='Packages.Base'/>}
									value={basePackages.length}
									isOpened={!!openedDropdownTabs.base}
									onClick={() => this.onToggleDropdownTabs('base')}
								>
									{
										basePackages.map((pack: any, index: any) => (
											<div key={index}>{pack.name}</div>
										))
									}
								</DropDownTab>
								<DropDownTab
									title={<Trans i18nKey='Packages.Dependencies'/>}
									value={depPackages.length}
									isOpened={!!openedDropdownTabs.dependencies}
									onClick={() => this.onToggleDropdownTabs('dependencies')}
								>
									{
										depPackages.map((pack: any, index: any) => (
											<div key={index}>{pack.name}</div>
										))
									}
								</DropDownTab>
								<DropDownTab
									title={<Trans i18nKey='Packages.Added'/>}
									value={addedPackages.length}
									isOpened={!!openedDropdownTabs.added}
									onClick={() => this.onToggleDropdownTabs('added')}
								>
									{
										addedPackages.map((pack: any, index: any) => (
											<div key={index}>{pack.name}</div>
										))
									}
								</DropDownTab>
							</div>
						)
					}
				</div>
			</div>
		);
	}
}
