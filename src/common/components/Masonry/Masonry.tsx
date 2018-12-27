import React, { PureComponent } from 'react'

interface IProps {
  children: any;
  breakpointCols: any;
}

interface IState {
  columnCount: number;
}

export default class Masonry extends PureComponent<IProps, IState> {

  public refs: {
    main: HTMLInputElement
  }

  constructor(props) {
    super(props)
    const { breakpointCols } = props
    const columnCount = (breakpointCols && breakpointCols.default) ? breakpointCols.default : 2
    this.state = { columnCount }
  }

  componentDidMount() {
    this.reCalculateColumnCount()
    if (window) window.addEventListener('resize', this.reCalculateColumnCount)
  }

  componentWillReceiveProps() {
    this.reCalculateColumnCount()
  }

  componentWillUnmount() {
    if (window) window.removeEventListener('resize', this.reCalculateColumnCount)
  }


  reCalculateColumnCount = () => {
    const windowWidth = window && window.innerWidth || Infinity
    let breakpointColsObject = this.props.breakpointCols

    if(parseInt(breakpointColsObject) > 0) {
      breakpointColsObject = {
        default: breakpointColsObject
      }
    }

    let matchedBreakpoint = Infinity;
    let columns = breakpointColsObject.default || 2

    for (let breakpoint in breakpointColsObject) {
      const optBreakpoint = parseInt(breakpoint)
      const isCurrentBreakpoint = optBreakpoint > 0 && windowWidth <= optBreakpoint
      if (isCurrentBreakpoint && optBreakpoint < matchedBreakpoint) {
        matchedBreakpoint = optBreakpoint
        columns = breakpointColsObject[breakpoint]
      }
    }

    columns = Math.max(1, parseInt(columns) || 1)

    if (this.state.columnCount !== columns) {
      this.setState({ columnCount: columns })
    }
  }


  itemsInColumns() {
    const currentColumnCount = this.state.columnCount;
    const itemsInColumns = new Array(currentColumnCount);
    const items = this.props.children || [];

    for (let i = 0; i < items.size; i++) {
      const columnIndex = i % currentColumnCount;

      if(!itemsInColumns[columnIndex]) {
        itemsInColumns[columnIndex] = [];
      }

      itemsInColumns[columnIndex].push(items.get(i));
    }

    return itemsInColumns;
  }

  renderColumns() {
    const childrenInColumns = this.itemsInColumns();
    const width = `${100 / childrenInColumns.length}%`;

    return childrenInColumns.map((items, i) => (
      <div key={i} style={{ width }}>
        {items}
      </div>
    ))
  }
      
  render() {
    return (
      <div style={{ display: 'flex' }}>
        { this.renderColumns() }
      </div>
    )
  }
}