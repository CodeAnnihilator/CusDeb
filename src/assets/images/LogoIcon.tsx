import React from 'react';

interface IProps {
	fill?: string;
	className?: string;
	style?: object;
}
/* tslint:disable */
const LogoIcon: React.FC<IProps> = ({fill, className, style}) => (
	<svg
		fill={fill}
		className={className}
		style={style}
		width="216.318px"
		height="216.318px"
		viewBox="0 0 216.318 216.318"
	>
		<path d="M196.868,78.483l-36.379,16.631c3.422,7.485,5.157,15.5,5.157,23.821c0,31.641-25.742,57.383-57.383,57.383
		s-57.549-25.742-57.549-57.383c0-27.913,20.216-51.223,46.216-56.331V86.31l73.617-43.155L96.93,0v22.172
		c-48,5.457-86.216,46.767-86.216,96.764c0,53.697,43.769,97.383,97.466,97.383s97.424-43.686,97.424-97.383
		C205.604,104.835,202.693,91.226,196.868,78.483z"/>
	</svg>
);

export default LogoIcon;