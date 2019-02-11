import cn from 'classnames';
import moment from 'moment';
import React, {Component, SyntheticEvent} from 'react';
import {Trans} from 'react-i18next';
import {FaCircleNotch} from 'react-icons/fa';
import {IoMdBuild} from 'react-icons/io';

import ProgressBar from 'common/components/ProgressBar/ProgressBar';
import {COLORS} from 'common/constants/entities';
import {createSvgComponent} from 'common/helpers/entities';

import controlsStyles from 'modules/Dashboard/components/ImagesCardView/ImageCard/Controls/controls.scss';

import Controls from './Controls/Controls';

import ErrorSignSVG from 'assets/images/block-sign.svg';
import CheckSignSVG from 'assets/images/check.svg';
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
		targetdevice: {
			full_name: string;
			device_icon?: string;
		};
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
	};

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
				<FaCircleNotch size={18} fill={COLORS.black} />
			),
			title: 'ErrorLog',
		},
		{
			icon: (
				<IoMdBuild size={18} fill={COLORS.gray600} />
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

		const errorJSX = (animated?: string) => (
			<div className={cn(styles.error_box, {[styles.animated_box]: !!animated})}>
				<div className={styles.error_content}>
					<div className={styleGetter('error_box_header')}>
						<Trans i18nKey='Dashboard.ImageError' />
					</div>
					<div className={styles.error_box_subheader}>
						<span><Trans i18nKey='Dashboard.issueWarning' /></span>
						{' '}
						<a href='/dashboard'><Trans i18nKey='Dashboard.reportAboutIssue' /></a>
					</div>
				</div>
				<Controls icons={this.errorStateControls}/>
			</div>
		);

		const readyJSX = (animated?: string) => (
			<div className={cn(styles.ready_box, {[styles.animated_box]: !!animated})}>
				<Controls icons={this.readyStateControls}/>
			</div>
		);

		let jsx: string | React.ReactNode = <React.Fragment />;
		switch (status) {
			case 'error': jsx = errorJSX(); break;
			case 'build_error': {
				jsx = (
					<>
						<div className={styles.sign} style={{backgroundColor: '#DF7979'}}>
							<img className={styles.sign_img} src={ErrorSignSVG} alt=''/>
						</div>
						{errorJSX('animated')}
					</>
				);
				break;
			}
			case 'building': {
				jsx = (
					<div style={{padding: '0px 10px'}}>
						<ProgressBar
							height={44}
							step={activeStep}
							textColor={COLORS.gray600}
							stepsCount={totalSteps}
						/>
					</div>
				);
				break;
			}
			case 'build_ready': {
				jsx = (
					<>
						<div className={styles.sign} style={{backgroundColor: '#7FE079'}}>
							<img className={styles.sign_img} src={CheckSignSVG} alt=''/>
						</div>
						{readyJSX('animated')}
					</>
				);
				break;
			}
			default: jsx = readyJSX(); break;
		}

		return <div style={{minHeight: 40}}>{jsx}</div>;
	}

	private readonly styleGetter = (tail: string) => styles[tail];

	public render() {
		const {image, isActive} = this.props;
		const distro = image.distro.full_name;
		const startedAt = image.started_at;
		const {thumb, targetdevice, notes} = image;

		return (
			<div ref='test' className={cn(styles.wrapper, {[styles.active]: isActive})}>
				<div className={styles.header}>
					<div
						onClick={this.onSelect}
						className={cn(
							styles.selectButton, {[
							styles.selectButtonActive]: isActive,
						})}
					> {isActive ? <Trans i18nKey={'common.selected'} /> : <Trans i18nKey={'common.select'} />}
					</div>
				</div>
				<div className={styles.titles}>
					<img className={styles.titles_img} src={ thumb } />
					<div className={styles.titles_main}>{ distro }</div>
					<div className={styles.titles_sub}>
						<Trans i18nKey='Image.StartedAt' />: { moment(startedAt).fromNow() }
					</div>
				</div>
				<div className={styles.device}>
					<img src={targetdevice.device_icon} className={styles.device_icon} alt=''/>
					<span className={styles.device_name}>{targetdevice.full_name}</span>
				</div>
				<div className={styles.note}>
					{notes ? notes : <Trans i18nKey='Dashboard.noDescription' />}
				</div>
				{this.renderContent()}
			</div>
		);
	}
}
