import React from 'react'

import ImageArrowDown from 'assets/images/ImageArrowDown'

import styles from './dropDownTab.scss'

interface IProps {
  title: string;
  value: number;
  isOpened: number;
  onClick: () => void;
}

const DropDownTab: React.SFC<IProps> = ({ title, value, isOpened, onClick }) => (
  <div onClick={onClick} className={styles.wrapper}>
    <span>{title}: <span>{value}</span></span>
    <ImageArrowDown
      className={styles.img}
      style={{ transform: isOpened ? 'scaleY(-1)' : '' }}
    />
  </div>
)

export default DropDownTab