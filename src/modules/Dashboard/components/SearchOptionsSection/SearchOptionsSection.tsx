import cn from 'classnames';
import i18next from 'i18next';
import React from 'react';
import {Trans} from 'react-i18next';

import ImageArrowDown from 'assets/images/ImageArrowDown';

import styles from './searchOptionsSection.scss';

import IconMenu from './IconMenu/IconMenu';

import Flex from 'common/components/Flex/Flex';
import SearchInput from 'common/components/SearchInput/SearchInput';

const SearchOptionsSection: React.FC = () => (
	<Flex className={styles.wrapper}>
		<Flex alignItems='center' grow={1} className={styles.searchOptionsWrapper}>
			<div className={styles.searchInputWrapper}>
				<SearchInput
					value=''
					onChange={() => null} //todo: add function
					placeholder={i18next.t('Dashboard.Placeholders.TypeImageName')}
					height={40}
					onInputCloseBtnClick={() => null} //todo: add function
				/>
			</div>
			<Flex
				justifyContent='space-between'
				alignItems='center'
				className={styles.filters}
			>
				<Trans i18nKey='Dashboard.Filters' />
				<ImageArrowDown className={styles.img} />
			</Flex>
			<IconMenu className={styles.mosaicImg} />
			<div className={styles.border} />
			<IconMenu className={styles.menuImg} />
		</Flex>
		<Flex alignItems='center'>
			<div className={styles.button}>
				<span className={styles.text}>
					<Trans i18nKey='Dashboard.HeadToActiveImage' />
				</span>
			</div>
		</Flex>
	</Flex>
);

export default SearchOptionsSection;
