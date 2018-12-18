import React, { Component } from 'react'

interface IProps {
  children: any
}

export default class InfiniteScroll extends Component<IProps> {

  public refs: {
    scroll: HTMLDivElement
  }

  state = {
    totalCount: this.props.children.length,
    currentCount:3,
    offset:3
  }

  componentDidMount() {
    window.addEventListener('scroll', this.loadOnScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.loadOnScroll)
  }

  private loadOnScroll = (): void => {
    const { currentCount, totalCount } = this.state
    const { innerHeight, innerWidth } = window
    const { scroll } = this.refs
    if (currentCount == totalCount) return
    const rect = scroll.getBoundingClientRect()
    const isAtEnd = rect.bottom <= innerHeight && rect.right <= innerWidth
    if (isAtEnd) this.setState({ currentCount: currentCount + 3 })
  
  }

  render() {
    const { currentCount, totalCount } = this.state
    const { children } = this.props
    return (
      <div ref='scroll'>
        { children.filter((_, index) => index <= currentCount) }
        { currentCount < totalCount && <div>Please wait. Loading...</div> }
      </div>
    )
  }
}