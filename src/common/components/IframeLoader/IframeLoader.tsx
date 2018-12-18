import * as React from 'react'

import FadedText from 'common/components/Preloaders/FadedText/FadedText'

export interface IIframeLoaderProps {
  width?: string | number;
  height?: string | number;
  src: string;
}

export interface IIframeLoaderState {
  isLoading: boolean
}

export default class IframeLoader extends React.PureComponent<IIframeLoaderProps, IIframeLoaderState> {

  readonly refs: {
    iframe: HTMLDivElement
  }

  readonly state: IIframeLoaderState = {
    isLoading: true
  }

  componentDidMount() {
    this.refs.iframe.addEventListener('load', this.onLoad)
  }

  componebntWillUnmount() {
    this.refs.iframe.removeEventListener('load', this.onLoad)
  }

  private onLoad = (): void => this.setState({ isLoading: false })

  render(): React.ReactNode {
    const { isLoading } = this.state
    const {
      width='100%',
      height=400,
      src
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
            src={src}
            {...this.props}
          />
        </div>
      </div>
    )
  }
}