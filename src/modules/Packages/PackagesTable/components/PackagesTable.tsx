import React, {Component, ReactText} from 'react';
import {Dropdown, MenuItem} from 'react-bootstrap';
import {Trans} from 'react-i18next';
import ReactList from 'react-list';

import i18n from 'locales/i18nextConfig';

import Flex from 'common/components/Flex/Flex';
import Label from 'common/components/Label/Label';
import Pagination from 'common/components/Pagination/components/Pagination';
import Table from 'common/components/Table/Table';
import PackagesTableRow from './PackagesTableRow';

import {COLORS} from 'common/constants/entities';

import styles from '../styles/packagesTable.scss';

export default class PackagesTable extends Component<any, any> {
	/* public async componentDidMount() {
		make request to api here
	} */

	private readonly createDropDownItem = (count: number) => ({
		title: count,
		onSelect: () => this.props.changeCountOfVisible(count),
	})

	private readonly dropDownItems = [20, 50, 100].map(this.createDropDownItem);

	public readonly packageTableRowRenderer = (index: number) => {

		const item = this.props.packages[index];

		return <PackagesTableRow key={index} item={item}/>;
	}

	private readonly changePaginationStepFromInput = (value: ReactText) => {
		this.props.changePaginationStep(null, null, value);
	}

	public render() {
		const {
			changePaginationStep,
			currentStep,
			countPackagesOnScreen,
			totalPages,
			packages,
			allPackagesLength,
		} = this.props;

		return (
			<Flex direction='column' grow={1}>
				<Flex className={styles.headerContainer} direction='column'>
					<Flex className={styles.tableHeader}>
						<Trans i18nKey='common.Packages'/>
					</Flex>
					<Flex alignItems='center' className={styles.сontrolsContainer}>
						<Flex indent='small'>
							<Dropdown
								pullRight
								id='1'
							>
								<Dropdown.Toggle className={styles.ааа}>
									<>
										<span className={styles.dropdownTitle}>
											{countPackagesOnScreen}
											{' '}
											<Trans i18nKey='Packages.PerPage' />
										</span>
									</>
								</Dropdown.Toggle>
								<Dropdown.Menu>
									{this.dropDownItems.map(({onSelect, title}) => (
										<MenuItem
											key={title}
											eventKey={title}
											onSelect={onSelect as any}
										>
											{title}
										</MenuItem>
									))}
								</Dropdown.Menu>
							</Dropdown>
						</Flex>
						<Flex indent='small'>
							<Pagination
								onClick={changePaginationStep}
								total={totalPages}
								current={currentStep}
								separator={(
									<span className={styles.separator}>
										<Trans i18nKey='common.From' />
									</span>
								)}
								onInputChange={this.changePaginationStepFromInput}
							/>
						</Flex>
						<Flex indent='small'>
							<Label
								text={i18n.t('common.package', {count: allPackagesLength})}
								color={COLORS.blueCreateImageSelect}
							/>
						</Flex>
					</Flex>
				</Flex>
				<Flex>
					<Table className={styles.table}>
						<Table.HeaderRow>
							<Table.HeaderCell className={styles.tableCellCheckboxCell} />
							<Table.HeaderCell className={styles.tableHeaderCell}>
								<Trans i18nKey='Packages.PackageName' />
							</Table.HeaderCell>
							<Table.HeaderCell className={styles.tableHeaderCell}>
								<Trans i18nKey='Packages.Description' />
							</Table.HeaderCell>
							<Table.HeaderCell className={styles.tableHeaderCell}>
								<Trans i18nKey='Packages.Version' />
							</Table.HeaderCell>
							<Table.HeaderCell className={styles.tableHeaderCell}>
								<Trans i18nKey='Packages.Size' />
							</Table.HeaderCell>
						</Table.HeaderRow>
						<div className={styles.content}>
							<ReactList
								itemRenderer={this.packageTableRowRenderer}
								length={packages.length}
								type='uniform'
							/>
						</div>
					</Table>
				</Flex>
			</Flex>
		);
	}
}
