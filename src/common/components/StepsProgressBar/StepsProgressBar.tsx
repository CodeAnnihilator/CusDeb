import cn from 'classnames';
import React, {ReactNode} from 'react';

import checkmarkSVG from 'assets/images/checkmark.svg';

import styles from './StepsProgressBar.scss';

interface IProps {
	steps: string[];
	stepsComplete: number;
}

const StepsProgressBar: React.FC<IProps> = ({steps, stepsComplete}) => {
	const stepClass = (index: number) => ({
		[styles.step_completed]: stepsComplete > index,
		[styles.step_inProgress]: stepsComplete === index,
	});

	return (
		<div className={styles.container}>
			<div className={styles.body}>
				{
					steps.map((step: any, index: number) => (
						<div
							className={cn(styles.step, stepClass(index))}
							style={{zIndex: - index + 100}}
							key={index}
						>
							<div className={styles.stepPoint}>
								<div className={styles.stepIcon}>
									{
										stepsComplete > index && (
											<img
												className={styles.stepIconImage}
												src={checkmarkSVG}
											/>
										)
									}
								</div>
								<div className={styles.title}>{step}</div>
							</div>
						</div>
					))
				}
			</div>
		</div>
	);
};

StepsProgressBar.defaultProps = {
	steps: [],
	stepsComplete: 0,
};

export default StepsProgressBar;
