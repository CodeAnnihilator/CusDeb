import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

import FadedText from 'common/components/Preloaders/FadedText/FadedText'

export default class IframeLoader extends PureComponent {
  state = {
    isLoading: true
  }
  componentDidMount() {
    this.refs.iframe.addEventListener('load', this.props.onLoad)
  }
  componebntWillUnmount() {
    this.refs.iframe.removeEventListener('load', this.props.onLoad)
  }
  
  componentDidUpdate() {
    console.dir(ReactDOM.findDOMNode(this.refs.iframe))
  }

  onLoad = (e) => this.setState({ isLoading: false })

  render() {
    const { isLoading } = this.state
    const {
      width='100%',
      height=400,
    } = this.props

    return (
      <div>
        { isLoading && <FadedText /> }
        <div style={{ display: this.state.isLoading ? 'none' : 'block' }}>
          <iframe
            ref='iframe'
            frameBorder={0}
            onLoad={this.onLoad}
            width={width}
            height={height}
            {...this.props}
          />
        </div>
      </div>
    )
  }
}