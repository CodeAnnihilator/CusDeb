import React, { Component } from 'react'
import { List } from 'immutable'

import InfiniteScroll from 'common/components/InfiniteScroll/InfiniteScroll'
import Lounch from './components/Lounch/Lounch'

export default class Lounches extends Component {
  componentWillMount() {
    const { requestLounches } = this.props
    requestLounches()
  }

  render() {
    const { lounches } = this.props
    if (!lounches.size) return <div>loading lounches...</div>
    return (
      <InfiniteScroll>
      {
        lounches.map((lounch, index) => (
          <Lounch
            key={index}
            data={lounch}
          />
        ))
      }
    </InfiniteScroll>
    )
  }
}