import React from 'react';
import {Trans} from 'react-i18next';

import styles from './createBuildButton.scss';

import {NavLink} from 'react-router-dom';

const CreateBuildButton = () => (
	<div className={styles.wrapper}>
		<NavLink
			to='/user/create'
			className={styles.button}
		>
			<Trans i18nKey='Dashboard.CreateNewBuild' />
		</NavLink>
	</div>
);

export default CreateBuildButton;
