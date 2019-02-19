import cn from 'classnames';
import React from 'react';

import styles from './flex.scss';

import IFlexProps from './Flex.d';

const Flex: React.FC<IFlexProps> = ({
	alignItems,
	basis,
	children,
	direction,
	grow,
	height,
	indent,
	justifyContent,
	overflow,
	shrink,
	onClick,
	width,
	wrap,
	style,
	title,
	className,
	...otherProps
}) => (
		<div
			style={{
				flexBasis: basis,
				height,
				width,
				...style,
			}}
			className={cn(styles['ui-flex'], className, {
				[styles[`ui-flex--justify-content_${justifyContent}`]]: justifyContent,
				[styles[`ui-flex--align-items_${alignItems}`]]: alignItems,
				[styles[`ui-flex--direction_${direction}`]]: direction,
				[styles[`ui-flex--wrap_${wrap}`]]: wrap,
				[styles[`ui-flex--grow_${grow}`]]: grow !== null,
				[styles[`ui-flex--shrink_${shrink}`]]: shrink !== null,
				[styles[`ui-flex--indent_${indent}`]]: indent !== null,
				[styles[`ui-flex--overflow_${overflow}`]]: overflow !== null,
			})}
			onClick={onClick}
			title={title}
			{...otherProps}
		>
			{children}
		</div>
	);

Flex.defaultProps = {
	alignItems: null,
	basis: undefined,
	children: null,
	direction: null,
	grow: null,
	height: undefined,
	onClick: undefined,
	indent: null,
	justifyContent: null,
	overflow: null,
	shrink: null,
	width: undefined,
	wrap: null,
	className: '',
	style: {},
};

export default Flex;
