import React from 'react';
import {Trans} from 'react-i18next';
import styles from './createBuildButton.scss';

const CreateBuildButton = () => (
	<div className={styles.wrapper}>
		<div className={styles.button} >
			<Trans i18nKey='Dashboard.CreateNewBuild' />
		</div>
	</div>
);

export default CreateBuildButton;
