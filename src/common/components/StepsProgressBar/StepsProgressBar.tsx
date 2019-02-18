import cn from 'classnames';
import React, {ReactNode} from 'react';

import checkmarkSVG from 'assets/images/checkmark.svg';

import styles from './StepsProgressBar.scss';

interface IProps {
	steps: any;
	stepsComplete: number;
	style?: any;
	icon?: string;
	titles?: ReactNode[];
}

const StepsProgressBar: React.FC<IProps> = ({steps, titles, stepsComplete, icon, style}) => {
	const barStyles = style || styles;
	const barTitles = titles || steps;

	return (
		<div className={barStyles.container}>
			<div className={barStyles.body}>
				{
					steps.map((step: any, index: number) => (
						<div
							key={index}
							className={cn(
								barStyles.step,
								{
									[barStyles.step_completed]: stepsComplete > index,
									[barStyles.step_inProgress]: stepsComplete === index,
								},
							)}
						>
							<div
								className={barStyles.stepBar}
								style={{zIndex: - index + 100}}
							>
								<div className={barStyles.stepPoint}>
									<div className={barStyles.stepIcon}>
										<img
											className={barStyles.stepIconImage}
											src={icon || checkmarkSVG}
										/>
									</div>
								</div>
							</div>
							<div className={barStyles.title}>{barTitles[index]}</div>
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
