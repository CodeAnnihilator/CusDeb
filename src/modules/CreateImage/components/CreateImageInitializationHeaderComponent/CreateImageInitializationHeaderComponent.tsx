import React, {MouseEvent, PureComponent} from 'react';
import {Trans} from 'react-i18next';

import Alert from 'common/components/Alert/Alert';
import Button from 'common/components/Button/Button';
import Flex from 'common/components/Flex/Flex';

import styles from './createImageInitializationHeaderComponent.scss';

interface IProps {
	changeStep: (event: MouseEvent<HTMLButtonElement>, value: any) => void;
}

export default class CreateImageInitializationHeaderComponent extends PureComponent<IProps> {
	public render() {
		return (
			<Flex
				direction='column'
				className={styles.headerWrapper}
			>
				<Flex alignItems='center' indent='large'>
					<Flex indent='medium'>
						<Trans i18nKey='CreateImage.InitializationStep' />
					</Flex>
					<Flex indent='medium'>
						<Alert type='warning'>
							<Trans i18nKey='CreateImage.DeviceNotSelected' />
						</Alert>
					</Flex>
				</Flex>
				<Flex className={styles.headerStepInfo} indent='large' >
					<Trans i18nKey='CreateImage.HeaderSubTitle' />
				</Flex>
				<Flex indent='large'>
					<Button width={140} onClick={this.props.changeStep}>
						<span style={{textTransform: 'uppercase'}}>
							<Trans i18nKey='CreateImage.NextStep' />
						</span>
					</Button>
				</Flex>
			</Flex>
		);
	}
}
