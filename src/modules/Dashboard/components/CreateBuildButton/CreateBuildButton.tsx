import React from 'react'
import styles from './createBuildButton.scss'
import { Trans } from 'react-i18next';

const CreateBuildButton = () => (
  <div className={styles.wrapper}>
    <div className={styles.button} >
      <Trans i18nKey="Dashboard.CreateNewBuild" />
    </div>
  </div>
)

export default CreateBuildButton