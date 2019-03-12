import React from 'react';

interface IProps {
	className: any;
}

const IconMenu: React.FC<IProps> = ({className}) => (
	<div className={className}>
		<span /><span /><span /><span />
	</div>
);

export default IconMenu;
