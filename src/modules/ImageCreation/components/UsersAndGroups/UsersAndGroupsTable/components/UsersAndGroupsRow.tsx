import Table from 'common/components/Table/Table';
import React, {PureComponent} from 'react';

import styles from '../styles/usersAndGroupsTable.scss';

export default class UsersTableRow extends PureComponent<any> {
	public render() {
		const {item} = this.props;

		return (
			<Table.Row className={styles.row}>
				<Table.Cell className={styles.tableCell}>
					{item.username}
				</Table.Cell>
				<Table.Cell className={styles.tableCell}>
					{item.group}
				</Table.Cell>
				<Table.Cell className={styles.tableCell}>
					{item.uid}
				</Table.Cell>
				<Table.Cell className={styles.tableCell}>
					{item.gid}
				</Table.Cell>
				<Table.Cell className={styles.tableCell}>
					{item.comment}
				</Table.Cell>
				<Table.Cell className={styles.tableCell}>
					{item.home_directory}
				</Table.Cell>
				<Table.Cell className={styles.tableCell}>
					{item.shell}
				</Table.Cell>
			</Table.Row>
		);
	}
}
