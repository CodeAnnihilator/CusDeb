import React from 'react';

interface IProps {
	fill?: string;
	className?: string;
}
/* tslint:disable */
const ChipIcon: React.FC<IProps> = ({fill, className}) => (
	<svg
		className={className}
		fill={fill}
		height="384pt"
		viewBox="0 0 384 384"
		width="384pt"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="m336 48h-80v-48h-32v48h-64v-48h-32v48h-80v80h-48v32h48v64h-48v32h48v80h80v48h32v-48h64v48h32v-48h80v-80h48v-32h-48v-64h48v-32h-48zm-32 80v176h-224v-224h224zm0 0"/>
		<path d="m144 144h32v32h-32zm0 0"/>
		<path d="m208 144h32v32h-32zm0 0"/>
		<path d="m208 208h32v32h-32zm0 0"/>
		<path d="m144 208h32v32h-32zm0 0"/>
	</svg>
);

export default ChipIcon;
