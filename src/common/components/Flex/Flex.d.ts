import {ReactText, ReactNode, MouseEvent} from 'react';

export default interface IFlexProps {
    alignItems?: 'flex-end' | 'center' | 'baseline' | 'flex-start' | 'stretch' | string | null,
    basis?: ReactText,
    children?: ReactText | ReactNode | null,
    direction?: 'row' | 'column' | string | null,
    grow?: 1 | 2 | null,
    height?: ReactText,
    indent?: 'small' | 'medium' | 'large' | string | null,
    justifyContent?: 'flex-end' | 'center' | 'space-between' | 'space-around' | string | null,
    overflow?: 'hidden' | string | null,
    shrink?: 0 | 1 | 2 | null,
    width?: ReactText,
    wrap?: 'wrap' | string | null,
    className?: string | null,
    style?: object | null,
    onClick?: any,
}
