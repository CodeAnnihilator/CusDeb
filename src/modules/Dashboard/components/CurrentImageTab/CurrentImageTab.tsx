import React, {PureComponent} from 'react';
import {Trans} from 'react-i18next';

import Tabs from 'common/components/Tabs/Tabs';
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

	private readonly onToggleDropdownTabs = (tab: any) => this.setState(prevState => ({
		openedDropdownTabs: {
			...prevState.openedDropdownTabs,
			[tab]: !prevState.openedDropdownTabs[tab],
		},
	}))

	public render() {
		const {
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

		const commonTab = {
			title: <Trans i18nKey='common.Common'/>,
			content: (
				<div className={styles.header}>
					<img className={styles.header_img} src={thumb} />
					<div className={styles.header_createdAt}>
						<Trans i18nKey='Image.CreatedAt' />
						<strong className={styles.header_createdAt_date}>21.09.2018</strong>
					</div>
				</div>
			),
		};
		const packagesTab = {
			title: <Trans i18nKey='common.Packages'/>,
			content: (
				<div className={styles.dropDownWrapper}>
					<DropDownTab
						title={<Trans i18nKey='Packages.Base'/>}
						value={basePackages.length}
						isOpened={!!openedDropdownTabs.base}
						onClick={() => this.onToggleDropdownTabs('base')}
					>
						{
							basePackages.map((pack: any, index: any) => (
								<div key={index}>{pack.package}</div>
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
								<div key={index}>{pack.package}</div>
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
							addedPackages.map((pack: any, index: number) => (
								<div key={index}>{pack.package}</div>
							))
						}
					</DropDownTab>
				</div>
			),
		};
		const tabsArray = [commonTab, packagesTab];

		return (
			<div className={styles.wrapper}>
				<div className={styles.wrapper_inner}>
					<div className={styles.header_title}>{distro.name}</div>
					<div style={{height: '100%'}}>
						<Tabs
							tabs={tabsArray}
							tabStyle={{height: 50}}
							contentStyle={{
								top: 50,
								position: 'absolute',
								bottom: 0,
							}}
						/>
					</div>
				</div>
			</div>
		);
	}
}
