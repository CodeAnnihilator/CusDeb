import React, { Component } from 'react'

export default class Header extends Component {
  state = {
    isDataShown: true
  }

  toggleShowData = () => this.setState({ isDataShown: !this.state.isDataShown })

  render() {
    const { isDataShown } = this.state
    const {
      totalLounches,
      totalSuccededLaunches,
      totalUpcomingLaunches
    } = this.props

    return (
      <div>
        <h1>SpaceX Launches</h1>
        <button onClick={this.toggleShowData}>{isDataShown ? 'hide' : 'show'}</button>
        {
          isDataShown && (
            <div>
              <div>total launches: { totalLounches }</div>
              <div>succeded launches: { totalSuccededLaunches }</div>
              <div>upcoming launches: { totalUpcomingLaunches }</div>
            </div>
          )
        }
        <hr /><br />
      </div>
    )
  }
}