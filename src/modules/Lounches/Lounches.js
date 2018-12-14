import React, { Component } from 'react'

import InfiniteScroll from 'common/components/InfiniteScroll/InfiniteScroll'
import Lounch from './components/Lounch/Lounch'

export default class Lounches extends Component {
  componentWillMount() {
    const { requestLounches } = this.props
    requestLounches()
  }

  render() {
    const { lounches } = this.props
    if (!lounches.length) return <div>loading lounches...</div>
    return (
      <div>
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
      </div>
    )
  }
}