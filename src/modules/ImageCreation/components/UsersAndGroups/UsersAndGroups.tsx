import React from 'react';

import UsersAndGroupsTable from './UsersAndGroupsTable';

import styles from './usersAndGroups.scss';

const UsersAndGroups = () => (
	<div className={styles.usersAndGroups}>
		<UsersAndGroupsTable />
	</div>
);

export default UsersAndGroups;
