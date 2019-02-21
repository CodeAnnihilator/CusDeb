import React, {ReactNode, ReactText} from 'react';

import Flex from 'common/components/Flex/Flex';

import styles from './label.scss';

interface IProps {
	color?: string;
	style?: object;
	text: ReactNode | ReactText;
}

const Label: React.FC<IProps> = ({color, text, style}) => (
	<Flex alignItems='center'>
		<div className={styles.label} style={{...style, backgroundColor: color}}>
			<span>{text}</span>
		</div>
	</Flex>
);

Label.defaultProps = {
	text: '',
};

export default Label;
