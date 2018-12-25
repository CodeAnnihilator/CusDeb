import React from 'react'

interface IProps {
  fill?: string;
  className?: string;
}

const ImageDotMatrix: React.SFC<IProps> = ({ fill, className }) => (
  <svg
    viewBox='0 0 19 19'
    fill={fill}
    className={className}
  >
    <g>
      <circle cx='2.5' cy='16.5' r='2.5'/>
      <circle cx='2.5' cy='9.5' r='2.5'/>
      <circle cx='2.5' cy='2.5' r='2.5'/>
      <circle cx='9.5' cy='16.5' r='2.5'/>
      <circle cx='9.5' cy='9.5' r='2.5'/>
      <circle cx='9.5' cy='2.5' r='2.5'/>
      <circle cx='16.5' cy='16.5' r='2.5'/>
      <circle cx='16.5' cy='9.5' r='2.5'/>
      <circle cx='16.5' cy='2.5' r='2.5'/>
    </g>
  </svg>
)

export default ImageDotMatrix