import React, {ReactNode, ReactText} from 'react';

import Flex from 'common/components/Flex/Flex';

import styles from './label.scss';

interface IProps {
	color?: string;
	style?: object;
	text: ReactNode | ReactText;
	textColor?: string;
}

const Label: React.FC<IProps> = ({color, text, style, textColor}) => (
	<Flex alignItems='center'>
		<div className={styles.label} style={{...style, backgroundColor: color}}>
			<span style={{color: textColor}}>{text}</span>
		</div>
	</Flex>
);

Label.defaultProps = {
	text: '',
	textColor: '#FFF',
};

export default Label;
