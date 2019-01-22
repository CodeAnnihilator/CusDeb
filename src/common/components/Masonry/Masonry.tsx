import React, {PureComponent} from 'react';

import styles from './masonry.scss';

interface IProps {
	children: any;
	breakpointCols: any;
}

interface IState {
	columnCount: number;
}

export default class Masonry extends PureComponent<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		const {breakpointCols} = props;
		const columnCount = (breakpointCols && breakpointCols.default) ? breakpointCols.default : 2;
		this.state = {columnCount};
	}

	public componentDidMount() {
		this.reCalculateColumnCount();
		if (window) window.addEventListener('resize', this.reCalculateColumnCount);
	}

	public componentWillReceiveProps() {
		this.reCalculateColumnCount();
	}

	public componentWillUnmount() {
		if (window) window.removeEventListener('resize', this.reCalculateColumnCount);
	}

	private readonly reCalculateColumnCount = () => {
		const windowWidth = window && window.innerWidth || Infinity;
		let breakpointColsObject = this.props.breakpointCols;

		if (parseInt(breakpointColsObject, 10) > 0) {
			breakpointColsObject = {
				default: breakpointColsObject,
			};
		}

		let matchedBreakpoint = Infinity;
		let columns = breakpointColsObject.default || 2;

		for (const breakpoint of Object.keys(breakpointColsObject)) {
			const optBreakpoint = parseInt(breakpoint, 10);
			const isCurrentBreakpoint = optBreakpoint > 0 && windowWidth <= optBreakpoint;
			if (isCurrentBreakpoint && optBreakpoint < matchedBreakpoint) {
				matchedBreakpoint = optBreakpoint;
				columns = breakpointColsObject[breakpoint];
			}
		}

		columns = Math.max(1, parseInt(columns, 10) || 1);

		if (this.state.columnCount !== columns) {
			this.setState({columnCount: columns});
		}
	}

	private itemsInColumns() {
		const currentColumnCount = this.state.columnCount;
		const itemsInColumns = new Array(currentColumnCount);
		const items = this.props.children || [];

		for (let i = 0; i < items.length; i++) {
			const columnIndex = i % currentColumnCount;

			if (!itemsInColumns[columnIndex]) {
				itemsInColumns[columnIndex] = [];
			}

			itemsInColumns[columnIndex].push(items[i]);
		}

		return itemsInColumns;
	}

	private renderColumns() {
		const childrenInColumns = this.itemsInColumns();
		const width = `${100 / childrenInColumns.length}%`;

		return childrenInColumns.map((items, i) => (
			<div className={styles.column} key={i} style={{width}}>
			{items}
			</div>
		));
	}

	public render() {
		return (
			<div style={{display: 'flex'}}>
			{ this.renderColumns() }
			</div>
		);
	}
}
