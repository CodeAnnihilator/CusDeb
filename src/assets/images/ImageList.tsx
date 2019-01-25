import React from 'react';

interface IProps {
	fill?: string;
	className?: string;
}
/* tslint:disable */
const ImageList: React.SFC<IProps> = ({fill, className}) => (
	<svg
		viewBox='0 0 19 19'
		fill={fill}
		className={className}
	>
		<g>
			<path d='M16.75,14.5h-7c-1.103,0-2,0.897-2,2s0.897,2,2,2h7c1.103,0,2-0.897,2-2S17.853,14.5,16.75,14.5z'/>
			<path d='M16.75,7.5h-7c-1.103,0-2,0.897-2,2s0.897,2,2,2h7c1.103,0,2-0.897,2-2S17.853,7.5,16.75,7.5z'/>
			<path d='M16.75,0.5h-7c-1.103,0-2,0.897-2,2s0.897,2,2,2h7c1.103,0,2-0.897,2-2S17.853,0.5,16.75,0.5z'/>
			<circle cx='2.75' cy='16.5' r='2.5'/>
			<circle cx='2.75' cy='9.5' r='2.5'/>
			<circle cx='2.75' cy='2.5' r='2.5'/>
		</g>
	</svg>
);

export default ImageList;
