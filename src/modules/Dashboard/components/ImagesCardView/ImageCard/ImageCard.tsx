import cn from 'classnames';
import moment from 'moment';
import React, {Component, SyntheticEvent} from 'react';
import {Trans} from 'react-i18next';
import {FaCircleNotch} from 'react-icons/fa';
import {IoMdBuild} from 'react-icons/io';

import PreLoader from 'common/components/ProgressBar/ProgressBar';
import {COLORS} from 'common/constants/entities';
import {createSvgComponent} from 'common/helpers/entities';

import controlsStyles from 'modules/Dashboard/components/ImagesCardView/ImageCard/Controls/controls.scss';

import Controls from './Controls/Controls';

import DeleteSVG from 'assets/images/delete.svg';
import DownloadSVG from 'assets/images/download.svg';
import EditSVG from 'assets/images/edit.svg';
import TerminalSVG from 'assets/images/terminal.svg';

import styles from './imageCard.scss';

interface IProps {
	image: {
		name: string;
		notes: string;
		build: string;
		distro: {
			full_name: string;
		};
		started_at: string;
		thumb: string;
	};
	onSelect: (name: string) => void;
	isActive: boolean;
}

interface IControls {
	icon: React.ReactNode;
	onClick?: (event: SyntheticEvent) => void | null;
	isDisabled?: boolean;
	title: string;
}

export default class ImageCard extends Component<IProps> {
	public static defaultProps = {
		image: {
			thumb: '',
		},
	}; /* wtf? it's doesnt't works! */

	private readonly readyStateControls: IControls[] = [
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
		},
	]; /* todo : change icons at react-icons and redraw a design */

	private readonly errorStateControls: IControls[] = [
		{
			icon: (
				<div className={controlsStyles.reactImg}>
					<FaCircleNotch size={16} fill={COLORS.black} />
				</div>
			),
			title: 'ErrorLog',
		},
		{
			icon: (
				<div className={controlsStyles.reactImg}>
					<IoMdBuild size={16} fill={COLORS.gray600} />
				</div>
			),
			title: 'Rebuild',
		},
		{
			icon: createSvgComponent(controlsStyles.img, DeleteSVG),
			title: 'Delete',
		},
	];

	protected onSelect = () => {
		const {image, onSelect} = this.props;
		onSelect(image.name);
	}

	public renderContent = () => {
		const {styleGetter} = this;
		const {image} = this.props;
		const [status, activeStep, totalSteps] = ['status', 'activeStep', 'totalSteps']
			.map(item => image.build[item]);
		const notes = image.notes;

		let jsx: string | React.ReactNode = <React.Fragment />;

		switch (status) {
			case 'error': {
				jsx = (
					<div className={styleGetter('error-box')}>
						<div className={styleGetter('error-box_header')}>
							<Trans i18nKey='Dashboard.ImageError' />
						</div>
						<div className={styleGetter('error-box_container')}>
							<span><Trans i18nKey='Dashboard.issueWarning' /></span>
							{' '}
							<a href='/dashboard'><Trans i18nKey='Dashboard.reportAboutIssue' /></a>
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
					className={cn(
						styles.note,
						{[styleGetter('note--error')]: status === 'error'},
					)}
					onClick={this.onSelect}
				>
					{jsx}
				</div>
				{status === 'ready' && <Controls icons={this.readyStateControls}/>}
				{status === 'error' && <Controls icons={this.errorStateControls}/>}
			</>
		);
	}

	private readonly styleGetter = (tail: string) => styles[tail];

	public render() {
		const {image, isActive} = this.props;
		const distro = image.distro.full_name;
		const startedAt = image.started_at;
		const thumb = image.thumb;

		return (
			<div ref='test'className={cn(styles.wrapper, {[styles.active]: isActive})}>
				<div className={styles.header} onClick={this.onSelect}>
					<img className={styles.header_img} src={ thumb } />
					<div className={cn(styles.header_text, {[styles.header_text__active]: isActive})}>
						<div className={styles.header_text_title}>{ distro }</div>
						<div className={styles.header_text_date}>
							<Trans i18nKey='Image.StartedAt' />: { moment(startedAt).format('L') }
						</div>
					</div>
				</div>
				{this.renderContent()}
			</div>
		);
	}
}
