import React, { PureComponent } from 'react'

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

  onLoad = () => this.setState({ isLoading: false })

  render() {
    const { isLoading } = this.state
    const {
      width='100%',
      height=400,
    } = this.props

    return (
      <div>
        { isLoading && <FadedText /> }
        <div style={{ display: isLoading ? 'none' : 'block' }}>
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