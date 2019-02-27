import Table from 'common/components/Table/Table';
import React, {PureComponent} from 'react';

import Checkbox from 'common/components/Checkbox/Checkbox';

import {formatBytes} from 'utils/formatBytes';
import styles from '../styles/packagesTable.scss';

const generateStatus = () => !!Math.round(Math.random()); // temporary solution

export default class PackagesTableRow extends PureComponent<any> {
	public render() {
		const {item} = this.props;

		return (
			<Table.Row className={styles.row}>
				<Table.Cell className={styles.tableCellCheckboxCell}>
					<Checkbox isActive={generateStatus()} />
				</Table.Cell>
				<Table.Cell className={styles.tableCell}>
					{item.package}
				</Table.Cell>
				<Table.Cell className={styles.tableCell}>
					{item.description}
				</Table.Cell>
				<Table.Cell className={styles.tableCell}>
					{item.version}
				</Table.Cell>
				<Table.Cell className={styles.tableCell}>
					{formatBytes(Number(item.size))}
				</Table.Cell>
			</Table.Row>
		);
	}
}
