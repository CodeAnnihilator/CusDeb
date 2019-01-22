import React from 'react';
import {createPortal} from 'react-dom';

interface IProps {
	className?: string;
}

import styles from './popup.scss';

export default class PopupContainer extends React.Component<IProps> {
	private readonly modalRoot = HTMLDivElement as any;
	private readonly el = HTMLDivElement as any;

	constructor(props: any) {
		super(props);
		this.modalRoot = document.getElementById('modal-container');
		this.el = document.createElement('div');
		this.el.className = styles['popup-layout'];
	}

	public componentDidMount() {
		this.modalRoot.appendChild(this.el);
	}

	public componentWillUnmount() {
		this.modalRoot.removeChild(this.el);
	}

	public render() {
		return createPortal(
			<div className={styles['popup-container']}>
				{this.props.children}
			</div>,
			this.el,
		);
	}
}
