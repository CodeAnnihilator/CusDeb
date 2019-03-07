import React from 'react';

import styles from './buildOptionsSection.scss';

import CreateBuildButtonContainer from 'modules/Dashboard/containers/CreateBuildButtonContainer';
import ImagesTabMenuContainer from 'modules/Dashboard/containers/ImagesTabMenuContainer';

const BuildOptionsSection: React.FC = () => (
	<div className={styles.wrapper}>
		<CreateBuildButtonContainer />
		<ImagesTabMenuContainer />
	</div>
);

export default BuildOptionsSection;
