import cn from 'classnames';
import React from 'react';

import Flex from 'common/components/Flex/Flex';

import styles from './slider.scss';

interface IProps {
	slides: any[];
	currentSlide: number;
	onSlide?: any;
}

const Slider: React.FC<IProps> = ({slides, currentSlide, onSlide}) => {
	const slidePosition = (index: number) => {
		const diff = (index + 1) - (currentSlide + 1);
		if (index !== currentSlide) {
			return {
				transform:
					`translateX(
						calc(
							${diff * 100}%
							${Math.sign(diff) < 0 ? ' - ' : ' + '}50px
						)
					)`,
			};
		}
	};

	const navLeft = () => {
		if (currentSlide > 0) onSlide(currentSlide - 1);
	};

	const navRight = () => {
		if (currentSlide < slides.length - 1) onSlide(currentSlide + 1);
	};

	return (
		<Flex justifyContent='center'>
			<Flex justifyContent='center' className={styles.mainContainer}>
				{
					slides.map((slide: any, index) => (
						<div
							key={index}
							className={cn(
								styles.slide, {
								[styles.slide_active]: index === currentSlide,
							})}
							style={slidePosition(index)}
						>
							{slide}
						</div>
					))
				}
				<div onClick={navLeft} className={styles.navLeftArea}>
					<div className={styles.fadeLeft}/>
					<div
						className={cn(
							styles.arrowLeft, {
							[styles.arrowLeft_hiden]: currentSlide === 0 && slides.length > 0},
						)}
					/>
				</div>
				<div onClick={navRight} className={styles.navRightArea}>
					<div className={styles.fadeRight}/>
					<div
						className={cn(
							styles.arrowRight, {
							[styles.arrowRight_hiden]: currentSlide === slides.length - 1},
						)}
					/>
				</div>
			</Flex>
		</Flex>
	);
};

export default Slider;
