import {createSvgComponent} from 'common/helpers/entities';
import React from 'react';
import {FaCircleNotch} from 'react-icons/fa';
import {IoMdBuild} from 'react-icons/io';

import {COLORS} from 'common/constants/entities';

import controlsStyles from 'modules/Dashboard/components/ImagesCardView/ImageCard/Controls/controls.scss';

import DeleteSVG from 'assets/images/delete.svg';
import DownloadSVG from 'assets/images/download.svg';
import EditSVG from 'assets/images/edit.svg';
import TerminalSVG from 'assets/images/terminal.svg';

interface IControls {
	icon: React.ReactNode;
	onClick?: (event: any) => void | null;
	isDisabled?: boolean;
	title: string;
}

const readyStateControls: IControls[] = [
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

const errorStateControls: IControls[] = [
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

export default {
	ready: readyStateControls,
	error: errorStateControls,
};
