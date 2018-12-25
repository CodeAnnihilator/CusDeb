import React from 'react'

import DownloadSVG from 'assets/images/download.svg'
import TerminalSVG from 'assets/images/terminal.svg'
import DeleteSVG from 'assets/images/delete.svg'
import EditSVG from 'assets/images/edit.svg'

import styles from './controls.scss'

const Controls = () => (
  <div className={styles.controls}>
    <div className={styles.control}>
      <img className={styles.img} src={DownloadSVG} />
      <span>Download</span>
    </div>
    <div className={styles.devider} />
    <div className={styles.control}>
      <img className={styles.img} src={TerminalSVG} />
      <span>Terminal</span>
    </div>
    <div className={styles.devider} />
    <div className={styles.control}>
      <img className={styles.img} src={EditSVG} />
      <span>Edit</span>
    </div>
    <div className={styles.devider} />
    <div className={styles.control}>
      <img className={styles.img} src={DeleteSVG} />
      <span>Delete</span>
    </div>
  </div>
)

export default Controls