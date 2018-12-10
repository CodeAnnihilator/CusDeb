import React, { Component } from 'react'

export default class Header extends Component {
  state = {
    isDataShown: true
  }

  toggleShowData = () => this.setState({ isDataShown: !this.state.isDataShown })

  render() {

    const { isDataShown } = this.state
    const { totalLounches } = this.props

    return (
      <div>
        <h1>SpaceX Lounches</h1>
        <button onClick={this.toggleShowData}>{isDataShown ? 'hide' : 'show'}</button>
        { isDataShown &&  <div>total lounches: {totalLounches}</div> }
      </div>
    )
  }
}