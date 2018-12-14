import React, { Component } from 'react'

export default class InfiniteScroll extends Component {
  state = {
    total: this.props.children.length,
    currentCount:3,
    offset:3
  }

  componentWillReceiveProps(nextProps) {
    
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.loadOnScroll)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.loadOnScroll);
  }

  loadOnScroll = () => {

    const { currentCount, totalCount } = this.state

    if (currentCount == totalCount) return

    const el = this.refs.scroll
    const rect = el.getBoundingClientRect()
    const isAtEnd = rect.bottom <= window.innerHeight && rect.right <= window.innerWidth

    if (isAtEnd) this.setState({ currentCount: this.state.currentCount + 3 })
  
  }

  render() {
    const { currentCount, totalCount } = this.state
    return (
      <div ref='scroll'>
        { this.props.children.filter((_, index) => index <= currentCount) }
        { currentCount < totalCount && <div>Please wait. Loading...</div> }
      </div>
    )
  }
}