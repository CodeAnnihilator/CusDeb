import React, {Component, ReactText} from 'react';
import {Dropdown, MenuItem} from 'react-bootstrap';
import {Trans} from 'react-i18next';
import ReactList from 'react-list';

import Flex from 'common/components/Flex/Flex';
import Label from 'common/components/Label/Label';
import Pagination from 'common/components/Pagination/components/Pagination';
import Table from 'common/components/Table/Table';
import UsersTableRow from './UsersAndGroupsRow';

import {COLORS} from 'common/constants/entities';

import styles from '../styles/usersAndGroupsTable.scss';

export default class PackagesTable extends Component<any, any> {
	/* public async componentDidMount() {
		make request to api here
	} */

	private readonly createDropDownItem = (count: number) => ({
		title: count,
		onSelect: () => this.props.changeCountOfVisible(count),
	})

	private readonly dropDownItems = [20, 50, 100].map(this.createDropDownItem);

	public readonly usersAndGroupsTableRowRenderer = (index: number) => {

		const item = this.props.packages[index];

		return <UsersTableRow key={index} item={item}/>;
	}

	private readonly changePaginationStepFromInput = (value: ReactText) => {
		this.props.changePaginationStep(null, null, value);
	}

	public render() {
		const {
			changePaginationStep,
			currentStep,
			countUsersOnScreen,
			totalPages,
			packages,
			allPackagesLength,
		} = this.props;

		return (
			<Flex className={styles.tableBackground}>
				<Flex direction='column' grow={1} className={styles.tableAside}>
					<Flex className={styles.tableHeader}>
						<Trans i18nKey='ImageCreation.SelectUsersGroup'/>
					</Flex>
					<div className={styles.tableSection}>
						content
					</div>
				</Flex>
				<Flex direction='column' grow={1}>
					<Flex className={styles.tableHeader}>
						<Trans i18nKey='common.UsersAndGroups'/>
					</Flex>
					<div className={styles.tableSection}>
						<button className={styles.addUserButton}>
							<Trans i18nKey={'ImageCreation.AddUser'}/>
						</button>
						<Flex className={styles.headerContainer} direction='column'>
							<Flex alignItems='center' className={styles.сontrolsContainer}>
								<Flex indent='small'>
									<Dropdown
										pullRight
										id='1'
									>
										<Dropdown.Toggle className={styles.ааа}>
											<>
												<span className={styles.dropdownTitle}>
													{countUsersOnScreen}
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
								<Flex indent='small' alignItems='center'>
									<div>
										<Trans i18nKey={'ImageCreation.TotalUsers'}/>
									</div>
									<Label
										text={allPackagesLength}
										color={COLORS.white}
										textColor='#000'
									/>
								</Flex>
							</Flex>
						</Flex>
						<Flex>
							<Table className={styles.table}>
								<Table.HeaderRow>
									<Table.HeaderCell className={styles.tableBlankCell} />
									<Table.HeaderCell className={styles.tableHeaderCell}>
										<Trans i18nKey='UsersAndGroupsTable.Username' />
									</Table.HeaderCell>
									<Table.HeaderCell className={styles.tableHeaderCell}>
										<Trans i18nKey='UsersAndGroupsTable.Group' />
									</Table.HeaderCell>
									<Table.HeaderCell className={styles.tableHeaderCell}>
										<Trans i18nKey='UsersAndGroupsTable.Uid' />
									</Table.HeaderCell>
									<Table.HeaderCell className={styles.tableHeaderCell}>
										<Trans i18nKey='UsersAndGroupsTable.Gid' />
									</Table.HeaderCell>
									<Table.HeaderCell className={styles.tableHeaderCell}>
										<Trans i18nKey='UsersAndGroupsTable.Comment' />
									</Table.HeaderCell>
									<Table.HeaderCell className={styles.tableHeaderCell}>
										<Trans i18nKey='UsersAndGroupsTable.HomeDirectory' />
									</Table.HeaderCell>
									<Table.HeaderCell className={styles.tableHeaderCell}>
										<Trans i18nKey='UsersAndGroupsTable.Shell' />
									</Table.HeaderCell>
								</Table.HeaderRow>
								<div className={styles.content}>
									<ReactList
										itemRenderer={this.usersAndGroupsTableRowRenderer}
										length={packages.length}
										type='uniform'
									/>
								</div>
							</Table>
						</Flex>
					</div>
				</Flex>
			</Flex>
		);
	}
}
