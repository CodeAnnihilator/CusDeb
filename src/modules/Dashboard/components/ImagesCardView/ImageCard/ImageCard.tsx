import cn from 'classnames';
import moment from 'moment';
import React, {Component, ReactNode, SyntheticEvent} from 'react';
import {Trans} from 'react-i18next';

import brandsLogos from 'assets/images/brandsLogos';
import ProgressBar from 'common/components/ProgressBar/ProgressBar';
import {COLORS} from 'common/constants/entities';
import StateControls from './imageCardParts';

import Controls from './Controls/Controls';

import ErrorSignSVG from 'assets/images/block-sign.svg';
import CheckSignSVG from 'assets/images/check.svg';
import ExpandIconSVG from 'assets/images/down-arrow.svg';

import styles from './imageCard.scss';

interface IProps {
	image: {
		name: string;
		notes: string;
		notes_filtered?: ReactNode;
		build: string;
		distro: {
			full_name: string;
			full_name_filtered?: ReactNode;
		};
		started_at: string;
		thumb: string;
		targetdevice: {
			title: string;
			title_filtered?: ReactNode;
			icon?: string;
		};
	};
	onSelect: (name: string) => void;
	isActive: boolean;
}

interface IState {
	isNotesExpanded: boolean;
}

export default class ImageCard extends Component<IProps, IState> {
	public state: IState = {
		isNotesExpanded: false,
	};

	public static defaultProps = {
		image: {
			thumb: '',
		},
	};

	protected onSelect = () => {
		const {image, onSelect} = this.props;
		onSelect(image.name);
	}

	protected onNoteExpand = () => {
		this.setState({isNotesExpanded: !this.state.isNotesExpanded});
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
				<Controls icons={StateControls.error}/>
			</div>
		);

		const readyJSX = (animated?: string) => (
			<div className={cn(styles.ready_box, {[styles.animated_box]: !!animated})}>
				<Controls icons={StateControls.ready}/>
			</div>
		);

		let jsx: string | React.ReactNode = <React.Fragment />;
		switch (status) {
			case 'error': {
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
			case 'ready': {
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
		const {isNotesExpanded} = this.state;
		const {thumb, targetdevice, notes, notes_filtered, distro, started_at} = image;

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
					<div className={styles.titles_main}>{ distro.full_name_filtered }</div>
					<div className={styles.titles_sub}>
						<Trans i18nKey='Image.StartedAt' />: {moment(started_at).fromNow()}
					</div>
				</div>
				<div className={styles.device}>
					{ targetdevice.icon &&
						<img src={brandsLogos[targetdevice.icon]} className={styles.device_icon} alt=''/>
					}
					<span className={styles.device_name}>{targetdevice.title_filtered}</span>
				</div>
				<div className={cn(styles.note, {[styles.note_open]: isNotesExpanded})}>
					{
						notes ?
							<>
								{notes.length > 270 ?
									<>
										<div className={styles.note_wrapper}>{notes_filtered}</div>
										<div onClick={this.onNoteExpand} className={styles.note_expand}>
											{isNotesExpanded ? 'contract' : 'expand'} notes text
											<img className={styles.note_expand_icon} src={ExpandIconSVG} alt=''/>
										</div>
									</>
									: <div>{notes_filtered}</div>
								}
							</>
						: <Trans i18nKey='Dashboard.noDescription' />
					}
				</div>
				{this.renderContent()}
			</div>
		);
	}
}
