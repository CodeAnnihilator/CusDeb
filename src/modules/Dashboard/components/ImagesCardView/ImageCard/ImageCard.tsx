import React, {Component, SyntheticEvent} from 'react';
import moment from 'moment';
import cn from 'classnames';
import {Map, List} from 'immutable';
import Controls from './Controls/Controls';
import styles from './imageCard.scss';
import PreLoader from 'common/components/ProgressBar/ProgressBar';
import {COLORS} from 'common/constants/entities';
import DownloadSVG from 'assets/images/download.svg';
import TerminalSVG from 'assets/images/terminal.svg';
import DeleteSVG from 'assets/images/delete.svg';
import EditSVG from 'assets/images/edit.svg';
import controlsStyles from 'modules/Dashboard/components/ImagesCardView/ImageCard/Controls/controls.scss'
import {createSvgComponent} from 'common/helpers/entities';
import {FaCircleNotch} from 'react-icons/fa';
import {IoMdBuild} from 'react-icons/io';

interface IProps {
  image: Map<any, any>;
  onSelect: (name: string) => void;
  isActive: boolean;
  images: List<any>;
}

interface IControls {
	icon: React.ReactNode,
	onClick?: (event: SyntheticEvent) => void | null;
	isDisabled?: boolean,
	title: string
}

export default class ImageCard extends Component<IProps> {
	static defaultProps = {
		image: {
		  	thumb: '',
		}
	}; /* wtf? it's doesnt't works! */

	readyStateControls: IControls[] = [
		{
			icon: createSvgComponent(controlsStyles.img, DownloadSVG),
			title: 'Download',
		},
		{
			icon: createSvgComponent(controlsStyles.img, TerminalSVG),
			title: 'Terminal',
		},
		{
			icon: createSvgComponent(controlsStyles.img, EditSVG),
			title: 'Edit',
		},
		{
			icon: createSvgComponent(controlsStyles.img, DeleteSVG),
			title: 'Delete',
		}
	] /* todo : change icons at react-icons and redraw a design */

	errorStateControls: IControls[] = [
		{
			icon: <div className={controlsStyles.reactImg}><FaCircleNotch size={16} fill={COLORS.black} /></div>, 
			title: 'Error log',
		},
		{
			icon: <div className={controlsStyles.reactImg}><IoMdBuild size={16} fill={COLORS.gray600} /></div>,
			title: 'Rebuild',
		},
		{
			icon: createSvgComponent(controlsStyles.img, DeleteSVG),
			title: 'Delete',
		},
	]
	
	onSelect = () => {
		const {image, onSelect} = this.props;

		onSelect(image.get('name'));
  	}

  renderContent = () => {
	const {styleGetter} = this;
	const {image} = this.props;
	const [status, activeStep, totalSteps] = ['status', 'activeStep', 'totalSteps'].map(item => image.getIn(['build', item]));
	const notes = image.get('notes');

	let jsx = <React.Fragment />;

	switch (status) {
		case 'error': {
			jsx = (
				<div className={styleGetter('error-box')}>
					<div className={styleGetter('error-box_header')}>
						Oops, something went wrong
					</div>
					<div>
						if the problem persists, please
						{' '}
						<a href="/dashboard">
							report an issue
						</a>
					</div>
				</div>
			);
			break;
		}
		case 'building': {
			jsx = (
				<PreLoader
					height={50}
					step={activeStep}
					textColor={COLORS.gray600}
					stepsCount={totalSteps}
				/>
			);
			break;
		}
		default: jsx = notes;
	}

	return (
		<>
			<div
				className={cn(styles.note, {[styleGetter('note--error')]: status === 'error'})}
				onClick={this.onSelect}
			>
				{jsx}
			</div>
			{status === 'ready' && <Controls icons={this.readyStateControls}/>}
			{status === 'error' && <Controls icons={this.errorStateControls}/>}
		</>
	)
	};

  styleGetter = (tail: string) => styles[tail];

  render() {
	const {image, isActive} = this.props;
	const distro = image.getIn(['distro', 'full_name']);
	const startedAt = image.get('started_at');
	const thumb = image.get('thumb');

	return (
		<div ref='test'className={cn(styles.wrapper, {[styles.active]: isActive})}>
			<div className={styles.header} onClick={this.onSelect}>
				<img className={styles.header_img} src={ thumb } />
				<div className={cn(styles.header_text, {[styles.header_text__active]: isActive})}>
					<div className={styles.header_text_title}>{ distro }</div>
					<div className={styles.header_text_date}>Started at: { moment(startedAt).format('L') }</div>
				</div>
			</div>
			{this.renderContent()}
		</div>
	)
  }
}

