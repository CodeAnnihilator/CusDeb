import React, { Component } from 'react'
import cn from 'classnames'
import Masonry from 'react-masonry-css'

import styles from './dashboard.scss'

import DebianSVG from 'assets/images/distributive/debian.svg'
import UbuntuSVG from 'assets/images/distributive/ubuntu.svg'
import DevuanSVG from 'assets/images/distributive/devuan.svg'

const distributives = [DebianSVG, UbuntuSVG, DevuanSVG]

import ListSVG from 'assets/images/list.svg'
import DotMatrix from 'assets/images/dot-matrix.svg'
import DownloadSVG from 'assets/images/download.svg'
import EditSVG from 'assets/images/edit.svg'
import WritingSVG from 'assets/images/writing.svg'
import TerminalSVG from 'assets/images/terminal.svg'
import DeleteSVG from 'assets/images/delete.svg'

import textSamples from './textSamples'

const breakpointColumnsObj = {
  default: 3,
  1400: 2,
  1150: 1
}

export default class Dashboard extends Component<{}> {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.byttonContainer}>
          <div className={styles.createBuildButton}>CREATE NEW BUILD</div>
        </div>
        <div className={styles.viewTabs}>
          <div className={cn(styles.viewTab, styles.viewTab_active)}>
            <img className={styles.viewTab_img} src={ListSVG} />
          </div>
          <div className={styles.viewTab}>
            <img className={styles.viewTab_img} src={DotMatrix} />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.images}>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className={styles.myMasonryGrid}
            columnClassName={styles.myMasonryGridColumn}
          >
            {
              Array.from({ length: 10 }, () => '').map((_, index) => {
                return (
                  <div key={index} className={styles.image}>
                    <div className={styles.image_header}>
                      <img className={styles.image_header_img} src={distributives[Math.round(Math.random() * 3)]} />
                      <div className={styles.image_header_text}>
                        <div className={styles.image_header_text_title}>DEVUAN 1 "JESSIE" (32-BIT)</div>
                        <div className={styles.image_header_text_date}>Created at: 21.09.2018</div>
                      </div>
                    </div>
                    <div className={styles.image_note}>{ textSamples[Math.round(Math.random() * 2)] }</div>
                    <div className={styles.controls}>
                      <div className={styles.controls_button}>
                        <img className={styles.controls_button_img} src={DownloadSVG} />
                        <span className={styles.controls_button_text}>Download</span>
                      </div>
                      <div className={styles.controls_devider} />
                      <img className={styles.controls_img} src={EditSVG} />
                      <img className={styles.controls_img} src={WritingSVG} />
                      <img className={styles.controls_img} src={TerminalSVG} />
                      <img className={styles.controls_img} src={DeleteSVG} />
                    </div>
                  </div>
                )
              })
            }
          </Masonry>
          </div>
          <div className={styles.descriptionBar}>
            BAR
          </div>
        </div>
      </div>
    )
  }
}