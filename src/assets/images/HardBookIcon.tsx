import React from 'react';

interface IProps {
	fill?: string;
	className?: string;
	style?: object;
}

const HardBookIcon: React.SFC<IProps> = ({fill, className, style}) => (
	<svg
		fill={fill}
		className={className}
		style={style}
		width='612px'
		height='612px'
		viewBox='0 0 612 612'
	>
		<g>
			<path
				d='M464,64v416H80c-17.672,0-32-14.312-32-32s14.328-32,32-32h352V0H80C44.656,0,16,28.656,16,64v384
				c0,35.344,28.656,64,64,64h416V64H464z'
			/>
		</g>
	</svg>
);

export default HardBookIcon;
