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
    const { launches } = this.props
    if (!launches.size) return <div>loading lounches...</div>
    return (
      <InfiniteScroll>
        {
          launches.map((lounch, index) => (
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